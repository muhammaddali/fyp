import mongoose from "mongoose";


const Schema = mongoose.Schema;



// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CategorySchema = new Schema(
    {
        name: {type: String , required: true}
    }
)

const ProductSchema = new Schema(
    {
        name: {type: String , required: true},
        description: {type: String , required: true},
        price: {type: String , required: true},
        category: {type: String , required: true},
        imageUrl: {type: String, required: true}

    }
)


export default mongoose.model("Product", ProductSchema); 

