import React from 'react';
import Certificate from '../components/Certificate';

function CertificateList() {

const certificates = [
  {
    name: 'Ranjith Jupaka',
    institution: 'University of California, Berkeley',
    date: 'April 1, 2023',
    degreeType: 'Bachelor of Science in Electrical Engineering and Computer Science',
    ipfsCid: 'QmZ85aLthDhzGv6kpgCY7VX9GB9bW7VjLsJd26hVQ2mTmT'
  },
  {
    name: 'Ranjith Jupaka',
    institution: 'Massachusetts Institute of Technology',
    date: 'May 15, 2023',
    degreeType: 'Master of Science in Computer Science',
    ipfsCid: 'QmZ85aLthDhzGv6kpgCY7VX9GB9bW7VjLsJd26hVQ2mTnS'
  },

];


  return (
    <div>
      {certificates.map(certificate => (
        <Certificate
          key={certificate.ipfsCid}
          name={certificate.name}
          institution={certificate.institution}
          date={certificate.date}
          degreeType={certificate.degreeType}
          ipfsCid={certificate.ipfsCid}
        />
      ))}
    </div>
  );
}

export default CertificateList;
