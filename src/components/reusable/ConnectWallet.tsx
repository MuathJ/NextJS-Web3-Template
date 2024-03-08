'use client'
import { useEffect, useState } from 'react'
import {
  useWeb3Modal,
  useWeb3ModalState,
  useWeb3ModalAccount,
  useDisconnect,
  useWeb3ModalProvider,
  useWeb3ModalTheme,
} from '@web3modal/ethers5/react'
// import { ethers, Signer } from 'ethers'
import { formatAddress } from '@/utils'

// Connect Wallet Component
export default function ConnectWallet() {
  const [isMounted, setIsMounted] = useState(false)
  const { open } = useWeb3Modal()
  const { open: isModalOpen } = useWeb3ModalState()
  const { address, isConnected } = useWeb3ModalAccount()
  const { disconnect } = useDisconnect()
  const { setThemeMode } = useWeb3ModalTheme()
  setThemeMode('light')
  // const { walletProvider } = useWeb3ModalProvider()
  // let signer: Signer

  // Reload page on account change
  useEffect(() => {
    setIsMounted(true)
    if (window.ethereum) {
      const handleAccountsChanged = () => {
        window.location.reload()
      }
      ;(window.ethereum as any).on('accountsChanged', handleAccountsChanged)

      return () => {
        if (window.ethereum) {
          ;(window.ethereum as any).removeListener('accountsChanged', handleAccountsChanged)
        }
      }
    }
  }, [])

  // Show/hide scrollbar based on modal open state
  useEffect(() => {
    if (isModalOpen && document.body.clientHeight > window.innerHeight) {
      document.documentElement.classList.add('show-scrollbar')
    } else {
      document.documentElement.classList.remove('show-scrollbar')
    }
  }, [isModalOpen])

  // Set signer when wallet provider is connected
  // useEffect(() => {
  //   if (!walletProvider) return
  //   const provider = new ethers.providers.Web3Provider(walletProvider)
  //   signer = provider.getSigner()
  // }, [walletProvider])

  if (!isMounted) {
    return <button className='button'>Loading...</button>
  }

  return (
    <>
      {isConnected ? (
        <>
          <div className='flex flex-col gap-4'>
            <button className='button' onClick={() => open()}>
              Wallet Address: {formatAddress(address)}
            </button>
            <button className='button' onClick={() => disconnect()}>
              Disconnect Wallet
            </button>
          </div>
        </>
      ) : !isConnected && isModalOpen ? (
        <button className='button'>Connecting...</button>
      ) : (
        !isConnected && (
          <button className='button' onClick={() => open()}>
            Connect Wallet
          </button>
        )
      )}
    </>
  )
}
