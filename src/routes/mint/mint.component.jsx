import React, { useState } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import abi from "./abi.json";
import "./mint.styles.css";

const Mint = () => {
  const contractAddress = "0xc72F49F971A1194D0d70974519e977800A9e8232"; // The address of the deployed contract
  const contract = new ethers.Contract(contractAddress, abi);

  const [provider, setProvider] = useState(null);

  async function connectWallet() {
    const web3Modal = new Web3Modal({
      network: "mainnet", // change to the network you're using
      cacheProvider: true,
      providerOptions: {},
    });

    const web3Provider = await web3Modal.connect();
    const newProvider = new ethers.providers.Web3Provider(web3Provider);

    setProvider(newProvider);
    return newProvider;
  }

  async function mintTokens(numTokens) {
    if (!provider) {
      console.log("Provider not set yet");
      return;
    }

    try {
      const tokenAmount = numTokens;
      console.log((69 * numTokens).toFixed(3));
      const ethAmount = ethers.utils.parseEther(
        (0.069 * numTokens).toFixed(3).toString()
      ); // 0.069 ETH per token
      const signer = provider.getSigner();
      const owner = await signer.getAddress();

      const gasPrice = await provider.getGasPrice();
      const tx = {
        to: contractAddress,
        value: ethAmount,
        data: contract.interface.encodeFunctionData("mint", [tokenAmount]),
        from: owner,
      };
      const gasEstimate = await signer.estimateGas(tx);

      tx.gasPrice = gasPrice;
      tx.gasLimit = gasEstimate.toNumber() + 500000;
      const transactionResponse = await signer.sendTransaction(tx);

      await transactionResponse.wait();
      return transactionResponse.hash;
    } catch (error) {
      console.error("Error minting tokens:", error);
    }
  }

  return (
    <div className="mint-page">
      <div className="mint-container">
        <h1 className="mint-title">
          <span className="one-mint">M</span>
          <span className="two-mint">I</span>
          <span className="three-mint">N</span>
          <span className="four-mint">T</span>
        </h1>
        <button className="hidden" id="connect-wallet" onClick={connectWallet}>
          {(provider && "connected") || (!provider && "connect wallet")}
        </button>
        <h2>MINT IS NOT LIVE YET.</h2>
        <button
          id="mint-button"
          className="mint-button1"
          onClick={() => mintTokens(1)}
        >
          One
        </button>
        <button
          id="mint-button"
          className="mint-button2"
          onClick={() => mintTokens(2)}
        >
          Two
        </button>
        <button
          id="mint-button"
          className="mint-button3"
          onClick={() => mintTokens(3)}
        >
          Three
        </button>
        <button
          id="mint-button"
          className="mint-button4"
          onClick={() => mintTokens(4)}
        >
          Four
        </button>
        <button
          id="mint-button"
          className="mint-button5"
          onClick={() => mintTokens(5)}
        >
          Five
        </button>
      </div>
    </div>
  );
};

export default Mint;
