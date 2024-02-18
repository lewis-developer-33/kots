'use client'
import { useState } from 'react'
import {StarIcon,StarOffIcon} from 'lucide-react'

const Star = () => {
    const [mark,setMark] = useState(false)
    const handleChange = () => {
        setMark((prev) => !prev)
    }
    return(
        <div>
            {mark ? <StarIcon className='cursor-pointer' onClick={handleChange}/> : <StarOffIcon className='cursor-pointer' onClick={handleChange}/>}
        </div>
    )
}

export default Star