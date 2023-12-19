import mongoose from "mongoose";

export const User = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    loses: Number,
    email: String
  });
  