import { config } from "dotenv";

config()

export const PORT = process.env.EXPRESS_PORT || 3050
export const MONGODB_URL = process.env.MONGODB_CONNECTION_STRING