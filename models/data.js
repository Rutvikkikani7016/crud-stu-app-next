import mongoose, { Schema } from "mongoose";

const dataSchema = new Schema(
    {
        name: String,
        email: String,
        age: Number,
        city: String
    },
    {
        timestamps: true,
    }
)

const Data  = mongoose.models.Data || mongoose.model("Data", dataSchema);

export default Data;