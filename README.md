# blockchain-capston

🧱 Udacity Blockchain Capstone Project

This project is the final capstone for the Udacity Blockchain Developer Nanodegree.
It implements a Real Estate Tokenization DApp using Ethereum, Solidity, and ZoKrates for Zero-Knowledge Proofs (ZKP).
The project demonstrates minting of verified ERC721 tokens, deployment to the Rinkeby Test Network, and integration with OpenSea.

<img width="888" height="577" alt="Screenshot 2025-10-08 at 5 13 28 PM" src="https://github.com/user-attachments/assets/40c1e265-1c2e-4db8-a2f2-9c13d8d03374" />


🚀 Features

✅ Custom ERC721 (NFT) smart contract

✅ Integrated Zero-Knowledge Proofs (ZKP) with ZoKrates

✅ Tokens minted after proof verification

✅ Fully deployed on Rinkeby Ethereum Testnet

✅ Viewable on OpenSea (Rinkeby) marketplace

✅ Uses Truffle, Ganache, and OpenZeppelin libraries

✅ Includes automated unit testing via truffle test

🧩 Technologies Used

Solidity – Smart contract language

Truffle Framework – Smart contract compilation, deployment, and testing

Ganache – Local blockchain for development

OpenZeppelin – Secure contract library for ERC standards

ZoKrates – Zero-Knowledge Proof toolkit

Docker – To run ZoKrates easily

Rinkeby Test Network – For public test deployment

OpenSea – NFT visualization and verification

📦 Installation and Setup
1️⃣ Install dependencies
npm install

2️⃣ Compile smart contracts
truffle compile

3️⃣ Deploy contracts to local network
truffle migrate --network development --reset

🧠 Generate and Verify Proofs using ZoKrates

Run ZoKrates Docker Container

docker run -v /path/to/zokrates/zokrates/code:/home/zokrates/code -ti zokrates/zokrates /bin/bash


⚠️ Note (Windows Users)
Ensure your project path is under C://Users/... since Docker cannot mount folders outside this path.

Navigate to ZoKrates project folder

cd code/square


Setup and compute witness

~/zokrates setup
~/zokrates compute-witness -a 3 9


Generate proof

~/zokrates generate-proof


The generated proof will be located at:
zokrates/code/square/proof.json

💎 Minting Tokens

Update your mint.js file with the new proof parameters from proof.json, then run:

node mint.js

✅ Minted Tokens Proofs

View Token Transactions on Rinkeby Etherscan:

https://rinkeby.etherscan.io/tx/0x3fb3d1be008d96fa427415e50d9d9b5487ac3b489278229a640f66402a5b827f
https://rinkeby.etherscan.io/tx/0x9c503880efecb694677c28dc5697c27bad0cd4d0e69780d316e523678bf2ef2d
https://rinkeby.etherscan.io/tx/0xf75cb56d926b92f113c5011881b8ee5f7941efb2f20bc59f63186aea441e464e
https://rinkeby.etherscan.io/tx/0x20a033e968644ed4095cbec313949f78cd52b15e10f70d9a8f6a5c84a790348e
https://rinkeby.etherscan.io/tx/0xe545a21f82c082dd30afb6b3b075d43afb583c00b57291f005c37dbf3542e0a5

OpenSea Assets:
👉 View All Tokens on OpenSea (Rinkeby)

🧱 Deployment Summary
Contract	Address	Network
Migrations	0x9d73B3b7aa8fC2e1213F225a9f99ad13FFAdF8F8	Rinkeby
MikeRealERC721Token	0xaD22B74DAD6B5E8f339Be452bE07eCB8eF19C57D	Rinkeby
SquareVerifier	0xB65fa90010d457bFeea7b15625457904417f25A4	Rinkeby
SolnSquareVerifier	0x5F61204D91437181b9aB7E0A77b9d9072A8d7D44	Rinkeby

Total Deployment Cost: 0.18588818 ETH
Network ID: 4447
Block Gas Limit: 6721975

🧪 Running Unit Tests

To verify contract functionality:

truffle test


Example Proofs:

https://rinkeby.etherscan.io/tx/0xe89f21b7b1d9120c53ec19aef63f4ced928354abb375977158e449b130830720
https://rinkeby.etherscan.io/tx/0x29b718dbb25ad8735eb8a32b1ddebc349adc398c99c6ad4dbe82b24dbc561b89
https://rinkeby.etherscan.io/tx/0xd59aa7ef990d9c06be833e21ec35d2b3de1706a92969c149302488b64e4b065e

🧰 Project Resources

Remix - Solidity IDE

Visual Studio Code

Truffle Framework

Ganache

OpenZeppelin

ZoKrates

Docker

OpenSea Testnet
