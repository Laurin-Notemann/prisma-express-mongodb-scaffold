import mongoose from "mongoose";
import { MONGODB_URL } from "../secrets";


export const connectToDatabase = async () => {
  try {

    mongoose.set("strictQuery", true)
    await mongoose.connect(MONGODB_URL!)
    

    const msg = "Successfully connected to database"

    return [null, msg] as const
  } catch (error) {
    return [error, null] as const
  }
}
