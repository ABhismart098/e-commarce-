import React from 'react';

const Parents = ({ children }) => {
  return (
    <>
      <h1 className="text-3xl text-center">Parents component Start</h1>

      {children}

      <h1 className="text-3xl text-center">Parents component End</h1>
    </>
  );
};

export default Parents;
