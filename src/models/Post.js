import { Schema, model, models } from "mongoose";


const postSchema = new Schema({
  name: {
    type: String,
    required: true,
    
  },
  phoneNumber: {
    type: String,
    required: true,
    
  },
  age: {
    type: Number, 
    required: true,
    
  },
  prevCollegeName: {
    type: String,
    required: true,
    
  },
  prevCollegeGrade: {
    type: String,
    required: true,
    
  },
  universityName: {
    type: String,
    required: true,
    
  },
  depName: {
    type: String,
    required: true,
    
  },
  // uploadFile: {
  //   type: String, 
  // },
  uploadFile: {
    type: [String], // Updated to store an array of strings
  },
  
});

const Post = models.Post || model("Post",postSchema)

export default Post;

// module.exports = mongoose.model("Post", postSchema);
