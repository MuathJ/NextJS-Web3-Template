import { create } from 'zustand'

interface useDataStoreType {
  data: string | null
  setData: (data: string | null) => void
}

const useDataStore = create<useDataStoreType>((set) => ({
  data: null,
  setData: (data) => set({ data }),
}))

export default useDataStore

// ------------------------------------------------------

// EXAMPLE USAGE
// import useDataStore from '@/stores/useDataStore'
//
// const { data, setData } = useDataStore()
// setData('new data')
// console.log(data)

// ------------------------------------------------------
