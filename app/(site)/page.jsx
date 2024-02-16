import {getNotices} from '@/sanity/queries'
import Link from 'next/link'

const page = async () => {
  const data = await getNotices()
  console.log(data)
  if (data.length == 0){
    return (
      <p>No notices</p>
    )
  }
  return (
    <>
      {data.map((d) => {
        const {_id,filePaper,body,college,school,department,slug,title} = d
        return (
          <Link href={`/notice/${slug}`} key={_id}>
            {title}
          </Link>
        )
      })}
    </>
  )
}

export default page