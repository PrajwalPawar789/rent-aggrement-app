import React, { useState } from 'react';

const Form = ({ onFormSubmit }) => {
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [tenantAddress, setTenantAddress] = useState('');
  const [propertyAddress, setPropertyAddress] = useState('');
  const [initialPeriod, setInitialPeriod] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit({ date, name, tenantAddress, propertyAddress, initialPeriod });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">
        Date:
      </label>
      <input
        type="date"
        id="date"
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <label htmlFor="name" className="block mt-4 text-gray-700 text-sm font-bold mb-2">
        Tenant's Name:
      </label>
      <input
        type="text"
        id="name"
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="tenantAddress" className="block mt-4 text-gray-700 text-sm font-bold mb-2">
        Tenant's Address:
      </label>
      <textarea
        id="tenantAddress"
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        value={tenantAddress}
        onChange={(e) => setTenantAddress(e.target.value)}
      />

      <label htmlFor="propertyAddress" className="block mt-4 text-gray-700 text-sm font-bold mb-2">
        Property Address:
      </label>
      <textarea
        id="propertyAddress"
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        value={propertyAddress}
        onChange={(e) => setPropertyAddress(e.target.value)}
      />

      <label htmlFor="initialPeriod" className="block mt-4 text-gray-700 text-sm font-bold mb-2">
        Initial Tenancy Period:
      </label>
      <input
        type="text"
        id="initialPeriod"
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        value={initialPeriod}
        onChange={(e) => setInitialPeriod(e.target.value)}
      />

      <button
        type="submit"
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
      >
        Generate Rent Agreement
      </button>
    </form>
  );
};

export default Form;
