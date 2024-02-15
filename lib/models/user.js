import mongoose from "mongoose";

const Notices = mongoose.Schema({
  name:String
})

const User = mongoose.Schema(
  {
    username: {
        type:String,
        required:true,
        unique:true
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    password: {
        type:String,
        required:true,
    },
    role: {
        type:String,
        required:true,
        default:'User'
    },
    bookmarks:[Notices],
    notifications:{
      type:Boolean,
      default:true
    }
    
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User || mongoose.model("User", User);