import { Avatar, Box, Link, Stack, linkClasses } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
//import { tokens } from "../../theme";
//import Header from "../../../../components/admin/Header";
//import { useTheme } from "@mui/material";
import { useState, useEffect } from "react";
import axiosAPI from "../../services/axios.js";
import UserPopup from "./userpopup/UserPopup.jsx";

import CreateProject from "./CreateProject";
import { OutlinedBtn } from "../../utility";
import { usePopup } from "../../context/UserPopup.jsx";
import CTypography from "../../utility/CTypography.jsx";

import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";
import discord from "../../assets/images/discord.png";

const Project = () => {
  const { openPopup, setOpenPopup } = usePopup();
  const [selectedProject, setSelectedProject] = useState(null);

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchprojects();
        console.log(data);
        setProjects(data);
      } catch (error) {
        console.log(error);
        // Handle the error if needed
      }
    }

    fetchData();
  }, [selectedProject]);

  async function fetchprojects() {
    try {
      const response = await axiosAPI.get("/projects");
      // console.log(response.data.data);
      const formattedData = response.data.data.map((user) => ({
        id: user._id, // Use _id as the id
        project_name: user.project_name,
        email: user.email,
        description: user.description,
        supply: user.supply,
        website: user.website,
        opensea: user.opensea,
        discord: user.discord,
        twitter: user.twitter,
        image_url: user.file,

        // Include other fields as needed
      }));
      console.log(formattedData);
      return formattedData;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  const CustomDescriptionCellRenderer = (params) => {
    const { value } = params;

    return (
      <Box overflow="auto">
        <CTypography variant="body2" sx={{ wordWrap: "break-word" }}>
          {value}
        </CTypography>
      </Box>
    );
  };

  const columns = [
    // { field: "id", headerName: "Registration ID", flex: 0.8, width: 100 },
    // { field: "id", headerName: "Registrar ID", flex: 0.5 },
    {
      field: "image_url",
      headerName: "PFP",
      flex: 0.2,
      renderCell: (params) => (
        <>
          {/* {console.log(params.row.image_url, API.baseURL)} */}
          <Avatar
            // src={`${baseURL}/project_images/${params.value}`}
            src={params.value}
            alt="img_avatar"
            // style={{ width: "80%", height: "80%", borderRadius: "10%" }}
            sx={{ width: 54, height: 54 }}
            // width: 54, height: 54
          />
        </>
      ),
    },
    {
      field: "project_name",
      headerName: "Project Name",
      flex: 0.3,
      cellClassName: "name-column--cell",
    },
    {
      field: "description",
      headerName: "Description",
      width: 400,
      flex: 1,
      cellClassName: "name-column--cell",
      // renderCell: CustomDescriptionCellRenderer,
    },
    {
      field: "supply",
      headerName: "Supply",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 0.2,
    },

    // {
    //   field: "email",
    //   headerName: "Email",
    //   width: 100,
    //   flex: 1,
    // },
    {
      field: "twitter",
      headerName: "Twitter",
      width: 120,
      align: "start",
      renderCell: (params) => {
        // Extract the link from your data
        const link = params.row.website;
        // console.log(params);
        // console.log(link);
        return (
          <Link href={link} target="_blank" sx={{ color: "white" }}>
            <Stack direction="row">
              <TwitterIcon sx={{ color: "#1DA1F2" }} fontSize={`medium`} />
              <Box>Twitter</Box>
            </Stack>
          </Link>
        );
      },
    },
    // {
    //   field: "opensea",
    //   headerName: "Opensea",
    //   width: 120,
    //   renderCell: (params) => {
    //     // Extract the link from your data
    //     const link = params.row.opensea;
    //     // console.log(link);
    //     // console.log(params.opensea);
    //     return (
    //       <Link href={link} target="_blank" sx={{ color: "white" }}>
    //         Opensea
    //       </Link>
    //     );
    //   },
    // },
    {
      field: "website",
      headerName: "Website",
      width: 120,
      renderCell: (params) => {
        // Extract the link from your data
        const link = params.row.website;
        return (
          <Link href={link} target="_blank" sx={{ color: "white" }}>
            <Stack direction="row">
              <LanguageIcon fontSize={`medium`} />
              <Box>Website</Box>
            </Stack>
          </Link>
        );
      },
    },
    {
      field: "discord",
      headerName: "Discord",
      width: 120,
      renderCell: (params) => {
        // Extract the link from your data
        const link = params.row.discord;
        return (
          <Link href={link} target="_blank" sx={{ color: "white" }}>
            <Stack direction="row">
              <Box
                src={discord}
                component={"img"}
                sx={{ color: "#1DA1F2" }}
                marginRight={1}
                width="25px"
                height="25px"
                fontSize={`medium`}
              />
              <Box>Disord</Box>
            </Stack>
          </Link>
        );
      },
    },
  ];

  return (
    <>
      <Box m="40px">
        <TopSection
          title={"Visit some future projects"}
          heading={"Upcoming NFTs"}
          btn={"Add your Project"}
          setOpenPopup={setOpenPopup}
          openPopup={openPopup}
        />
        <Box
          m="40px 0 0 0"
          height="80vh"
          sx={{
            "& .MuiDataGrid-root": {
              borderColor: "#AD1AAF",
              color: "white",
              fontSize: "18px",
              // wordWrap: "break-word",
            },
            "& .css-kzyyzb-MuiDataGrid-root .MuiDataGrid-withBorderColor": {
              borderColor: "#AD1AAF",
            },

            "& .MuiDataGrid-cell": {
              color: "white",
              border: 1,
              // whiteSpace: "normal", // or 'pre-line'
              // wordWrapEnabled: true,
              // whiteSpace: "normal",
              // lineHeight: "normal",
              // overflow: "visible",
              // lineHeight: "1.43rem",
              // whiteSpace: "normal",
            },
            "& .name-column--cell": {
              color: "white",
            },
            "& .MuiDataGrid-columnHeaders": {
              bgcolor: "#AD1AAF",
              color: "white",
              border: 1,
            },
            "& .MuiDataGrid-virtualScroller": {
              bgcolor: "secondary",
              color: "white",
              // border: 1,
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",

              color: "white",
              bgcolor: "#AD1AAF",
              border: 1,
            },
            "& .MuiCheckbox-root": {
              color: "white",
              // border: 1,
              wordWrap: "break-word",
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: "white",
            },
          }}>
          <DataGrid
            rowHeight={60}
            rows={projects}
            columns={columns}
            allowTextWrap={true}

            // components={{ Toolbar: GridToolbar }}
          />
        </Box>
      </Box>

      <UserPopup openPopup={openPopup} setOpenPopup={setOpenPopup}>
        <CreateProject />
      </UserPopup>

      {/* {open && (
        <>
          <ConfirmDialog {...{ open, setOpen, projects, setProjects }} />
          <ToastContainer className="toast-container" />
        </>
      )} */}
    </>
  );
};

export default Project;

function TopSection({ title, heading, btn, openPopup, setOpenPopup }) {
  return (
    <Stack spacing={4}>
      <CTypography
        fontSize={16}
        fontWeight={100}
        fontFamily="Poppins"
        textTransform="capitalize">
        {title}
      </CTypography>
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
            md: 50,
            sm: 30,
            xs: 25,
          }}>
          {heading}
        </CTypography>
        {btn && (
          <OutlinedBtn
            btnTitle={btn}
            fontSize={{
              md: 20,
              sm: 10,
              xs: 5,
            }}
            // btnPadding={'0px 40px'}
            btnHeight="35px"
            onClick={() => setOpenPopup(!openPopup)}
          />
        )}
      </Stack>
    </Stack>
  );
}
