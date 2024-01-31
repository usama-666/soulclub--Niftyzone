import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Drawer, IconButton, Stack } from "@mui/material";

import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import CTypography from "../../utility/CTypography";
import SButton from "../../utility/SButton";
import { useState } from "react";

const navbarData = {
  routes: [
    {
      id: 1,
      name: "home",
      path: "/",
    },
    {
      id: 2,
      name: "Trendings",
      path: "/trending",
    },
    {
      id: 3,
      name: "Roadmap",
      path: "/roadmap",
    },
    {
      id: 4,
      name: "nftDrop",
      path: "/nftdrop",
      // path: "/auctioned-nfts",
    },
  ],
  logo: logo,
  logoTitle: "Usama",
};

function LandingNavbar() {
  const [open, setOpen] = useState(false);
  const { routes, logo } = navbarData;
  const navigate = useNavigate();

  function handleSignup() {
    navigate("/signup");
  }
  return (
    <Box>
      {/* nav bar here */}

      <Stack
        direction={{
          lg: "row",
          xs: "column",
        }}
        display={{
          xs: "none",
          md: "flex",
        }}
        alignItems="center"
        justifyContent="space-between"
        px={10}
        py={4}
        spacing={2}>
        {/* navbar logo */}
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{
            cursor: "pointer",
          }}
          component={Link}
          to="/">
          <img
            src={logo}
            alt="logo"
            style={{
              width: 80,
              height: 80,
            }}
          />
          <CTypography
            fontSize="50px"
            fontWeight="700"
            textTransform="uppercase">
            SoulClub
          </CTypography>
        </Stack>

        {/* navbar section */}
        <Stack
          sx={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)",
            backdropFilter: "blur(20.8333px)",
          }}
          display={{
            xs: "none",
            md: "flex",
          }}
          direction="row"
          spacing={2}
          p={3}>
          {routes.map((route, index) => {
            return (
              <NavLink
                to={route.path}
                key={index}
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "#fff",
                        // color: "#fff",
                        fontSize: "16px",
                        fontWeight: 400,
                        borderBottom: "2px solid #AD1AAF",
                      }
                    : {
                        color: "#fff",
                        fontSize: "16px",
                        fontWeight: 400,
                      }
                }>
                <Box
                  component="span"
                  sx={{
                    "&:hover": {
                      color: "#AD1AAF",
                    },
                  }}>
                  {/* <Link to={route.path}>{route.name}</Link> */}
                  <CTypography sx={{ textTransform: "capitalize" }}>
                    {route.name}
                  </CTypography>
                </Box>
              </NavLink>
            );
          })}
        </Stack>
        {/* button and avater  */}
        <Stack direction="row" alignItems="center" spacing={4}>
          <SButton
            btnTitle={"Sign Up Now"}
            buttonRightStyle={{
              height: 40,
            }}
            buttonLeftStyle={{
              height: 40,
            }}
            onSignup={handleSignup}
          />
        </Stack>
      </Stack>
      {/* drawer opener icon */}
      <Stack
        direction="row"
        display={{
          xs: "flex",
          md: "none",
        }}>
        <IconButton
          onClick={() => setOpen(true)}
          sx={{ mr: 2, display: { md: "none" }, color: "#fff" }}>
          <MenuIcon />
        </IconButton>

        <Stack
          direction="row"
          justifyContent="space-between"
          spacing={4}
          alignItems={"center"}
          sx={{ md: "none" }}>
          <Stack direction="row">
            <img
              src={logo}
              alt="logo"
              style={{
                width: 60,
                height: 60,
              }}
            />
            <CTypography
              fontSize="40px"
              fontWeight="700"
              textTransform="uppercase">
              SoulClub
            </CTypography>
          </Stack>
          <Stack marginLeft={10}>
            <SButton
              btnTitle={"Sign Up"}
              buttonRightStyle={{
                height: 40,
              }}
              buttonLeftStyle={{
                height: 40,
              }}
              onSignup={handleSignup}
            />
          </Stack>
        </Stack>
      </Stack>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        anchor="left"
        sx={{
          ".MuiDrawer-paper": {
            width: "70%",
            backgroundColor: "#140C1F",
          },
          display: { xs: "block", md: "none" },
        }}>
        {/* navmenu logo */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={"space-around"}>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{
              cursor: "pointer",
            }}
            component={Link}
            to="/">
            <img
              src={logo}
              alt="logo"
              style={{
                width: 50,
                height: 50,
              }}
            />
            <CTypography
              fontSize="30px"
              fontWeight="700"
              textTransform="uppercase">
              SoulClub
            </CTypography>
          </Stack>
          <IconButton onClick={() => setOpen(false)} sx={{ color: "#fff" }}>
            <CloseIcon />
          </IconButton>
        </Stack>
        {/* navmenu section */}
        <Stack spacing={2} p={3} textAlign="center">
          {routes.map((route, index) => {
            return (
              <NavLink
                to={route.path}
                key={index}
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "#fff",
                        // color: "#fff",
                        fontSize: "16px",
                        fontWeight: 400,
                        padding: "10px 0",
                        borderRadius: "4px",
                        background:
                          "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)",
                        backdropFilter: "blur(20.8333px)",
                      }
                    : {
                        color: "#fff",
                        fontSize: "16px",
                        fontWeight: 400,
                      }
                }
                onClick={() => setOpen(false)}>
                <Box
                  component="span"
                  sx={{
                    "&:hover": {
                      color: "#AD1AAF",
                      borderBottom: "2px solid #AD1AAF",
                    },
                  }}>
                  <CTypography sx={{ textTransform: "capitalize" }}>
                    {route.name}
                  </CTypography>
                </Box>
              </NavLink>
            );
          })}
        </Stack>
      </Drawer>
    </Box>
  );
}

export default LandingNavbar;
