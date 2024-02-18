import {getNotices} from '@/sanity/queries'
import Link from 'next/link'

const page = async () => {
  const data = await getNotices()
  if (data.length == 0){
    return (
      <p>No notices</p>
    )
  }

  return (
    <div className='h-full w-full flex flex-col items-center py-8'>
      <div className='grid gap-4'>
        {data.map((d) => {
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
  )
}

export default page