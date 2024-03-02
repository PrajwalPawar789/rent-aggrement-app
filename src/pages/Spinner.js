import React from 'react';

const Spinner = () => {
  return (
    <svg
      className="animate-spin h-5 w-5 mr-3 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.004 8.004 0 014.01 4.01h-.002C7.036 2.54 10.773 2 12 2v4c-1.517 0-4.132.45-5.657 2.048l-.707-.707zM12 20v-4c1.517 0 4.132-.45 5.657-2.048l.707.707A7.963 7.963 0 0116 12h4c0 4.418-3.582 8-8 8z"
      ></path>
    </svg>
  );
};

export default Spinner;
