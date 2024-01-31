import {
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
// import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../../../components/admin/Header";
import LineChart from "../../../../components/admin/LineChart";
import GeographyChart from "../../../../components/admin/GeographyChart";
import BarChart from "../../../../components/admin/BarChart";
import StatBox from "../../../../components/admin/StatBox";
import ProgressCircle from "../../../../components/admin/ProgressCircle";
import AccountBox from "@mui/icons-material/AccountBox";
import axiosAPI from "../../../../services/axios.js";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [count, setCount] = useState(0);
  const [collab, setCollab] = useState(0);
  const [feedbackList, setFeedbackList] = useState([]);
  async function fetchUsersCounts() {
    try {
      const response = await axiosAPI.get("/users");
      console.log(response.data.data);
      // const totalusers = (response.data.data).count()
      console.log(response.data.data.length);
      setCount(response.data.data.length);
      // const totalusers = response.data.length
      // console.log(totalusers);
    } catch (error) {
      console.error(error);
    }
  }
  async function fetchCollabs() {
    try {
      const response = await axiosAPI.get("/accepted-collab");
      console.log(response);
      // console.log(response.data.length);
      setCollab(response.data.length);
    } catch (error) {
      console.error(error);
    }
  }

  async function reviews() {
    try {
      const res = await axiosAPI.get("/feedback");
      console.log(res);
      console.log(res.data);
      setFeedbackList(res.data);
    } catch (error) {
      console.log("failed to get comments ", error);
    }
  }
  useEffect(() => {
    async function totalcount() {
      await fetchUsersCounts();
      await fetchCollabs();
      await reviews();
    }

    totalcount();
  }, []);
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        {/* <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}>
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box> */}
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px">
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center">
          <StatBox
            title={count}
            subtitle="Users"
            progress="0.75"
            increase="+54%"
            icon={
              <AccountBoxIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center">
          <StatBox
            title="5"
            subtitle="NFT Sales"
            progress="0.50"
            increase="+11%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center">
          <StatBox
            title={collab}
            subtitle="New Collabs"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center">
          <StatBox
            title="0xdse12jd"
            subtitle="Deployment Address"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}>
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center">
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}>
                MAIN FEATURES
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}>
                Projects, Collabs, Users
              </Typography>
            </Box>
            {/* <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box> */}
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px">
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Reviews
            </Typography>
          </Box>
          {feedbackList.map((feedback, i) => (
            <Stack key={i}>
              <Box borderBottom={`4px solid ${colors.primary[500]}`} p="15px">
                <Box
                  display="flex"
                  justifyContent="space-between"
                  // alignItems="start"
                >
                  <Box maxWidth={5}>
                    <Typography
                      color={colors.greenAccent[500]}
                      variant="h5"
                      fontWeight="600">
                      {feedback.username}
                    </Typography>
                  </Box>
                  <Box
                    backgroundColor={colors.greenAccent[500]}
                    p="5px 5px"
                    borderRadius="4px">
                    {feedback.rating + " / " + 5}
                  </Box>
                </Box>

                <Box color={colors.grey[100]}>
                  <Typography>{feedback.comment}</Typography>
                </Box>
              </Box>
            </Stack>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
