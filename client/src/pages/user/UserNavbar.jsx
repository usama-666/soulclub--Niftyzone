import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Avatar,
  Box,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import UserProfile from "../../assets/images/UserProfile.png";
import CButton from "../../utility/CButton";
import CTypography from "../../utility/CTypography";
import { useAuth } from "../../context/auth";
import { toast } from "react-toastify";
import LogoutButton from "../../utility/LogoutButton";

//web 3.0

import { ethers } from "ethers";
import { OutlinedBtn } from "../../utility";

const navbarData = {
  routes: [
    {
      id: 1,
      name: "COLLECTION",
      path: "/user/collection",
    },
    {
      id: 2,
      name: "PROJECTS",
      path: "/user/projects",
    },
    {
      id: 3,
      name: "COLLABORATION",
      path: "/user/collaboration",
      // path: "/auctioned-nfts",
    },
    {
      id: 4,
      name: "INFLUENCER",
      path: "/user/influencers",
    },
  ],
  logo: logo,
  logoTitle: "Usama",
};

// const settings = ["Balance", "Account- Address", "Dashboard", "Logout"];

export default function Navbar() {
  const settings = {
    settingRoute: [
      {
        id: 1,
        name: "balance",
        path: "",
      },
      {
        id: 2,
        name: `Address : `,
        // name: `Address : xxx`,
        path: "",
      },
      {
        id: 3,
        name: "Dashboard",
        path: "/user",
        // path: "/auctioned-nfts",
      },
      {
        id: 4,
        name: "Logout",
        path: "/",
        // path: "/auctioned-nfts",
      },
    ],
  };

  const [open, setOpen] = useState(false);
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const { routes, logo } = navbarData;
  const { settingRoute } = settings;
  const [address, setAddress] = useState("xcxcx");
  const [balance, setBalance] = useState("0.00$");

  // getting global obj of window
  // const provider = new ethers.providers.Web3Provider(window.ethereum);
  // usetstate for storing and retrieving wallet details

  const [isConnected, setIsConnected] = useState(false);

  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = (event) => {
    setAnchorElUser(null);
  };
  const handleLogout = () => {
    setAuth({ ...auth, user: null, token: "" });
    localStorage.removeItem("auth");
    toast.success("✔ Logout Successfully", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    navigate("/");
  };
  // console.log(provider);
  // Button handler button for handling a
  // request event for metamask
  const handleConnect = async () => {
    // Asking if metamask is already present or not
    // res[0] for fetching a first wallet
    console.log("Wallet clicked");

    try {
      if (window.ethereum) {
        console.log("Metamask Detected");
        // const accounts = provider
        //   .send("eth_requestAccounts", [])
        //   .then(async () => {
        //     await accountChangeHandler(provider.getSigner());
        //     if (accounts) {
        //       setIsConnected(!isConnected);
        //       setAddress(accounts);
        //     }
        //   });

        const [account] = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const balance = await provider.getBalance(account);
        setBalance(ethers.utils.formatEther(balance));
        setIsConnected(!isConnected);
        setAddress(account);
        console.log(account);
      } else {
        toast.warn("❌ Install Metamask to Mint NFT's ", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setIsConnected(!isConnected);
      }
      //     // alert("install metamask extension!!");
    } catch (error) {
      console.log(error);
    }
  };
  // const getBalance = async () => {
  //   const [account] = await window.ethereum.request({
  //     method: "eth_requestAccounts",
  //   });
  //   const provider = new ethers.providers.Web3Provider(window.ethereum);
  //   const balance = await provider.getBalance(account);
  //   setBalance(ethers.utils.formatEther(balance));
  // };

  useEffect(() => {
    if (!window.ethereum) {
      setIsConnected(false);
    }

    return () => {};
  }, []);

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
          to="/user/collection">
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
                  <Link to={route.path}>{route.name}</Link>
                </Box>
              </NavLink>
            );
          })}
        </Stack>
        {/* button and avater  */}

        <Stack direction="row" alignItems="center" spacing={4}>
          {/* <CButton
            // onclick={walletHandler}
            btnTitle={"Wallet Connected"}
            buttonRightStyle={{
              height: 40,
            }}
            buttonLeftStyle={{
              height: 40,
            }}
          /> */}
          {isConnected ? (
            <>
              <OutlinedBtn
                // onclick={handleConnect}
                btnTitle={"Connected"}
                buttonRightStyle={{
                  height: 40,
                }}
                buttonLeftStyle={{
                  height: 40,
                }}
              />
            </>
          ) : (
            <>
              <CButton
                onclick={handleConnect}
                btnTitle={"Connect Wallet"}
                buttonRightStyle={{
                  height: 40,
                }}
                buttonLeftStyle={{
                  height: 40,
                }}
              />
            </>
          )}

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  sx={{
                    width: 40,
                    height: 40,
                    cursor: "pointer",
                    "&:hover": {
                      transform: "scale(1.1)",
                      transition: "all 0.3s ease-in-out",
                    },
                  }}
                  src={UserProfile}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "65px", mr: "60px", width: "900px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}>
              {/* {settingRoute.map((route, i) => (
                <MenuItem key={i} onClick={handleCloseUserMenu}>
                  <NavLink to={route.path} onClick={handleLogout}>
                    <Typography textAlign="center" sx={{ color: "#000" }}>
                      {route.name}
                    </Typography>
                    {route.name}
                  </NavLink>
                </MenuItem>
              ))} */}
              <MenuItem onClick={handleCloseUserMenu}>
                {/* <NavLink to={} onClick={handleLogout}> */}
                <Typography textAlign="center" sx={{ color: "#000" }}>
                  Balance: {balance} ETH
                </Typography>
                {/* </NavLink> */}
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                {/* <NavLink to={} onClick={handleLogout}> */}
                <Typography textAlign="center" sx={{ color: "#000" }}>
                  Address:{address.substring(0, 9)}...
                </Typography>
                {/* </NavLink> */}
              </MenuItem>
              {/* <MenuItem onClick={handleCloseUserMenu}>
                <NavLink to={"/user"} on>
                  <Typography textAlign="center" sx={{ color: "#000" }}>
                    Dashboard
                  </Typography>
                </NavLink>
              </MenuItem> */}
              <MenuItem onClick={handleCloseUserMenu}>
                <NavLink to={"/"} onClick={handleLogout}>
                  <Typography textAlign="center" sx={{ color: "#000" }}>
                    Logout
                  </Typography>
                </NavLink>
              </MenuItem>
            </Menu>
          </Box>
        </Stack>
      </Stack>
      <IconButton
        onClick={() => setOpen(true)}
        sx={{ mr: 2, display: { md: "none" }, color: "#fff" }}>
        <MenuIcon />
      </IconButton>
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
            to="/user">
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
                  {route.name}
                </Box>
              </NavLink>
            );
          })}
        </Stack>
        {/* Navmenu Logout  */}
        <Stack spacing={2} p={3} ml={18}>
          <Box component="span">
            <LogoutButton
              btnTitle={"Log Out"}
              buttonRightStyle={{
                height: 40,
              }}
              buttonLeftStyle={{
                height: 40,
              }}
              onClick={handleLogout}
            />
          </Box>
        </Stack>
      </Drawer>
    </Box>
  );
}
