/* eslint-disable react/prop-types */
import { createContext } from "react";
import Birds from "../../assets/Birds.json";

export const BirdContext = createContext({});

function BirdContextProvider({ children }) {
  const birds = Birds.Tbl_Bird;

  return (
    <>
      <BirdContext.Provider value={{ birds }}>{children}</BirdContext.Provider>
    </>
  );
}
export default BirdContextProvider;
