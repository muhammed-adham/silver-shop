import { createContext, useEffect, useState } from "react";

export const isMobileContext = createContext();

const IsMobileProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState()

  const isMobileHandler = (e) => {
    setIsMobile(e.matches);
  };

  useEffect(() => {
    window
      .matchMedia("(max-width:1024px)")
      .addEventListener("change", isMobileHandler);
    setIsMobile(window.matchMedia("(max-width:1024px)").matches);
  }, []);

  return (
    <isMobileContext.Provider value={{isMobile}}>
      {children}
    </isMobileContext.Provider>
  );
};

export default IsMobileProvider
