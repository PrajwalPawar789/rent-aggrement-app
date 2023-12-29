import React, { useState } from 'react';
import Form from './Form';
import RentAgreement from './RentAgreement';

const App = () => {
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-1/2 bg-white p-8">
        <h1 className="text-3xl font-bold mb-4 text-blue-500">Rent Agreement Generator</h1>
        <Form onFormSubmit={handleFormSubmit} />
      </div>
      <div className="w-1/2 bg-blue-500 p-8">
        <div className="text-white">
          {formData ? (
            <RentAgreement {...formData} />
          ) : (
            <p className="text-lg">Fill out the form to generate the Rent Agreement</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
