import { useState } from "react";
import { Box, Grid, Stack, TextField } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import CTypography from "../../utility/CTypography";
import AuthButton from "../../utility/AuthButton.jsx";
// import { useNavigate } from "react-router-dom";
import axiosAPI from "../../services/axios.js";
// import { toast } from "react-toastify";
import SignPage from "./SignPage";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Forgot() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  // const [newPassword, setNewPassword] = useState("");
  // const [answer, setAnswer] = useState("");
  // const [user, setUser] = useState({ email: "", password: "" });
  // const navigate = useNavigate();

  const resetPassword = async (e) => {
    e.preventDefault();
    console.log(email);
    const user = { email };
    console.log(user);
    try {
      const res = await axiosAPI.post("/auth/forgot-password", {
        userEmail: email,
      });
      console.log(res);
      if (res) {
        toast.success("✔ Password sent to Mail", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        navigate("/signin");
      } else {
        toast.error("Email Not Registered", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0,
          theme: "dark",
        });
      }
    } catch (error) {
      console.log(error);
    }

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
    // try {
    //   const res = await axiosAPI.post("/auth/forgot-password", user);
    //   if (res.data.status === 400 || !res.data) {
    //     toast.error("An Error Occured", {
    //       position: "top-center",
    //       autoClose: 2000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: 0,
    //       theme: "dark",
    //     });
    //     console.log("Invalid Credential");
    //   } else {
    //     toast.success(✔ ${res.data.message}, {
    //       position: "top-center",
    //       autoClose: 2000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "dark",
    //     });
    // console.log("reset Successfully", res.data);

    // navigate("/signin");
    // setEmail({ email: "" });
    // // setNewPassword({ password: "" });
    // setAnswer({ answer: "" });
    //     }
    //   } catch (err) {
    //     toast.error("Invalid Credentials ", {
    //       position: "top-center",
    //       autoClose: 2000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: 0,
    //       theme: "dark",
    //     });
    //     console.log("Invalid Credential");
    //     console.log(err);
    //   }
    // };

    // const showSignin = () => {
    //   navigate("/signin");
    // };
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
            // alignItems="center"
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
                      fontSize="30px"
                      fontWeight={600}
                      lineHeight="80px"
                      align={"center"}
                      textTransform="uppercase">
                      Reset Password
                    </CTypography>

                    <TextField
                      inputProps={{
                        style: {
                          color: "white",
                          borderStyle: "solid",
                          borderWidth: "2px 2px 2px 2px",
                          borderColor: "#AD1AAF",
                          placeholder: "white",
                          borderRadius: "10px",
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

                    <AuthButton
                      value="Reset"
                      endIcon={<LoginIcon />}
                      onClick={resetPassword}>
                      Reset Now
                    </AuthButton>
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

export default Forgot;

// import { useState } from "react";
// import { Box, Button, Grid, Stack, TextField } from "@mui/material";
// import LoginIcon from "@mui/icons-material/Login";
// import HowToRegIcon from "@mui/icons-material/HowToReg";
// import CTypography from "../../utility/CTypography";
// import LoginButton from "../../utility/LoginButton";
// import { useNavigate } from "react-router-dom";
// import axiosAPI from "../../services/axios.js";
// import { toast } from "react-toastify";
// import SignPage from "./SignPage";

// function Forgot() {
//   const [email, setEmail] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [answer, setAnswer] = useState("");
//   // const [user, setUser] = useState({ email: "", password: "" });
//   const navigate = useNavigate();

//   const loginUser = async (e) => {
//     e.preventDefault();
//     console.log(email, newPassword, answer);
//     const user = { email, newPassword, answer };
//     console.log(user);

//     // const res = await fetch("/signin", {
//     //   method: "POST",
//     //   headers: {
//     //     "Content-Type": "application/json",
//     //   },
//     //   body: JSON.stringify({
//     //     email,
//     //     password,
//     //   }),
//     // });
//     try {
//       const res = await axiosAPI.post("/auth/forgot-password", user);
//       if (res.data.status === 400 || !res.data) {
//         toast.error("An Error Occured", {
//           position: "top-center",
//           autoClose: 2000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: 0,
//           theme: "dark",
//         });
//         console.log("Invalid Credential");
//       } else {
//         toast.success(`✔ ${res.data.message}`, {
//           position: "top-center",
//           autoClose: 2000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "dark",
//         });
//         console.log("reset Successfully", res.data);

//         navigate("/signin");
//         setEmail({ email: "" });
//         setNewPassword({ password: "" });
//         setAnswer({ answer: "" });
//       }
//     } catch (err) {
//       toast.error("Invalid Credentials ", {
//         position: "top-center",
//         autoClose: 2000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: 0,
//         theme: "dark",
//       });
//       console.log("Invalid Credential");
//       console.log(err);
//     }
//   };

//   const showSignin = () => {
//     navigate("/signin");
//   };

//   return (
//     <>
//       <Stack
//         sx={{
//           px: {
//             lg: 10,
//             xs: 2,
//           },
//           py: {
//             lg: 8,
//             xs: 2,
//           },
//         }}>
//         <Grid
//           container
//           alignItems="center"
//           spacing={{
//             xs: 10,
//             lg: 0,
//           }}>
//           <Grid item xs={12} lg={6}>
//             <SignPage />
//           </Grid>
//           <Grid
//             item
//             xs={12}
//             lg={6}
//             alignItems="center"
//             justifyContent="space-between">
//             <Box
//               sx={{
//                 width: {
//                   md: 600,
//                   xs: "100%",
//                   sm: 500,
//                 },
//                 position: "relative",
//               }}>
//               <Stack direction={"row"}>
//                 {/* <Card /> */}
//                 <form method="POST">
//                   <Box
//                     display="flex"
//                     flexDirection={"column"}
//                     minWidth={400}
//                     alignItems={"center"}
//                     justifyContent={"center"}
//                     marginLeft={5}
//                     padding={3}
//                     borderRadius={5}
//                     boxShadow={"5px 5px 10px #AD1AAF"}
//                     sx={{
//                       ":hover": {
//                         boxShadow: "10px 10px 20px #AD1AAF",
//                       },

//                       background:
//                         "linear-gradient(160.61deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 101.7%)",
//                       borderWidth: "0.5px 0px",
//                       borderStyle: "solid",
//                       borderColor: "rgba(255, 255, 255, 0.4)",
//                       backdropFilter: "blur(17.915px)",
//                     }}>
//                     <CTypography
//                       fontSize="40px"
//                       fontWeight={600}
//                       lineHeight="80px"
//                       textTransform="uppercase">
//                       Reset Password
//                     </CTypography>

//                     <TextField
//                       inputProps={{
//                         style: {
//                           color: "white",
//                           borderStyle: "solid",
//                           borderWidth: "2px 2px 2px 2px",
//                           borderColor: "#AD1AAF",
//                           placeholder: "white",
//                         },
//                       }}
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       borderColor={"#AD1AAF"}
//                       color="secondary"
//                       name="email"
//                       margin="normal"
//                       type={"email"}
//                       variant="outlined"
//                       placeholder="Email"

//                       // backgroundColor="#fff"
//                     />
//                     <TextField
//                       inputProps={{
//                         style: {
//                           color: "white",
//                           borderStyle: "solid",
//                           borderWidth: "2px 2px 2px 2px",
//                           borderColor: "#AD1AAF",
//                           placeholder: "white",
//                         },
//                       }}
//                       value={answer}
//                       borderColor={"#AD1AAF"}
//                       color="secondary"
//                       onChange={(e) => setAnswer(e.target.value)}
//                       name="answer"
//                       margin="normal"
//                       type={"text"}
//                       variant="outlined"
//                       placeholder="Favourite NFT Proj"

//                       // backgroundColor="#fff"
//                     />

//                     <TextField
//                       inputProps={{
//                         style: {
//                           color: "white",
//                           borderStyle: "solid",
//                           borderWidth: "2px 2px 2px 2px",
//                           borderColor: "#AD1AAF",
//                           placeholder: "white",
//                         },
//                       }}
//                       value={newPassword}
//                       borderColor={"#AD1AAF"}
//                       color="secondary"
//                       onChange={(e) => setNewPassword(e.target.value)}
//                       name="newPassword"
//                       margin="normal"
//                       type={"password"}
//                       variant="outlined"
//                       placeholder="Password"

//                       // backgroundColor="#fff"
//                     />

//                     <LoginButton
//                       value="Reset"
//                       endIcon={<LoginIcon />}
//                       onClick={loginUser}>
//                       Reset Now
//                     </LoginButton>
//                     {/* <Link to="/signup"> */}
//                     <Button
//                       endIcon={<HowToRegIcon />}
//                       onClick={showSignin}
//                       style={{
//                         color: "#fff",
//                       }}
//                       sx={{ marginTop: 3, borderRadius: 3 }}>
//                       Change To Login
//                     </Button>
//                     {/* </Link> */}
//                   </Box>
//                 </form>
//               </Stack>
//             </Box>
//           </Grid>
//         </Grid>
//       </Stack>
//     </>
//   );
// }

// export default Forgot;
