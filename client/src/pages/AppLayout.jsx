// import { useState } from "react";
import { Outlet } from "react-router-dom";
import LandingNavbar from "./LandingPage/LandingNavbar";

import Footer from "./user/Footer";
import { Box } from "@mui/material";

import backImage from "../assets/images/coverImage.png";
import { ToastContainer } from "react-toastify";

const styles = {
  boxContainer: {
    backgroundImage: `url(${backImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
};

export default function AppLayout() {
  // const [isLogined, setIsLogined] = useState(true);
  // const [auth, setAuth] = useAuth();
  // setAuth({ ...auth, user: null, token: "" });
  // localStorage.removeItem("auth");
  return (
    <>
      <Box style={styles.boxContainer}>
        <LandingNavbar />
        {/* <pre>{auth}</pre> */}
        <Outlet />
        {/* <Hero />
          <TrendingNFts />
        <Influencers />*/}
        {/* <HowItWorks /> */}
        {/* <NftDrop /> */}
        <Footer />
      </Box>

      <ToastContainer className="custom-toast-container" />
    </>
  );
}
