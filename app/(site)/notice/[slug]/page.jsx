import {getNotice} from '@/sanity/queries'
import {PortableText} from '@portabletext/react'
import {FileDownIcon} from 'lucide-react'
import Star from '@/components/mine/Star'
import Link from 'next/link'

const page = async ({params}) => {
  const data = await getNotice(params.slug)
  console.log(data)
  if (data == null){
    return (
      <p>No notices</p>
    )
  }
  const {_id,filePaper,_updatedAt,body,college,school,department,title} = data
  const scopeValues = []
  const dateValue = _updatedAt.slice(0,10)
  if (department != null) {
    department.forEach((data) => scopeValues.push(data.title))
  }
  else if (school != null){
    school.forEach((data) => scopeValues.push(data.title))
  }
  else if (college != null){
    college.forEach((data) => scopeValues.push(data.title))
  }
  return (
    <div className='h-full w-full flex flex-col items-center py-8 '>
      <div className='flex flex-col items-center gap-4 max-w-[700px] relative'>    
        <div className='absolute right-8'>
          <Star/>
        </div>
        <div className='flex flex-col items-center'>
          <h2 className='font-bold text-2xl'>{title}</h2>
          <div className='flex items-center gap-3 font-semibold text-slate-900/80'>
            {scopeValues.map((d,i) => (
                <p key={i}>{d}</p>
            ))}
          </div>
        </div>
        <div className='font-medium prose-lg prose-h2:max-w-[32ch] prose-h2:text-5xl'>
            <PortableText value={body}/>
        </div>
        <div className='w-full flex justify-start-start'>
          <Link href={filePaper} className='flex  items-center border-1 border-slate-900 px-4 py-2 bg-slate-900 text-white rounded-sm transition duration-300 ease-in-out hover:scale-105'>
            <FileDownIcon/>
            <p>Get Document</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default page