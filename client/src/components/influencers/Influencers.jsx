import { Avatar, Box } from "@mui/material";
import { Stack } from "@mui/system";
import VarifiedIcon from "../../assets/svg/VarifiedIcon";
import { CCard, CTypography, OutlinedBtn } from "../../utility";
import { Link } from "react-router-dom";

import prof1 from "../../assets/images/influencer/prof1.jpg";
import prof2 from "../../assets/images/influencer/prof2.jpg";
import prof3 from "../../assets/images/influencer/prof3.jpg";
import prof4 from "../../assets/images/influencer/prof4.jpg";
import prof5 from "../../assets/images/influencer/prof5.jpg";
import prof6 from "../../assets/images/influencer/prof6.jpg";
import prof7 from "../../assets/images/influencer/prof7.jpg";
import prof8 from "../../assets/images/influencer/prof8.jpg";

import trending1 from "../../assets/images/influencer/trending1.avif";
import trending2 from "../../assets/images/influencer/trending2.avif";
import trending3 from "../../assets/images/influencer/trending3.avif";
import trending4 from "../../assets/images/influencer/trending4.avif";
import trending5 from "../../assets/images/influencer/trending5.avif";
import trending6 from "../../assets/images/influencer/trending6.avif";
import trending7 from "../../assets/images/influencer/trending7.avif";
import trending8 from "../../assets/images/influencer/trending8.avif";

import trend1image1 from "../../assets/images/influencer/trend1image1.avif";
import trend2image2 from "../../assets/images/influencer/trend2image2.gif";
import trend3image3 from "../../assets/images/influencer/trend3image3.avif";
import trend4image4 from "../../assets/images/influencer/trend4image4.avif";
import trend5image5 from "../../assets/images/influencer/trend5image5.avif";
import trend6image6 from "../../assets/images/influencer/trend6image6.avif";
import trend7image7 from "../../assets/images/influencer/trend7image7.avif";

import trend8image8 from "../../assets/images/influencer/trend8image8.avif";

const influencersData = [
  {
    id: 1,
    name: "Lil Pudgys",
    userName: "Lil Pudgys",
    image1: trending1,
    image2: trend1image1,
    avatar: prof1,
    isVerified: true,
    twitter: "https://twitter.com/pudgypenguins",
  },
  {
    id: 2,
    name: "YogaPetz ",
    userName: "YogaPetz ",
    image1: trending2,
    image2: trend2image2,
    avatar: prof2,
    isVerified: false,
    twitter: "https://twitter.com/Yogapetz",
  },
  {
    id: 3,
    name: "Remilio Babies",
    userName: "Remilio Babies",
    image1: trending3,
    image2: trend3image3,
    avatar: prof3,
    isVerified: true,
    twitter: "https://twitter.com/REMILIONAIRE",
  },
  {
    id: 4,

    name: "Gh0stly Gh0sts",
    userName: "Gh0stly Gh0sts",
    image1: trending4,
    image2: trend4image4,
    avatar: prof4,
    isVerified: false,
    twitter: "https://twitter.com/gh0stlygh0sts",
  },
  {
    id: 5,
    name: "nounishpunk",
    userName: "nounishpunk",
    image1: trending5,
    image2: trend5image5,
    avatar: prof5,
    isVerified: true,
    twitter: "https://twitter.com/nounishpunk",
  },
  {
    id: 6,
    name: "Sprotoladys",
    userName: "Sprotoladys",
    image1: trending6,
    image2: trend6image6,
    avatar: prof6,
    isVerified: false,
    twitter: "https://twitter.com/Sprotolady",
  },
  {
    id: 7,
    name: "Senseless Stoics",
    userName: "Senseless Stoics",
    image1: trending7,
    image2: trend7image7,
    avatar: prof7,
    isVerified: true,
    twitter: "https://twitter.com/stoic_dao",
  },
  {
    id: 8,
    name: "ChronoForge",
    userName: "ChronoForge",
    image1: trending8,
    image2: trend8image8,
    avatar: prof8,
    isVerified: false,
    twitter: "https://twitter.com/playchronoforge",
  },
];

export default function Influencers() {
  const TopSection = () => {
    return (
      <Stack spacing={4}>
        <CTypography
          fontSize={18}
          fontWeight={100}
          fontFamily="Poppins"
          textTransform="capitalize">
          Watch and follow celebrities to get the best collection of NFTs
        </CTypography>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          my={2}>
          <CTypography
            fontWeight={600}
            fontFamily="Oxanium"
            textTransform="capitalize"
            fontSize={{
              md: 70,
              smL: 30,
              xs: 25,
            }}>
            joined influencers
          </CTypography>
        </Stack>
      </Stack>
    );
  };
  const CardSection = () => {
    return (
      <Stack
        direction="row"
        gap={3}
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center">
        {influencersData.map((item, index) => (
          <CCard
            key={index}
            background="linear-gradient(147.75deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);"
            backdropFilter={"blur(10px)"}
            borderRadius={"15px"}
            p={2}
            pt={3}
            borderWidth={"0px"}
            noHover>
            <Stack gap={6}>
              <Stack
                direction="row"
                justifyContent="space-between"
                spacing={1.5}>
                <Stack
                  sx={{
                    position: "relative",
                  }}>
                  <Box
                    component={"img"}
                    src={item.image1}
                    width={155}
                    height={160}
                    borderRadius={"15px"}
                  />
                  <Avatar
                    src={item.avatar}
                    size={"large"}
                    sx={{
                      position: "absolute",
                      bottom: -70,
                      right: "50%",
                      transform: "translate(50%, -50%)",
                      //border: '4px solid #000000',
                      width: 80,
                      height: 80,
                    }}
                  />
                </Stack>
                <Box
                  component={"img"}
                  src={item.image2}
                  width={125}
                  height={160}
                  borderRadius={"15px"}
                />
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                <Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <CTypography
                      fontSize={18}
                      fontWeight={500}
                      fontFamily="Oxanium"
                      textTransform="capitalize">
                      {item.name}
                    </CTypography>
                    <VarifiedIcon />
                  </Stack>
                  <CTypography
                    fontSize={16}
                    fontWeight={200}
                    fontFamily="Poppins"
                    textTransform="capitalize"
                    color="#CBCBCB">
                    @{item.userName}
                  </CTypography>
                </Stack>
                <Link to={item.twitter} target={"blank"}>
                  <OutlinedBtn
                    noBar
                    btnBackground={"rgba(248, 29, 251, 0.05);"}
                    btnBorder="1px solid #F81DFB"
                    btnBorderRadius={"42px"}
                    btnHeight={"40px"}>
                    Twitter X
                  </OutlinedBtn>
                </Link>
              </Stack>
            </Stack>
          </CCard>
        ))}
      </Stack>
    );
  };
  return (
    <Stack
      px={{
        md: 10,
        sm: 5,
        xs: 2,
      }}
      py={{
        sm: 10,
        xs: 0,
      }}
      spacing={8}>
      <TopSection />
      <CardSection />
    </Stack>
  );
}
