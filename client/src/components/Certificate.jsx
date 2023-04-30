import React from 'react';

function Certificate(props) {
  const { name, institution, date, degreeType, ipfsCid } = props;

  return (
    <div className="border border-gray-300 rounded-md p-4 mb-4">
      <div className="flex items-center justify-between mb-2">
        <div className="text-gray-600 font-medium text-lg">{name}</div>
        <div className="text-gray-500 text-sm">{date}</div>
      </div>
      <div className="text-gray-600 mb-2">{degreeType} from {institution}</div>
      <div className="text-gray-500 text-sm">{ipfsCid}</div>
    </div>
  );
}

export default Certificate;
