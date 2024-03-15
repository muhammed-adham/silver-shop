import { createContext, useState } from "react";

let wishlistCounter = 0;
export const wishCountContext = createContext();

const WishCountProvider = ({ children }) => {
  const [wishCount, setWishCount] = useState(wishlistCounter);

  return (
    <wishCountContext.Provider value={{ wishCount, setWishCount }}>
      {children}
    </wishCountContext.Provider>
  );
};

export default WishCountProvider;
