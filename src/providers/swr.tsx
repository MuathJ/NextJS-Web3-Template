'use client'
import { FC, ReactNode } from 'react'
import axios from 'axios'
import { SWRConfig } from 'swr'
import { apiConfig } from '@/config'

// SWR fetcher to handle GET, POST, PUT, PATCH, DELETE requests
export const fetcher = async (url: string, method: string, data: any = null) => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }

  switch (method) {
    case 'GET':
      return axios.get(url, { headers }).then((res) => res.data)
    case 'POST':
      return axios.post(url, data, { headers }).then((res) => res.data)
    case 'PUT':
      return axios.put(url, data, { headers }).then((res) => res.data)
    case 'PATCH':
      return axios.patch(url, data, { headers }).then((res) => res.data)
    case 'DELETE':
      return axios.delete(url, { headers }).then((res) => res.data)
    default:
      throw new Error(`Unsupported fetch method: ${method}`)
  }
}

export const SWRProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <SWRConfig
      value={{
        fetcher,
        dedupingInterval: apiConfig.dedupingInterval,
        focusThrottleInterval: apiConfig.focusThrottleInterval,
        revalidateOnFocus: apiConfig.revalidateOnFocus,
        revalidateOnReconnect: apiConfig.revalidateOnReconnect,
      }}
    >
      {children}
    </SWRConfig>
  )
}
