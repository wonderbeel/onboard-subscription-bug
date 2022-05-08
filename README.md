# onboard-subscription-bug
web3-onboard subscription bug reproduction

# Steps to reproduce:

- `pnpm install`
- `pnpm dev`
- Open `http://localhost:3000`
- Connect the wallet
- Open an inspector
- Click anywhere in the page
- See that every click trigger an event
