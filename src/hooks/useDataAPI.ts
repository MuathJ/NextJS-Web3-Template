import useSWR from 'swr'
import { fetcher } from '@/providers/swr'

const API_URL = process.env.NEXT_PUBLIC_API_URL

// Example of GET request to fetch data from the API
export function useGetData() {
  const { data, error } = useSWR(`${API_URL}/get/endpoint`, (url) => fetcher(url, 'GET'))

  return {
    getData: data,
    isGetDataLoading: !error && !data,
    isGetDateError: error,
  }
}

// Example of POST request to send data to the API
export function usePostData() {
  const postData = async (body: string) => {
    return await fetcher(`${API_URL}/post/endpoint`, 'POST', { body })
  }

  return { post: postData }
}

// ----------------------------------------------

// EXAMPLE USAGE FOR GET REQUEST
// import { useGetData } from '@/hooks/useDataAPI'

// const GetData = () => {
//   const { getData, isGetDataLoading, isGetDateError } = useGetData()

//   if (isGetDataLoading) return <div>Loading...</div>
//   if (isGetDateError) return <div>Error loading data.</div>

//   return <>{getData && <div>{getData}</div>}</>
// }

// export default GetData

// ----------------------------------------------

// EXAMPLE USAGE FOR POST REQUEST
// import { useState } from 'react'
// import { usePostData } from '@/hooks/useDataAPI'

// const SubmitForm = () => {
//   const [input, setInput] = useState('')
//   const { post } = usePostData()

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     try {
//       const response = await post(input)
//       console.log(response)
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type='text' value={input} onChange={(e) => setInput(e.target.value)} placeholder='Enter data here...' />
//       <button type='submit'>Submit</button>
//     </form>
//   )
// }

// export default SubmitForm

// ----------------------------------------------
