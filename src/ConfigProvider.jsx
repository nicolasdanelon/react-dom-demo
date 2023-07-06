import { createContext, useState } from 'react';

const ConfigContext = createContext();

// eslint-disable-next-line
const ConfigProvider = ({ children }) => {
  const [value, setValue] = useState('---');

  const values = {
    value,
    setValue
  };

  return (
    <ConfigContext.Provider value={values}>
      {children}
    </ConfigContext.Provider>
  );
};

export { ConfigContext, ConfigProvider };
