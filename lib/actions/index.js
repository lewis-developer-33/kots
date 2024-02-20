import user from "../models/user"
import connectDB from "../connect"
import bcrypt from 'bcrypt'

export const getUsers = async () => {
    try {
        await connectDB()
        const users = await user.find()
        return users
    } catch (error) {
        return error.message
    }
}

export const registerUser = async ({username,email,password,role,college,school,department}) => {
    try {
        await connectDB()
        const userExistsUsername = await user.findOne({username})
        
        if (userExistsUsername) {
            console.log(userExistsUsername)
            return 'Username already taken'
        }

        const userExistsEmail = await user.findOne({email})
        if (userExistsEmail) {
            console.log(userExistsEmail)
            return 'Email already taken'
        }

        // const hashedPassword = await bcrypt.hash(password,10)
    
        await user.create({
            username,
            email,
            password,
            role,
            college: college != null ? college : null,
            school: school!= null ? school : null,
            department: department != null ? department : null
        })
        console.log('User created')
        return 'User created successfully'
    } catch (error) {
        return error.message
    }
}
