import { Outlet } from "react-router-dom";
import UserNavbar from "./UserNavbar";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import axiosAPI from "../../services/axios.js";

import backImage from "../../assets/images/coverImage.png";
import { useAuth } from "../../context/auth";
import Spinner from "../../components/spinner/Spinner";
import { UserPopupProvider } from "../../context/UserPopup";
import { ToastContainer } from "react-toastify";

const styles = {
  boxContainer: {
    backgroundImage: `url(${backImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
};

function UserLayout() {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      const res = await axiosAPI.get("/auth/userauth", {
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
    <Box style={styles.boxContainer}>
      <UserPopupProvider>
        <UserNavbar />
        <Outlet />
        {/* <HowItWorks /> */}
        <Footer />
      </UserPopupProvider>
      <ToastContainer className="custom-toast-container" />
    </Box>
  ) : (
    <Spinner path="signin" />
  );
}

export default UserLayout;
