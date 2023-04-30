import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css'
import IssueCertificate from './pages/IssueCertificate'
import { useState } from "react";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import Layout from "./components/Layout";
import CertificateList from "./pages/MyCertificates";

function App() {

  const [loading, setLoading] = useState(true)
  const [account, setAccount] = useState(null)

  // MetaMask Login/Connect
  const web3Handler = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    setAccount(accounts[0])
    // Get provider from Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    // Set signer
    const signer = provider.getSigner()

    window.ethereum.on('chainChanged', (chainId) => {
      window.location.reload();
    })

    window.ethereum.on('accountsChanged', async function (accounts) {
      setAccount(accounts[0])
      await web3Handler()
    })

  }

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout web3Handler={web3Handler} account={account} loading={loading}/>}>
       <Route index element={
          <CertificateList/>
        } />
        <Route path="/issue" element={
          <IssueCertificate/>
        } />

      </Route>
      </Routes>  
    </BrowserRouter>
  )
}

export default App
