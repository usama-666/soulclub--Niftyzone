import { Box, Grid } from "@mui/material";
import { Stack } from "@mui/system";
import heroImage1 from "../../assets/images/hero1.png";
import heroImage2 from "../../assets/images/hero2.png";
import heroImage3 from "../../assets/images/hero3.png";
import Card from "../../utility/Card";
// import CButton from "../../utility/CButton";
import CTypography from "../../utility/CTypography";
import OutlinedBtn from "../../utility/OutlinedBtn";
import { useNavigate } from "react-router-dom";
import SButton from "../../utility/SButton";

export default function Hero() {
  const navigate = useNavigate();
  function handleSignup() {
    navigate("/signin");
  }
  const Card1 = () => {
    return (
      <Stack
        sx={
          {
            // position: 'absolute',
            // top: '50%',
            // bottom: '50%',
          }
        }>
        <Card
          borderRadius={{
            xs: "20px",
            sm: "41.6667px",
          }}>
          <Stack
            p={{
              xs: 2,
              // sm: 4,
            }}
            spacing={2}>
            <Box
              component="img"
              src={heroImage1}
              alt="hero-image"
              sx={{
                height: {
                  xs: "140px",
                  sm: "200px",
                  lg: "250px",
                },
                width: {
                  xs: "140px",
                  sm: "200px",
                  lg: "250px",
                },
              }}
            />
            <Stack>
              <CTypography
                fontSize={{
                  lg: "28px",
                  xs: "18px",
                }}
                fontWeight={400}
                textAlign="center"
                color="#fff"
                textTransform="capitalize">
                bleeding ghost
              </CTypography>
              <CTypography
                fontSize="17px"
                fontWeight={400}
                textAlign="center"
                color="#fff"
                textTransform="capitalize">
                $ 152,793.17
              </CTypography>
            </Stack>
          </Stack>
        </Card>
      </Stack>
    );
  };
  const Card2 = () => {
    return (
      <Stack
        sx={{
          position: "absolute",
          left: {
            md: "25%",
            xs: "25%",
          },
          top: "-25%",
          zIndex: 1,
        }}>
        <Card
          borderRadius={{
            xs: "20px",
            sm: "41.6667px",
          }}>
          <Stack
            p={{
              xs: 2,
              //  sm: 4,
            }}
            spacing={2}>
            <Box
              component="img"
              src={heroImage2}
              alt="hero-image"
              sx={{
                height: {
                  xs: "140px",
                  sm: "200px",
                  lg: "250px",
                },
                width: {
                  xs: "140px",
                  sm: "200px",
                  lg: "250px",
                },
              }}
            />
            <Stack>
              <CTypography
                fontSize={{
                  lg: "28px",
                  xs: "18px",
                }}
                fontWeight={400}
                textAlign="center"
                color="#fff"
                textTransform="capitalize">
                Living of the art
              </CTypography>
              <CTypography
                fontSize="17px"
                fontWeight={400}
                textAlign="center"
                color="#fff"
                textTransform="capitalize">
                $ 543,576.13
              </CTypography>
            </Stack>
          </Stack>
        </Card>
      </Stack>
    );
  };
  const Card3 = () => {
    return (
      <Stack
        sx={{
          position: "absolute",
          left: {
            lg: "55%",
            sm: "55%",
          },
          right: {
            xs: "0%",
          },
          bottom: "-15%",
        }}>
        <Card
          borderRadius={{
            xs: "20px",
            sm: "41.6667px",
          }}>
          <Stack
            p={{
              xs: 2,
              // sm: 4,
            }}
            spacing={2}>
            <Box
              component="img"
              src={heroImage3}
              alt="hero-image"
              sx={{
                height: {
                  xs: "140px",
                  sm: "200px",
                  lg: "250px",
                },
                width: {
                  xs: "140px",
                  sm: "200px",
                  lg: "250px",
                },
              }}
            />
            <Stack>
              <CTypography
                fontSize={{
                  lg: "28px",
                  xs: "18px",
                }}
                fontWeight={400}
                textAlign="center"
                color="#fff"
                textTransform="capitalize">
                Statue of vughae
              </CTypography>
              <CTypography
                fontSize="17px"
                fontWeight={400}
                textAlign="center"
                color="#fff"
                textTransform="capitalize">
                $ 452,968.48
              </CTypography>
            </Stack>
          </Stack>
        </Card>
      </Stack>
    );
  };
  return (
    <Stack
      sx={{
        px: {
          lg: 10,
          xs: 2,
        },
        py: {
          lg: 4,
          xs: 1,
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
          <Stack spacing={2}>
            <CTypography
              fontSize={{
                lg: "60px",
                xs: "35px",
              }}
              fontWeight={600}
              lineHeight="80px"
              textTransform="uppercase">
              Explore, Mint and Flip NFT's on SOULCLUB
            </CTypography>
            <CTypography
              fontSize={{
                lg: "24px",
                xs: "14px",
              }}
              fontWeight={100}
              fontFamily="Poppins"
              textTransform="capitalize">
              SoulClub is the World’s first and largest <br /> NFT/Avatar
              Project
            </CTypography>
            <Stack direction={"row"} spacing={2} py={2}>
              <SButton
                btnTitle={"Explore Now"}
                buttonRightStyle={{
                  height: 50,
                }}
                buttonLeftStyle={{
                  height: 50,
                }}
                onSignup={handleSignup}
              />
              <OutlinedBtn size="small" btnTitle={"project"} />
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} lg={6} alignItems="center" justifyContent="center">
          <Box
            sx={{
              width: {
                md: 600,
                xs: "100%",
                sm: 500,
              },
              position: "relative",
            }}>
            <Card1 />
            <Card2 />
            <Card3 />
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
}
