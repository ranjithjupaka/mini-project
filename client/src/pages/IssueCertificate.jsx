import React, { useEffect, useState } from 'react'
import { create as ipfsHttpClient } from 'ipfs-http-client'
import { Buffer } from "buffer";
import DegreeCertificate from '../components/DegreeCertificate';
import html2canvas from 'html2canvas';

const projectId = "2KJvFW3SrkSHMqYqm0PPVE53eob";
const projectSecret = "3959dacde4acd650d7374da39ac5801c";
const subdomain = "blockskillo.infura-ipfs.io";

const authorization = `Basic ${Buffer.from(`${projectId}:${projectSecret}`).toString("base64")}`;


const client = ipfsHttpClient({
  host: "infura-ipfs.io",
  port: 5001,
  protocol: "https",
  headers: {
    authorization: authorization,
  },
});

const IssueCertificate = () => {

  const [container, setContainer] = useState(null);

  const handleImageUpload = async (image) => {
    const imgBuffer = Buffer.from(image.replace(/^data:image\/\w+;base64,/, ''), 'base64');
    const { cid } = await client.add(imgBuffer);
    console.log(`Certificate image uploaded to IPFS with CID ${cid}`);
  };

  const handleCertificateGeneration = async () => {
    const canvas = await html2canvas(container);
    const image = canvas.toDataURL();
    await handleImageUpload(image);
  };

  useEffect(() => {
   setContainer(document.getElementById('certificate-container'));
  }, [])
  

  return (
    <div>
        <div id="certificate-container">
            <DegreeCertificate />
        </div> 
        <button onClick={handleCertificateGeneration} className='mt-4'>Generate Certificate Image</button>
    </div>
  )
}

export default IssueCertificate