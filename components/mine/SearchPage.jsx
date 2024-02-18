'use client'

import { useState,useEffect } from 'react'
import { SearchIcon } from 'lucide-react'
import Link from 'next/link'

const SearchPage = ({data}) => {
  const [search,setSearch] = useState('')
  const handleChange = (e) => {
    const {value} = e.target
    setSearch(value)
  }


  console.log(search)
  
  const filterFunction = (value) => {
    const {college,school,department} = value
    const scopeValues = []
    if (department != null) {
        department.forEach((d) => scopeValues.push(d.title))
    }
    else if (school != null){
        school.forEach((d) => scopeValues.push(d.title))
    }
    else if (college != null){
        college.forEach((d) => scopeValues.push(d.title))
    }

    const actualValues = scopeValues.filter((scope) => scope.includes(search))
    return actualValues

  }

  return (
    <div className='h-full w-full flex flex-col items-center py-8'>
        <div className='flex flex-col items-center max-w-[450px] lg:max-w-[700px] gap-5'>
            <div className='w-full flex justify-start items-center gap-1'>
                <input
                type='text'
                onChange={handleChange}
                placeholder="Search by name or scope"
                className='w-[80%] rounded sm bg-slate-900 p-2 text-white'
                />
                <SearchIcon className='rounded-full bg-slate-900 text-white p-2 w-9 h-9'/>
            </div>
            <div className='grid gap-4'>
                {data.filter(filterFunction).map((d) => {
                const {_id,_updatedAt,college,school,department,slug,title} = d
                const scopeValues = []
                const dateValue = _updatedAt.slice(0,10)
                if (department != null) {
                    department.forEach((d) => scopeValues.push(d.title))
                }
                else if (school != null){
                    school.forEach((d) => scopeValues.push(d.title))
                }
                else if (college != null){
                    college.forEach((d) => scopeValues.push(d.title))
                }
                return (
                    <Link
                    href={`/notice/${slug}`} key={_id} 
                    className='shadow-sm w-[500px] bg-slate-900 flex items-center justify-between text-white py-4 rounded-sm shadow-slate-900 px-2 transition duration-300 ease-in-out hover:scale-105'>
                    <h2 className='font-bold text-lg'>{title}</h2>
                    <div className='flex items-center gap-2'>
                        {scopeValues.map((d,i) => (
                        <p key={i}>{d}</p>
                        ) )}
                    </div>
                    <div className='text-sm text-white/80'>{dateValue}</div>
                    </Link>
                )
                })}
            </div>
        </div>
    </div>
  )
}

export default SearchPage