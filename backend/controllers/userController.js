const catchAsyncError = require("../middlewires/error/catchAsyncError");
const User = require("../models/userModel");
const ErrorHander = require("../utils/errorHandler");
const { compare } = require('bcryptjs');
const sendToken = require("../utils/jwtToken");

//Register user

exports.registerUser = catchAsyncError(async (req, res, next) => {
    const { name, email, password } = req.body;

    const user = await User.create({
        name, email, password,
        avatar: {
            public_id: "sample pub id",
            url: "profile url"
        }
    });
    sendToken(user, 201, res);
});

//Login user
exports.loginUser = catchAsyncError(async (req, res, next) => {
    const { email, password } = req.body;
    //check email and password
    if (!email || !password) next(new ErrorHander("Please enter your email and Password", 400));
    // user by email
    const user = await User.findOne({ email }).select('+password');

    if (!user) return next(new ErrorHander("Email does not exist!", 400));
    //is not match password
    if (!await user.comparePassword(password)) return next(new ErrorHander('Password is invalid', 400));
    sendToken(user, 201, res);
});