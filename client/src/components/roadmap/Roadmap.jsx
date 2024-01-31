import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Card from "../../utility/Card";
import CTypography from "../../utility/CTypography";
import { Link } from "react-router-dom";
import heroImage1 from "../../assets/images/hero1.png";

export default function Roadmap() {
  const roadmap = [
    {
      id: 0,
      text: "adsdad",
    },
    {
      id: 1,
      text: "adsdad",
    },
    {
      id: 3,
      text: "adsdad",
    },
  ];

  const TopSection = () => {
    return (
      <Stack
        spacing={4}
        px={10}
        py={{
          sm: 10,
          xs: 5,
        }}
        pb={20}
        alignItems="center">
        <CTypography
          fontSize={25}
          fontWeight={400}
          textAlign="center"
          fontFamily="Poppins"
          sx={{
            background:
              "linear-gradient(90.13deg, #FFFFFF 0%, #F81DFB 99.96%);",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
          Our Vision is to Make independent World
        </CTypography>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          my={2}>
          <CTypography
            fontWeight={700}
            fontFamily="Oxanium"
            textTransform="capitalize"
            align="center"
            color={"#F5FBF2"}
            fontSize={{
              lg: 64,
              md: 50,
              xs: 45,
            }}>
            Roadmap
          </CTypography>
        </Stack>
      </Stack>
    );
  };
  return (
    <Stack
      gap={4}
      py={{
        sm: 10,
        xs: 0,
      }}
      mx={{
        sm: 10,
        xs: 5,
      }}>
      <TopSection />
      {/* <Stack
        direction="row"
        gap={2}
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap">
        {icons.map((icon) => (
          <Stack key={icon.id} alignItems="center" gap={2} direction="row">
            <Stack alignItems="center" gap={2}>
              <CCard borderWidth={"0"} p={3} borderRadius={50}>
                {icon.icon}
              </CCard>
              <CTypography fontSize={18} fontWeight={600} textAlign="center">
                {icon.name}
              </CTypography>
            </Stack>
            <Box
              component="img"
              src={icon?.dontLine}
              display={{
                xs: "none",
                lg: "block",
              }}
            />
          </Stack>
        ))}
      </Stack> */}
      <Stack
        direction="row"
        gap={3}
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center">
        <Card
          align="center"
          borderRadius={{
            xs: "20px",
            sm: "41.6667px",
          }}>
          <Stack spacing={3} maxWidth={1000} padding={5}>
            <CTypography
              fontSize={{
                lg: "28px",
                xs: "18px",
              }}
              fontWeight={400}
              textAlign="center"
              color="#ad1aaf"
              textTransform="capitalize">
              SoulClub
            </CTypography>
            <CTypography
              fontSize="17px"
              fontWeight={400}
              textAlign="center"
              color="#fff"
              textTransform="capitalize">
              I am Sarmad Jahangir 22 year old. I have a Law background. Apart
              from that i have quite a taste for WEB 3.0 and its utility. My
              goals and ambitions are unprecedented among others. Setting up my
              foot into building my own project was a dream i worked on for
              quite a while. I’m a founder at soul club. We launched a few days
              back after working at the backend for the last 6 months. Genuinely
              humbled by the response we’re getting from the community so far.
            </CTypography>
          </Stack>
        </Card>
      </Stack>
      <Stack
        direction="row"
        gap={3}
        flexWrap="wrap"
        alignItems="start"
        justifyContent="start">
        <Card
          align="center"
          borderRadius={{
            xs: "20px",
            sm: "41.6667px",
          }}>
          <Stack spacing={3} maxWidth={800} padding={5}>
            <CTypography
              fontSize={{
                lg: "28px",
                xs: "18px",
              }}
              fontWeight={400}
              textAlign="center"
              color="#ad1aaf"
              textTransform="capitalize">
              Voting of holders
            </CTypography>
            <CTypography
              fontSize="17px"
              fontWeight={400}
              textAlign="center"
              color="#fff"
              textTransform="capitalize">
              Community voting in some important project decisions and some
              extraordinary Projects Collection Supports
            </CTypography>
          </Stack>
        </Card>
      </Stack>
      <Stack
        direction="row"
        gap={3}
        flexWrap="wrap"
        alignItems="end"
        justifyContent="end">
        <Card
          align="center"
          borderRadius={{
            xs: "20px",
            sm: "41.6667px",
          }}>
          <Stack spacing={3} maxWidth={800} padding={5}>
            <CTypography
              fontSize={{
                lg: "28px",
                xs: "18px",
              }}
              fontWeight={400}
              textAlign="center"
              color="#ad1aaf"
              textTransform="capitalize">
              A dream of Interational Collab
            </CTypography>
            <CTypography
              fontSize="17px"
              fontWeight={400}
              textAlign="center"
              color="#fff"
              textTransform="capitalize">
              Holders who hold 25 NFT for 2 months will be given a week's stay
              in one of the hotels in the beautiful city of different Countries
              or will be paid in cash instead
            </CTypography>
          </Stack>
        </Card>
      </Stack>
      <Stack
        direction="row"
        gap={3}
        flexWrap="wrap"
        alignItems="start"
        justifyContent="start">
        <Card
          align="center"
          borderRadius={{
            xs: "20px",
            sm: "41.6667px",
          }}>
          <Stack spacing={3} maxWidth={800} padding={5}>
            <CTypography
              fontSize={{
                lg: "28px",
                xs: "18px",
              }}
              fontWeight={400}
              textAlign="center"
              color="#ad1aaf"
              textTransform="capitalize">
              Special privilege
            </CTypography>
            <CTypography
              fontSize="17px"
              fontWeight={400}
              textAlign="center"
              color="#fff"
              textTransform="capitalize">
              Providing 75% discount for holders who apply to recieve
              construction plans
            </CTypography>
          </Stack>
        </Card>
      </Stack>

      <Stack
        direction="row"
        gap={3}
        flexWrap="wrap"
        alignItems="end"
        justifyContent="end">
        <Card
          align="center"
          borderRadius={{
            xs: "20px",
            sm: "41.6667px",
          }}>
          <Stack spacing={3} maxWidth={800} padding={5}>
            <CTypography
              fontSize={{
                lg: "28px",
                xs: "18px",
              }}
              fontWeight={400}
              textAlign="center"
              color="#ad1aaf"
              textTransform="capitalize">
              Alpha Group
            </CTypography>
            <CTypography
              fontSize="17px"
              fontWeight={400}
              textAlign="center"
              color="#fff"
              textTransform="capitalize">
              The addition of holders to Alpha Group to perform some utilities
              such as providing crypto signals
            </CTypography>
          </Stack>
        </Card>
      </Stack>
      <Stack
        direction="row"
        gap={3}
        flexWrap="wrap"
        alignItems="start"
        justifyContent="start">
        <Card
          align="center"
          borderRadius={{
            xs: "20px",
            sm: "41.6667px",
          }}>
          <Stack spacing={3} maxWidth={800} padding={5}>
            <CTypography
              fontSize={{
                lg: "28px",
                xs: "18px",
              }}
              fontWeight={400}
              textAlign="center"
              color="#ad1aaf"
              textTransform="capitalize">
              Alien mask donation
            </CTypography>
            <CTypography
              fontSize="17px"
              fontWeight={400}
              textAlign="center"
              color="#fff"
              textTransform="capitalize">
              Holders who keep 7 NFT for 1 month will be given an alien mask
            </CTypography>
          </Stack>
        </Card>
      </Stack>
      <Stack
        direction="row"
        gap={3}
        flexWrap="wrap"
        alignItems="end"
        justifyContent="end">
        <Card
          align="center"
          borderRadius={{
            xs: "20px",
            sm: "41.6667px",
          }}>
          <Stack spacing={3} maxWidth={800} padding={5}>
            <CTypography
              fontSize={{
                lg: "28px",
                xs: "18px",
              }}
              fontWeight={400}
              textAlign="center"
              color="#ad1aaf"
              textTransform="capitalize">
              LootBox
            </CTypography>
            <CTypography
              fontSize="17px"
              fontWeight={400}
              textAlign="center"
              color="#fff"
              textTransform="capitalize">
              We will reward holders monthly with loot boxes for completing a
              series of missions
            </CTypography>
          </Stack>
        </Card>
      </Stack>
    </Stack>
  );
}
