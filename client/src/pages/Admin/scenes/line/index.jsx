import { Box, Button } from "@mui/material";
import Header from "../../../../components/admin/Header";
import LineChart from "../../../../components/admin/LineChart";
import API from "../../../../services/axios";
import { useState } from "react";

const Line = () => {
  // function handleUpload(e) {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("file", file);
  //   API.post("/upload", formData)
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // }
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
