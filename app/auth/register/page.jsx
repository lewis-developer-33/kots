'use client'

import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { siteData } from "@/lib/config"

const Page = () => {
    const {title} = siteData
    const { toast } = useToast()
    const [role,setRole] = useState('')
    const [user,setUser] = useState({})
    const handleChange = (e) => {
        const {name,value} = e.target
        setUser(prevState => ({
            ...prevState,
            [name]:value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch('/api/auth/register',{
                method:'POST',
                body:JSON.stringify(user)
            })
            
            const data = await res.json()
            if (data?.error) {
              toast({
                variant:'destructive',
                title:data?.error
              })
            }
            console.log(data)
        } catch (error) {
            console.log(error)
        }

    }
  return (
    <Card className="w-[350px] sm:w-[450px] md:w-[500px] shadow-lg ">
      <CardHeader>
        <CardTitle>{title} | Register</CardTitle>
        <CardDescription>Welcome and enjoy.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Usename</Label>
              <Input 
              onChange={handleChange} 
              type='text' 
              required  
              minLength={5}
              maxLength={10}
              name="Username"/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input 
              required
              onChange={handleChange}  
              name="email" 
              type='email'/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Password</Label>
              <Input 
              required  
              minLength={8}
              maxLength={16}
              onChange={handleChange}  name="password" type="password"/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="role">Role</Label>
              <Select 
              onValueChange={(value) => {
                setUser(prevState => ({
                    ...prevState,
                    role:value
                }))
                setRole(value)
                }}
              name='role'
              required
              >
                <SelectTrigger id="role">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="lecturer">Lecturer</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {role == 'student' && (
            <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                <Label htmlFor="college">College</Label>
                <Select 
                onValueChange={(value) => {
                    setUser(prevState => ({
                        ...prevState,
                        college:value
                    }))
                }}
                name='college'>
                    <SelectTrigger id="college">
                    <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="lecturer">Lecturer</SelectItem>
                    </SelectContent>
                </Select>
                </div>
                <div className="flex flex-col space-y-1.5">
                <Label htmlFor="school">School</Label>
                <Select 
                onValueChange={(value) => {
                    setUser(prevState => ({
                        ...prevState,
                        school:value
                    }))
                }}
                name='school'>
                    <SelectTrigger id="school">
                    <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="lecturer">Lecturer</SelectItem>
                    </SelectContent>
                </Select>
                </div>
                <div className="flex flex-col space-y-1.5">
                <Label htmlFor="department">Department</Label>
                <Select 
                onValueChange={(value) => {
                    setUser(prevState => ({
                        ...prevState,
                        department:value
                    }))
                }}
                name='department'>
                    <SelectTrigger id="department">
                    <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="lecturer">Lecturer</SelectItem>
                    </SelectContent>
                </Select>
                </div>
            </div>
            )}
            <div>
                <Button>Sign Up</Button>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Link 
        className="hover:text-blue-800 font-semibold"
        href='/auth/login'>Already have an account ? </Link>
        
      </CardFooter>
    </Card>
  )
}

export default Page
