const router = require('express').Router();
const User = require('../model/User');

//Validation
const Joi = require('@hapi/joi');
const { json } = require('express');
const { string } = require('@hapi/joi');

// const schema = {
//     name: Joi.string().min(6).required(),
//     email: Joi.string().min(6).required().email(),
//     password: Joi.string().min(6).required()
// }

const schema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
});

router.post('/register', async (req, res) => {

    //Lets validate the user before insert into DB
    // const {error} = Joi.valid(req.body, schema);
    const {error} = schema.validate(req.body);
    // res.send(error.details[0].message);
    // res.send(error);
    if(error) return res.status(400).send(error);

    // const user = new User({
    //     name : req.body.name,
    //     email : req.body.email,
    //     password: req.body.password
    // });
    // // res.send('Register');
    // try{
    //     const savedUser = await user.save();
    //     res.send(savedUser);
    // }catch(err){
    //     res.statusCode(400).send(err);
    // }
});

module.exports = router;