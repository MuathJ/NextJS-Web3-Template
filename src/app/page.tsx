'use client'
import ConnectWallet from '@/components/reusable/ConnectWallet'
import Modal from '@/components/reusable/Modal'
import useModal from '@/hooks/useModal'

// Home Page
export default function Home() {
  const [showModal, setShowModal] = useModal()

  return (
    <main className='side-padding flex min-h-screen flex-col items-center justify-center gap-10 py-20'>
      <h1>HomePage</h1>

      <ConnectWallet />

      <button onClick={() => setShowModal(true)} className='button'>
        Show Modal
      </button>

      <Modal show={showModal} onClose={() => setShowModal(false)} title='Modal Title'>
        <div className='subtitle1 mb-2'>Modal Content</div>
        <p className='mb-6'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>

        <button className='button' onClick={() => setShowModal(false)}>
          Close
        </button>
      </Modal>
    </main>
  )
}
