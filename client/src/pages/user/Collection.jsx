import { Stack } from "@mui/system";
import { CTypography, OutlinedBtn } from "../../utility";
import CardSection from "./CardSection";

import { Link } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import HowItWorks from "../../components/howItWorks/HowItWorks";
import { useEffect, useState } from "react";
import API from "../../services/axios";
import { useAuth } from "../../context/auth";

// const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";
const contractAddress = "0xF432979F87CAeF442FeBF4134297FBd12C5cF2eA";
export default function Collection() {
  const [visibleNft, setVisibleNft] = useState(13);
  const handleVisibleNft = () => {
    setVisibleNft(visibleNft === 13 ? 30 : 13);

    const cardSection = document.getElementById("cardSection");
    if (cardSection) {
      cardSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <>
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
        spacing={6}>
        <TopSection />
        <CardSection id="cardSection" visibleNft={visibleNft} />
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <OutlinedBtn
            btnTitle={visibleNft === 13 ? "view more" : "View less"}
            // btnPadding={'0px 40px'}
            btnHeight="35px"
            onClick={handleVisibleNft}
          />
        </Box>
      </Stack>
      <HowItWorks />
      <Stack spacing={1} paddingBottom={10}>
        <CTypography
          align={"center"}
          fontSize={20}
          fontWeight={100}
          fontFamily="Poppins"
          textTransform="capitalize">
          Click the Link below to View Minted NFT's on Opensea
          <Box paddingTop={2}>
            <CTypography fontSize={24}>
              <Link
                to={`https://testnets.opensea.io/collection/soulclubniftyzone-3`}
                target="blank"
                style={{ textDecoration: "underline" }}>
                {contractAddress}
              </Link>
            </CTypography>
          </Box>
        </CTypography>
        <Stack>
          <RatingSection />
        </Stack>
      </Stack>
    </>
  );
}

function TopSection() {
  return (
    <>
      <Stack spacing={2} marginTop={"-10px"}>
        <Stack spacing={2}>
          <CTypography
            align={"center"}
            fontSize={18}
            fontWeight={100}
            fontFamily="Poppins"
            textTransform="capitalize">
            Note # You can mint Only 3 NFT's Per Wallet Address
          </CTypography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          my={2}>
          <CTypography
            // fontSize={70}
            fontWeight={600}
            fontFamily="Oxanium"
            textTransform="capitalize"
            fontSize={{
              md: 70,
              sm: 30,
              xs: 25,
            }}>
            Our collection
          </CTypography>
        </Stack>
      </Stack>
    </>
  );
}

function RatingSection() {
  const [value, setValue] = useState(2);
  const [comment, setComment] = useState("");
  const [auth, setAuth] = useAuth();
  const [feedbackList, setFeedbackList] = useState([]);
  const {
    user: { name },
  } = auth;

  useEffect(() => {
    async function callrating() {
      try {
        const res = await API.get("/feedback");
        console.log(res);
        console.log(res.data);
        setFeedbackList(res.data);
      } catch (error) {
        console.log("failed to get comments ", error);
      }
    }

    callrating();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle submitting the rating and comment, e.g., send to the backend
    console.log(`Rating: ${value}, comment: ${comment} , username: ${name}`);
    try {
      const res = await API.post("/feedback", {
        username: name,
        rating: value,
        comment: comment,
      });
      console.log(res);
    } catch (error) {
      console.log("Failed to add Comment", error);
    }

    try {
      const res = await API.get("/feedback");
      console.log(res);
      console.log(res.data);
      setFeedbackList(res.data);
    } catch (error) {
      console.log("failed to get comments ", error);
    }

    setValue(2);
    setComment("");
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
      gap={5}
      direction={"row"}>
      <Stack direction="row" flexWrap="wrap">
        <Stack spacing={2}>
          <Typography
            variant="h4"
            fontWeight={600}
            paddingLeft={4}
            fontFamily="Oxanium"
            color="#fff"
            textTransform="capitalize">
            User's FeedBack
          </Typography>
          {feedbackList.map((item, index) => (
            <Stack direction="column" gap={2} key={index}>
              <Stack
                direction="row"
                justifyContent={"start"}
                alignItems={"start"}
                marginLeft="30px">
                <Avatar
                  // src={userprofile}
                  alt="logo"
                  style={{
                    backgroundColor: "#AD1AAF",
                    width: 50,
                    height: 50,
                  }}>
                  {item.username[0]}
                </Avatar>
                <Stack
                  direction={"column"}
                  sx={{ paddingLeft: "10px", width: "70%" }}>
                  <Stack direction="row">
                    <CTypography>By {item.username}</CTypography>
                    <Box marginLeft={2}>
                      <Rating
                        readOnly
                        // name="simple-controlled"
                        value={item.rating}
                        size="small"
                        // onChange={(event, newValue) => handleRatingChange(newValue)}
                      />
                    </Box>
                  </Stack>

                  <CTypography maxWidth={"90%"}>{item.comment}</CTypography>
                </Stack>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
      <Stack direction="row" gap={5} padding={2}>
        <Stack spacing={2}>
          <Typography
            variant="h4"
            paddingLeft={2}
            fontWeight={600}
            color="#fff"
            fontFamily="Oxanium"
            textTransform="capitalize">
            Give Rating to our NFT Art
          </Typography>

          <form
            onSubmit={handleSubmit}
            style={{
              // "& > legend": { mt: 2 },
              marginLeft: "20px",
            }}>
            <Rating
              name="rating"
              value={value}
              color="#fff"
              outline="#fff"
              size="large"
              onChange={(event) => setValue(event.target.value)}
            />
            <TextField
              inputProps={{
                style: {
                  color: "white",
                  alignItems: "flex-start",
                  borderWidth: "2px 2px 2px 2px",
                  placeholder: "white",

                  // borderRadius:"6px",
                },
              }}
              variant="outlined"
              required
              focused
              color="secondary"
              borderColor={"#AD1AAF"}
              margin="normal"
              // label="comment"
              type="text"
              fullWidth
              placeholder=" Type in Something ..."
              multiline
              rows={2}
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            />
            <Box display="flex" justifyContent="end" mt="20px" pl={6} mr={2}>
              <Button
                // display="flex"
                // justifyContent="end"
                variant="contained"
                color="secondary"
                align="end"
                type="submit">
                Add comment
              </Button>
            </Box>
          </form>
        </Stack>
      </Stack>
    </Stack>
  );
}
