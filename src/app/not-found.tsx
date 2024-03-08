import { redirect } from 'next/navigation'

export default async function PageNotFound() {
  redirect('/')
}