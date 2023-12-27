import React, { createContext, useContext, useState } from 'react';

const TotalContext = createContext();

// eslint-disable-next-line react/prop-types
export function TotalProvider({ children }) {
  const [totalPrecio, setTotalPrecio] = useState(0);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <TotalContext.Provider value={{ totalPrecio, setTotalPrecio }}>
      {children}
    </TotalContext.Provider>
  );
}

export const useTotal = () => {
  const context = useContext(TotalContext);
  if (!context) {
    throw new Error('useTotal debe ser utilizado dentro de un TotalProvider');
  }
  return context;
};
