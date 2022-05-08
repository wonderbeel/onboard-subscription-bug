import './style.css'

import Onboard from '@web3-onboard/core'
import injectedModule from '@web3-onboard/injected-wallets'

const MAINNET_RPC_URL = 'https://mainnet.infura.io/v3/ababf9851fd845d0a167825f97eeb12b'

const injected = injectedModule()

const onboard = Onboard({
  wallets: [injected],
  chains: [
    {
      id: '0x1',
      token: 'ETH',
      label: 'Ethereum Mainnet',
      rpcUrl: MAINNET_RPC_URL
    }
  ],
  appMetadata: {
    name: 'My App',
    icon: '<svg></svg>',
    description: 'My app using Onboard'
  }
})
const wallets = await onboard.connectWallet()

console.log(wallets)

onboard.state.select().subscribe((update) => {
  console.log("subscription handler", update);
})

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
