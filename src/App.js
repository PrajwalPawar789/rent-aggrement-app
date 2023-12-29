import React, { useState } from 'react';
import Form from './Form';
import RentAgreement from './RentAgreement';

const App = () => {
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div className="flex">
      <div className="w-1/2 p-4">
        <Form onFormSubmit={handleFormSubmit} />
      </div>
      <div className="w-1/2 p-4">
        {formData && <RentAgreement {...formData} />}
      </div>
    </div>
  );
};

export default App;