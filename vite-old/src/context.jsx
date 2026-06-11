import React, { useContext, useState } from "react";
const AppContext = React.createContext();

function AppProvider({ children }) {
  
    const [msg,setMsg] = useState('')
  return (
    <AppContext.Provider
      value={{
        msg,setMsg
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
export const useGlobal = () => {
  return useContext(AppContext);
};

export default AppProvider;
