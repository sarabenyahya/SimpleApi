const express = require('express');
const router = express.Router();
const FakeService = require('../services/fakeService');


router.get('/',(req, res)=> {
    res.json(FakeService.getAllEmployees());
})

router.get('/:id', (req, res)=>{
   const id = +req.params.id;
   const employee = FakeService.getEmployeeById(id);
   if(!employee) {
    res.status(404).json({ message: 'Employé non trouvé' })
   }else{
    res.json(employee)
   }
})

router.post('/', (req, res)=>{
    const {  nom, mail, age, password, genre, interets } = req.body;
    if ( !nom || !mail || !age || !password || !genre || !interets) {
        return res.status(400).json({ message: 'Erreur: Données incomplètes' });
    }
   
   
    const newEmployee = FakeService.addEmployee({ nom, mail, age, password, genre, interets });
    res.status(201).json(newEmployee);
})


module.exports = router;