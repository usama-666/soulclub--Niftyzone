import { createContext, useContext, useState } from "react";

const UserPopupContext = createContext();

function UserPopupProvider({ children }) {
  const [openPopup, setOpenPopup] = useState(false);

  // const value = useMemo(() => {
  //   return {
  //     openPopup,
  //     setOpenPopup,
  //   };
  // }, []);
  return (
    <UserPopupContext.Provider value={{ openPopup, setOpenPopup }}>
      {children}
    </UserPopupContext.Provider>
  );
}

function usePopup() {
  const context = useContext(UserPopupContext);
  if (context === undefined)
    throw new Error("PopupContext was used outside of the  user PopupProvider");
  return context;
}
export { UserPopupProvider, usePopup };
