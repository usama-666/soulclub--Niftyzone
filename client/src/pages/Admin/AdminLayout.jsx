import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import { PopupProvider } from "./MyContext";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import "./admin.css";
// import ProSideBar from "./scenes/global/ProSideBar";
import SideBar from "./scenes/global/SideBar.jsx";
import Spinner from "../../components/spinner/Spinner";
import axiosAPI from "../../services/axios.js";
import { useAuth } from "../../context/auth";

export default function AdminLayout() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();

  // };
  useEffect(() => {
    const authCheck = async () => {
      const res = await axiosAPI.get("/auth/adminauth", {
        headers: {
          Authorization: auth?.token,
        },
      });
      console.log(res);
      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);
  return ok ? (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PopupProvider>
          <div className="app">
            <SideBar isSidebar={isSidebar} />
            <main className="content">
              <Topbar setIsSidebar={setIsSidebar} />
              <Outlet />
            </main>
          </div>
        </PopupProvider>
        {/* <PopupProvider>
          <div className="app">
            <ProSideBar isSidebar={isSidebar} />
            <main className="content">
              <Topbar setIsSidebar={setIsSidebar} />
              <Outlet />
            </main>
          </div>
        </PopupProvider> */}
      </ThemeProvider>
    </ColorModeContext.Provider>
  ) : (
    <Spinner path="signin" />
  );
}
