import {getNotices} from '@/sanity/queries'
import SearchPage from '@/components/mine/SearchPage'

const page = async () => {
  const data = await getNotices()
  if (data.length == 0){
    return (
      <p>No notices</p>
    )
  }

  return (
    <SearchPage 
    data={data}
    />
  )
}

export default page