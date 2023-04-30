import React from 'react';

function DegreeCertificate({ name = 'Jupaka Ranjith', degreeType='Bachelor of Technology in Information Technology',
 institution='Indian Institute of Information Technology and Management Gwalior', 
 issueDate='May 2,2025'}) {
  return (
    <div className="border-4 border-gray-700 rounded-lg shadow-lg bg-white text-black p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold font-serif ">Degree Certificate</h1>
        {/* <p className="text-lg font-semibold">{institution}</p> */}
      </div>
      <div className="mb-4">
        <p className="text-lg font-semibold text-gray-800">This is to certify that</p>
        <p className="text-3xl font-bold font-sans text-gray-900">{name}</p>
        <p className="text-lg text-gray-800">has been awarded the degree of</p>
        <p className="text-2xl font-bold font-serif">{degreeType}</p>
        <p className="text-lg text-gray-800">by the</p>
        <p className="text-lg font-semibold font-Garamond">{institution}</p>
        <p className="text-lg">on the</p>
        <p className="text-lg font-semibold font-mono">{issueDate}</p>
      </div>
    </div>
  );
}

export default DegreeCertificate;
