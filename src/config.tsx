// Web3Modal context
export const web3ModalConfig = {
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || '0',
  mainnet: {
    chainId: 1,
    name: 'Ethereum',
    currency: 'ETH',
    explorerUrl: 'https://etherscan.io',
    rpcUrl: 'https://cloudflare-eth.com',
  },
  metadata: {
    name: 'app',
    description: '',
    url: '',
    icons: [''],
  },
}

// SWR API Fetcher Configuration
export const apiConfig = {
  dedupingInterval: 2000, // Deduplicates requests to the same key in this interval (milliseconds)
  focusThrottleInterval: 5000, // Throttles revalidation on window focus to this interval (milliseconds)
  revalidateOnFocus: true, // Automatically revalidate when window gets focused
  revalidateOnReconnect: true, // Automatically revalidate when the browser regains a network connection
}
