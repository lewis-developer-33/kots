import user from '@/lib/models/user'
import connectDB from '@/lib/connect'
import {registerUser,getUsers} from '@/lib/actions'
import { NextResponse } from 'next/server'


export async function POST(req) {
    

    const res = await req.json()
    const {Username,email,password,role} = res

    let college
    let school
    let department

    if (role == 'student')
    {
        college = req.body.college
        school = req.body.school
        department = req.body.department
    }

    const userCreated = await registerUser({
        username:Username,
        email,
        password,
        role,
        college,
        school,
        department
    })
    
    // const userCreated = await getUsers()
    
    return NextResponse.json({message:userCreated})
  }