"use server"
import user from "../models/user"
import connectDB from "../connect"

const signUp = async (formData) => {
    await connectDB()

}

export default signUp