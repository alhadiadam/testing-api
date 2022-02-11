var express = require('express');
var router = express.Router();
var User = require('../models/user')

/* GET users listing. */
router.get('/', async (req, res) =>{
  try{
    const users = await User.find();
    res.json(users);
  }catch(err){
    res.json({message: err});
  }
});

// Create User
router.post('/', async(req, res) => {
  const {email, name, phone, address, id_number, gender} = req.body;
  try{
    const user = new User({email, name, phone, address, id_number, gender});
    const savedUser = await user.save();
    res.json(savedUser);
   }catch(err){
    res.json({message: err});
   }
});

//Get User by ID
router.get('/:id', async (res, req) => {
  try{
    const user = await User.findById(req.params.id);
    res.json(user);
  }catch(err){
    res.json({message: err})
  }
});


router.patch('/:id', async(req, res) => {
  try{
   const updatedUser = await post.updateOne({_id: req.params.id}, 
    {$set: 
      {name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      id_number: req.body.id_number,
      gender: req.body.gender}})
      res.json(updatedUser);
  }catch(err){
     res.json({message: err})
  }
});


module.exports = router;
