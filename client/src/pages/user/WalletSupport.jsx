import { Avatar } from "@mui/material";
import { Stack } from "@mui/system";
import { CCard, CTypography } from "../../utility";

import axiosAPI from "../../services/axios.js";
import { useEffect, useState } from "react";

// const logo = [
//   {
//     id: 1,
//     src: WalletSupport1Image,
//     name: "Metamask",
//   },
//   {
//     id: 2,
//     src: WalletSupport2Image,
//     name: "Binance",
//   },
//   {
//     id: 3,
//     src: WalletSupport3Image,
//     name: "Trust Wallet",
//   },
//   {
//     id: 4,
//     src: WalletSupport4Image,
//     name: "Alpha",
//   },
//   {
//     id: 5,
//     src: WalletSupport5Image,
//     name: "Coingecko",
//   },
// ];

export default function WalletSupport() {
  const [collabAccept, setCollabAccept] = useState([]);
  // const [collabRequests, setCollabRequests] = useState([]);
  // const { project_name, description, supply } = collab;
  useEffect(() => {
    async function fetchData() {
      try {
        const data2 = await fetchAcceptedCollab();
        console.log(data2);
        setCollabAccept(data2);
      } catch (error) {
        console.log(error);
        // Handle the error if needed
      }
    }

    fetchData();
  }, []);
  async function fetchAcceptedCollab() {
    try {
      const response = await axiosAPI.get("/accepted-collab");
      // console.log(response.data.data);
      const formattedData = response.data.map((user) => ({
        id: user._id, // Use _id as the id
        project_name: user.project_name,
        email: user.email,
        description: user.description,
        supply: user.supply,
        image_url: user.file,
        website: user.website,
        opensea: user.opensea,
        discord: user.discord,
        twitter: user.twitter,

        // Include other fields as needed
      }));
      console.log(formattedData);
      return formattedData;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  return (
    <Stack
      spacing={5}
      py={{
        sm: 10,
        xs: 0,
      }}>
      <CTypography
        fontSize={25}
        fontWeight={400}
        textAlign="center"
        fontFamily="Poppins"
        sx={{
          background: "linear-gradient(90.13deg, #FFFFFF 0%, #F81DFB 99.96%);",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
        Trade with world’s most trusted NFT projects
      </CTypography>
      <CTypography
        fontSize={{
          lg: 80,
          md: 50,
          xs: 45,
        }}
        fontWeight={500}
        textAlign="center"
        color="white"
        fontFamily="Oxanium"
        textTransform="capitalize"
        mb={2}>
        Our Latest Collaborations
      </CTypography>
      <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={4}>
        {collabAccept.splice(0, 5).map((item) => (
          <CCard
            key={item.id}
            p={3}
            background={
              "linear-gradient(147.75deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);"
            }
            backdropFilter="blur(18px)"
            borderRadius="15px"
            borderWidth="0px"
            noHover>
            <CCard
              background={
                "linear-gradient(147.75deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);"
              }
              backdropFilter="blur(10px)"
              borderRadius={50}
              p={4}
              borderWidth="0px">
              <Avatar
                // src={`${baseURL}/collab_images/${item.image_url}`}
                src={item.image_url}
                alt={item.project_name}
                sx={{
                  width: 100,
                  height: 100,
                }}
              />
            </CCard>
            <CTypography
              fontSize={20}
              fontWeight={500}
              textAlign="center"
              color="white"
              fontFamily="Oxanium"
              pt={2}>
              {item.project_name}
            </CTypography>
          </CCard>
        ))}
      </Stack>
    </Stack>
  );
}
