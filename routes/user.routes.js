const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const usermodel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


router.get('/register', (req, res) => {
  res.render('register');
});

router.post('/register',
  body('username').trim().isLength({ min: 5 }).withMessage('Username must be at least 5 characters long'),
  body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long'),
  body('email').isEmail().withMessage('Email must be valid').trim().normalizeEmail(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { email, username, password } = req.body;



      // Check if the email already exists
      const existingUser = await usermodel.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: 'Email already in use' });
      }



      console.log('Creating user with:', { email, username, password });

      const hashpassword = await bcrypt.hash(password, 10)
      const newuser = await usermodel.create({ email, username, password: hashpassword });
      res.json(newuser);
    } catch (error) {
      console.error('Error creating user:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);


router.get("/login",
  (req, res) => {
    res.render("login")
  })

router.post('/login',
  body('email').isEmail().withMessage('Email must be valid').trim().normalizeEmail(),
  body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long'),

  async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }


      const { email,password } = req.body;
      
      const user = await usermodel.findOne({
        email:email
      })

      if(!user){
        return res.status(400).json({
          message:"User or email not  found"
        })
      }
      const isMatch = await bcrypt.compare(password,user.password)
      if(!isMatch){
        return res.status(400).json({
          message:"Password is incorrect"
        })
      }


      const token =jwt.sign({
        email:user.email,
        id:user._id
      },
      process.env.JWT_SECRET,
                                    res.json({ token });

      )
    }
             catch (error) {
        console.error('Login error:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
  )

     



module.exports = router;
