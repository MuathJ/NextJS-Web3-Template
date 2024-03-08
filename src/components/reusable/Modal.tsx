'use client'
import { useRef } from 'react'
import useOutsideClick from '@/hooks/useOutsideClick'

const Modal = ({
  show,
  onClose,
  title,
  children,
}: {
  show: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}) => {
  const modalRef = useRef<HTMLDivElement>(null)
  useOutsideClick(modalRef, onClose)

  return show ? (
    <div className='modal-overlay'>
      <div
        ref={modalRef}
        className='card relative h-fit min-h-[200px] max-w-[800px] flex-col justify-center bg-white p-8'
      >
        <div className='x-icon absolute right-4 top-4' onClick={onClose} />

        <div className='relative flex flex-col items-center justify-center'>
          <h4>{title}</h4>
          <div className='line my-6' />
          {children}
        </div>
      </div>
    </div>
  ) : null
}

export default Modal
