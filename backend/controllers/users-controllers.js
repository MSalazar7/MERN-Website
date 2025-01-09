const { v4: uuidv4 } = require("uuid");
const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error");
const User = require("../models/user");


const getUsers = async(req, res, next) => {
  let users;
  try {
    users = await User.find({},'-password');
  } catch (err) {
    const error = new HttpError('Fetching users failed, please try again later',500);
    return next(error);
  }
  
  res.json({ users: users.map(user => user.toObject({getters:true}))});
};

const signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data", 422)
    );
  }
  const { name, email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({email:email});
  } catch (err) {
    const error = new HttpError('Signing up failed, please try again later', 500);
    return next(error);
  }
  

  if(existingUser){
    const error = new HttpError('User exists already, please login instead', 422);
    return next(error);
  }

  const createdUser = new User({
    name,
    email,
    image: 'https://cdn.discordapp.com/attachments/1061558459511881800/1319406713887133706/348s.png?ex=6765d8c1&is=67648741&hm=01cf617853e117f3111b1b0f343dcb355905516e2ccf255a198d4bef4fb14f6d&',
    password,
    places:[]
  });

  try {
    await createdUser.save()  
  } catch (err) {
    const error = new HttpError("Signing up failed, please try again", 500);
    return next(error);
  }


  res.status(201).json({ user: createdUser.toObject({getters:true}) });
};

const login = async(req, res, next) => {
  const { email, password } = req.body;

  let existingUser;

  try {
    existingUser = await User.findOne({email:email});
  } catch (err) {
    const error = new HttpError('Logging in failed, please try again later', 500);
    return next(error);
  }

  if (!existingUser || existingUser.password !== password) {
    return next(
      new HttpError("Could not login user, invalid credentials", 401)
    );
  }

  res.json({ message: "Logged in!", user: existingUser.toObject({getters:true})});
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
