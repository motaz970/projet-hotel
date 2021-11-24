const express = require('express');
const router = express.Router();
const { add_chambre,update_chambre,  delete_chambre,select_chambre} = require('../controllers/chambre.controllers');

router.post('/', add_chambre);
router.put('/:id', update_chambre);
router.delete('/:id', delete_chambre);
router.get('/', select_chambre);


module.exports = router;
