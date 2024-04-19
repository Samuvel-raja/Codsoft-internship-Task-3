import mongoose from "mongoose";

const CreateBlogModel=mongoose.Schema(
    {
        title: 
        {
            type:String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        imageURL: {
            type: String,
            
        },
        date: {
            type: String,
            required: true
        }
    }
)
export default mongoose.model('blog',CreateBlogModel)