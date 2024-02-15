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
import { siteData } from "@/lib/config"

const Page = () => {
    const {title} = siteData
    const { toast } = useToast()
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
            if (!res.ok) {
                toast({
                    variant:'destructive',
                    title: "Failed to submit the data",
                    description: "Please try again later",
                })
            }
            const data = await res.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }

    }
  return (
    <Card className="w-[350px] sm:w-[450px] md:w-[500px] shadow-lg ">
      <CardHeader>
        <CardTitle>{title} | log in</CardTitle>
        <CardDescription>Welcome back.</CardDescription>
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
              <Label htmlFor="email">Password</Label>
              <Input 
              required  
              minLength={8}
              maxLength={16}
              onChange={handleChange}  name="password" type="password"/>
            </div>
            
           
            <div>
                <Button>Sign Up</Button>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <div className="grid gap-1">
            <Link 
            className="hover:text-blue-800 font-semibold"
            href='/auth/register'>Don&apos;t have an account ? </Link>
            <Link 
            className="hover:text-blue-800 font-semibold"
            href='/auth/forgot'>Forgot Password ? </Link>
        </div>
        
      </CardFooter>
    </Card>
  )
}

export default Page
