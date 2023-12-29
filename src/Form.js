import React, { useState } from 'react';

const Form = ({ onFormSubmit }) => {
  const [date, setDate] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit({ date, name });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <br />
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <button type="submit">Generate Rent Agreement</button>
    </form>
  );
};

export default Form;