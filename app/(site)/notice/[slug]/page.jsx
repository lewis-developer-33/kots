import {getNotice} from '@/sanity/queries'

const page = async ({params}) => {
  const data = await getNotice(params.slug)
  console.log(data)
  if (data == null){
    return (
      <p>No notices</p>
    )
  }
  const {_id,filePaper,body,college,school,department,slug,title} = d
  return (
    <>
      {d.title}
    </>
  )
}

export default page