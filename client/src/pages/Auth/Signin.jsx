import { useState } from "react";
import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import CTypography from "../../utility/CTypography";
import AuthButton from "../../utility/AuthButton.jsx";
import { Link, useNavigate } from "react-router-dom";
import axiosAPI from "../../services/axios.js";
import { toast } from "react-toastify";
import { useAuth } from "../../context/auth";
import SignPage from "./SignPage";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  // const [userRole, setUserRole] = useState();
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();

    console.log(email, password);
    const user = { email, password };
    console.log(user);

    // const res = await fetch("/signin", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email,
    //     password,
    //   }),
    // });
    try {
      const res = await axiosAPI.post("/auth/signin", user);
      console.log(res);

      if (
        res.data.status === 200 ||
        res.data.message == "Logined successfully"
      ) {
        toast.success(`${res.data.message}`, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0,
          theme: "dark",
        });

        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
          role: res.data.user.role,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        console.log(JSON.stringify(res.data));
        // setUserRole(res.data.user.role);
        if (res.data.user.role === 1) {
          navigate("/admin");
        }

        if (res.data.user.role === 0) {
          navigate("/user/collection");
        }

        setEmail({ email: "" });
        setPassword({ password: "" });
      } else if (res.data.status !== 200 || !res.data) {
        toast.warn(`${res.data.message}`, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0,
          theme: "dark",
        });
        console.log(`${res.data.message}`, res.data);

        // ✔
        // else {
        //   toast.error("An Error Occured", {
        //     position: "top-center",
        //     autoClose: 2000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "dark",
        //   });
        //   console.log("Invalid Credential");

        // setAuth({
        //   ...auth,
        //   user: res.data.user,
        //   token: res.data.token,
        //   role: res.data.user.role,
        // });
        // localStorage.setItem("auth", JSON.stringify(res.data));
        // console.log(JSON.stringify(res.data));
        // // setUserRole(res.data.user.role);
        // if (res.data.user.role === 1) {
        //   navigate("/admin");
        // }

        // if (res.data.user.role === 0) {
        //   navigate("/user/collection");
        // }

        // setEmail({ email: "" });
        // setPassword({ password: "" });
      }
    } catch (err) {
      toast.error("Invalid Credentials ", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "dark",
      });
      console.log("Invalid Credential", err);
    }
  };

  const showSignup = () => {
    navigate("/signup");
  };

  return (
    <>
      <Stack
        sx={{
          px: {
            lg: 10,
            xs: 2,
          },
          py: {
            lg: 8,
            xs: 2,
          },
        }}>
        <Grid
          container
          alignItems="center"
          spacing={{
            xs: 10,
            lg: 0,
          }}>
          <Grid item xs={12} lg={6}>
            <SignPage />
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            alignItems="center"
            justifyContent="space-between">
            <Box
              sx={{
                width: {
                  md: 600,
                  xs: "100%",
                  sm: 500,
                },
                position: "relative",
              }}>
              <Stack direction={"row"}>
                {/* <Card /> */}
                <form method="POST">
                  <Box
                    display="flex"
                    flexDirection={"column"}
                    minWidth={400}
                    alignItems={"center"}
                    justifyContent={"center"}
                    marginLeft={5}
                    padding={3}
                    borderRadius={5}
                    boxShadow={"5px 5px 10px #AD1AAF"}
                    sx={{
                      ":hover": {
                        boxShadow: "10px 10px 20px #AD1AAF",
                      },

                      background:
                        "linear-gradient(160.61deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 101.7%)",
                      borderWidth: "0.5px 0px",
                      borderStyle: "solid",
                      borderColor: "rgba(255, 255, 255, 0.4)",
                      backdropFilter: "blur(17.915px)",
                    }}>
                    <CTypography
                      fontSize="40px"
                      fontWeight={600}
                      lineHeight="80px"
                      textTransform="uppercase">
                      Login
                    </CTypography>
                    <TextField
                      inputProps={{
                        style: {
                          color: "white",
                          borderStyle: "solid",
                          borderWidth: "2px 2px 2px 2px",
                          borderColor: "#AD1AAF",
                          borderRadius: "10px",
                          placeholder: "white",
                        },
                      }}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      borderColor={"#AD1AAF"}
                      color="secondary"
                      name="email"
                      margin="normal"
                      type={"email"}
                      variant="outlined"
                      placeholder="Email"

                      // backgroundColor="#fff"
                    />
                    <TextField
                      inputProps={{
                        style: {
                          color: "white",
                          borderStyle: "solid",
                          borderWidth: "2px 2px 2px 2px",
                          borderColor: "#AD1AAF",
                          borderRadius: "10px",
                          placeholder: "white",
                        },
                      }}
                      value={password}
                      borderColor={"#AD1AAF"}
                      color="secondary"
                      onChange={(e) => setPassword(e.target.value)}
                      name="password"
                      margin="normal"
                      type={"password"}
                      variant="outlined"
                      placeholder="Password"

                      // backgroundColor="#fff"
                    />
                    <CTypography>
                      <Link to="/forgot-password">Forgot Password?</Link> <br />
                    </CTypography>
                    <AuthButton
                      value="Log In"
                      endIcon={<LoginIcon />}
                      onClick={loginUser}>
                      Login
                    </AuthButton>
                    {/* <Link to="/signup"> */}
                    <Button
                      endIcon={<HowToRegIcon />}
                      onClick={showSignup}
                      style={{
                        color: "#fff",
                      }}
                      sx={{ marginTop: 3, borderRadius: 3 }}>
                      Change To Signup
                    </Button>
                    {/* </Link> */}
                  </Box>
                </form>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
}

