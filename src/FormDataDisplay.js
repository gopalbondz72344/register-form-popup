import React from 'react';

const FormDataDisplay = ({ data }) => {
  return (
    <div className="bg-white p-8 rounded shadow-md w-96">
      <h2 className="text-2xl mb-4">Form Data</h2>
      <div className="bg-gray-100 p-4 rounded flex flex-col">
        {JSON.stringify(data, null, 2)}
      </div>
    </div>
  );
};

export default FormDataDisplay;
