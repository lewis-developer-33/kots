import user from '@/lib/models/user'
import connectDB from '@/lib/connect'
import bcrypt from 'bcrypt'
import { NextResponse } from 'next/server'

export async function POST(req, res) {
    await connectDB()
    let college
    let school
    let department

    const {username,email,password,role} = req.body;
    if (role == 'student')
    {
        college = req.body.college
        school = req.body.school
        department = req.body.department
    }

    try {
        const userExists = user.findOne({username})
        if (userExists != null){
            console.log("username exists")
            return NextResponse.json({message:"Username already exists"},{status:500})
        }
    
        const hashedPassword = await bcrypt.hash(password,10)
    
        await user.create({
            username,
            email,
            password:hashedPassword,
            role,
            college: college.length != null ? college : null,
            school: school.length != null ? school : null,
            department: department.length != null ? department : null
        })
    } catch (error) {
        console.log(error.message)
        return NextResponse.json({message:error.message},{status:500})
    }
    return NextResponse.json({message:"User created successfully"},{status:200})
  }