export default Signin;

// import { useState } from "react";
// import { Box, Button, Stack, TextField } from "@mui/material";
// import LoginIcon from "@mui/icons-material/Login";
// import HowToRegIcon from "@mui/icons-material/HowToReg";
// import CTypography from "../../utility/CTypography";
// import LoginButton from "../../utility/LoginButton";
// import { useNavigate } from "react-router-dom";

// function Signin({ showSignup }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const loginUser = async (e) => {
//     e.preventDefault();
//     console.log(email, password);

//     const res = await fetch("http://localhost:5000/signin", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email,
//         password,
//       }),
//     });
//     const data = res.json();
//     if (data.status === 400 || !data) {
//       window.alert("Invalid Credential ");
//       console.log("Invalid Credential");
//     } else {
//       window.alert("Login Successfully");
//       console.log("Login Successfully");
//       navigate("/user");
//     }
//   };

//   return (
//     <>
//       <Stack direction={"row"}>
//         {/* <Card /> */}
//         <form method="POST">
//           <Box
//             display="flex"
//             flexDirection={"column"}
//             minWidth={400}
//             alignItems={"center"}
//             justifyContent={"center"}
//             marginLeft={5}
//             padding={3}
//             borderRadius={5}
//             boxShadow={"5px 5px 10px #AD1AAF"}
//             sx={{
//               ":hover": {
//                 boxShadow: "10px 10px 20px #AD1AAF",
//               },

//               background:
//                 "linear-gradient(160.61deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 101.7%)",
//               borderWidth: "0.5px 0px",
//               borderStyle: "solid",
//               borderColor: "rgba(255, 255, 255, 0.4)",
//               backdropFilter: "blur(17.915px)",
//             }}>
//             <CTypography
//               fontSize="40px"
//               fontWeight={600}
//               lineHeight="80px"
//               textTransform="uppercase">
//               Login
//             </CTypography>

//             <TextField
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               borderColor={"#AD1AAF"}
//               color="secondary"
//               name="email"
//               margin="normal"
//               type={"email"}
//               variant="outlined"
//               placeholder="Email"
//               // backgroundColor="#fff"
//             />

//             <TextField
//               value={password}
//               borderColor={"#AD1AAF"}
//               color="secondary"
//               onChange={(e) => setPassword(e.target.value)}
//               name="password"
//               margin="normal"
//               type={"password"}
//               variant="outlined"
//               placeholder="Password"
//               // backgroundColor="#fff"
//             />

//             <LoginButton endIcon={<LoginIcon />} onClick={loginUser}>
//               Login
//             </LoginButton>
//             {/* <Link to="/signup"> */}
//             <Button
//               endIcon={<HowToRegIcon />}
//               onClick={showSignup}
//               style={{
//                 color: "#fff",
//               }}
//               sx={{ marginTop: 3, borderRadius: 3 }}>
//               Change To Signup
//             </Button>
//             {/* </Link> */}
//           </Box>
//         </form>
//       </Stack>
//     </>
//   );
// }

// export default Signin;
