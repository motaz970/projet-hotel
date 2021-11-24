const chambre = require('./../models/chambre');
const ObjectId = require('mongoose').Types.ObjectId;

exports.getchambre = async(_req,res) => {
  try {
    const chambres = await chambre.find();
    return res.status(200).json({chambres});
  } catch (error) {
    console.log('INTERNAL ERROR', error)
  }
}

exports.addchambre = async (req,res) => {
  try {
    const {id,num,num_etage,prix} = req.body;
    if(!id||!num||!num_etage||!prix) return res.status(403).json({message : 'Invalid Data'});
    const chambre = new chambre({id,num,num_etage,prix});
    await chambre.save();  
    res.status(200).json({message : "chambre Saved Succesfully !", chambre});
  } catch (error) {
    console.log('INTERNALE ERROR', error);
  }
}

exports.updatechambre = async(req,res) => {
  try {
    const {id} = req.params;
    const {id,num,num_etage,prix} = req.body;
    if (!ObjectId.isValid(id)) return res.status(404).json({message: 'Not Valid Id'});
    const chambre = await chambre.findById(id);
    if (!chambre) return res.status(404).json({message: 'chambre not found'});
    const updatedchambre = {id,num,num_etage,prix};
    await chambre.findByIdAndUpdate(id,{ $set: updatedchambre },{ new: true });
    res.status(200).json({message:"chambre updated succesfully"});
  } catch (error) {
    console.log('INTERNAL ERROR', error);
  }
}

exports.deletechambre = async(req,res) => {
  try {
    const {id} = req.params;
    if (!ObjectId.isValid(id)) return res.status(404).json({message: 'Not Valid Id'});
    const chambre = await chambre.findById(id);
    if (!chambre) return res.status(404).json({message: 'chambre not found'});
    await chambre.findOneAndDelete({_id : id});
    res.status(200).json({message:"chambre deleted succesfully"});
  } catch (error) {
    console.log('INTERNAL ERROR', error);
  }
}