import { createContext, useContext, useState } from "react";

const PopupContext = createContext();

function PopupProvider({ children }) {
  const [openPopup, setOpenPopup] = useState(false);

  // const value = useMemo(() => {
  //   return {
  //     openPopup,
  //     setOpenPopup,
  //   };
  // }, []);
  return (
    <PopupContext.Provider value={{ openPopup, setOpenPopup }}>
      {children}
    </PopupContext.Provider>
  );
}

function usePopup() {
  const context = useContext(PopupContext);
  if (context === undefined)
    throw new Error("PopupContext was used outside of the PopupProvider");
  return context;
}
export { PopupProvider, usePopup };
