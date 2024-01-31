import {
  Avatar,
  Box,
  Button,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { DataGrid, GridFooter } from "@mui/x-data-grid";
import { tokens } from "../../theme";
// import { mockDataInvoices } from "../../data/mockData";
import Header from "../../../../components/admin/Header";
import axiosAPI from "../../../../services/axios.js";
import API from "../../../../services/axios.js";
import baseURL from "../../../../services/baseURL.js";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import TwitterIcon from "../../../../assets/svg/TwitterIcon.jsx";
import GoogleIcon from "../../../../assets/svg/GoogleIcon.jsx";
import DiscordIcon from "../../../../assets/svg/DiscordIcon.jsx";
import OpenseaIcon from "../../../../assets/svg/OpenseaIcon.jsx";

// const baseURL = "http://localhost:5000/";

const AdminCollaboration = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [collab, setCollab] = useState([]);
  const [collabAccept, setCollabAccept] = useState([]);
  // const [collabRequests, setCollabRequests] = useState([]);
  // const { project_name, description, supply } = collab;
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchcollab();
        console.log(data);
        setCollab(data);

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

  async function fetchcollab() {
    try {
      const response = await axiosAPI.get("/collab");
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

  const handleReqStatus = async (id, status) => {
    // Update the status of a project request
    try {
      const response = await axiosAPI.put(`collab/${id}`, { status });

      toast.success(`✔ Collab ${status} !`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      // await fetchcollab();
      // await fetchAcceptedCollab();
      if (response.status === 201) {
        // deleted item from the DataGrid's data
        const updatedData = collab.filter((item) => item.id !== id);
        setCollab(updatedData);
        await fetchAcceptedCollab();
      } else {
        console.error("Error deleting item. Status code:", response.status);
      }
    } catch (error) {
      console.error(error);
      toast.error("✔ Something Wrong Done!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  const handleDelete = async (id) => {
    console.log(id);
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        // Send a DELETE request to your API to delete the item by its ID
        const response = await axiosAPI.delete(`/collab/${id}`);

        if (response.status === 200) {
          // deleted item from the DataGrid's data
          const updatedData = collabAccept.filter((item) => item.id !== id);
          setCollabAccept(updatedData);
        } else {
          console.error("Error deleting item. Status code:", response.status);
        }
      } catch (error) {
        // Handle any errors that occur during the delete request
        console.error("Error deleting item:", error);
      }
    }
  };
  const columns_pending = [
    // { field: "id", headerName: "ID", flex: 1 },
    {
      field: "image_url",
      headerName: "PFP",
      flex: 0.5,
      renderCell: (params) => (
        <>
          <Avatar
            src={params.value}
            alt="img_avatar"
            // style={{ width: "100%", height: "100%", borderRadius: "50%" }}
            sx={{ width: 44, height: 44 }}
          />
        </>
      ),
      sortable: false,
      filterable: false,
    },
    {
      field: "project_name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "description",
      headerName: "Description",
      flex: 2,
      cellClassName: "name-column--cell",
    },

    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "Social",
      headerName: "Social Links",
      // width: 90,
      flex: 1.2,
      renderCell: (params) => {
        // Extract the link from your data
        const link1 = params.row.twitter;
        const link2 = params.row.website;
        const link3 = params.row.discord;
        const link4 = params.row.opensea;
        console.log(params);
        // console.log(link);
        return (
          <>
            <Stack
              display={"flex"}
              justifyContent={"center"}
              direction="row"
              mt={4}
              spacing={1}>
              <Stack
                sx={{
                  "&:hover": {
                    color: "#fff",
                    cursor: "pointer",
                    transform: "scale(1.1)",
                  },
                }}
                // key={i}
              >
                <Link
                  href={link1}
                  target="_blank"
                  sx={{ color: colors.grey[100] }}>
                  <TwitterIcon />
                </Link>
              </Stack>
              <Stack
                sx={{
                  "&:hover": {
                    color: "#fff",
                    cursor: "pointer",
                    transform: "scale(1.1)",
                  },
                }}
                // key={i}
              >
                <Link
                  href={link2}
                  target="_blank"
                  sx={{ color: colors.grey[100] }}>
                  <GoogleIcon />
                </Link>
              </Stack>
              <Stack
                sx={{
                  "&:hover": {
                    color: "#fff",
                    cursor: "pointer",
                    transform: "scale(1.1)",
                  },
                }}
                // key={i}
              >
                <Link
                  href={link3}
                  target="_blank"
                  sx={{ color: colors.grey[100] }}>
                  <DiscordIcon />
                </Link>
              </Stack>
              <Stack
                sx={{
                  "&:hover": {
                    color: "#fff",
                    cursor: "pointer",
                    transform: "scale(1.1)",
                  },
                }}>
                <Link
                  href={link4}
                  target="_blank"
                  sx={{ color: colors.grey[100] }}>
                  <OpenseaIcon />
                </Link>
              </Stack>
            </Stack>
          </>
        );
      },
    },

    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      headerAlign: "center",

      flex: 1,
      renderCell: (params) => (
        <Stack direction={"row"} spacing={1}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleReqStatus(params.row.id, "accept")}>
            Accept
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => handleReqStatus(params.row.id, "reject")}>
            Reject
          </Button>
        </Stack>
      ),
    },
  ];

  const columns_approved = [
    // { field: "id", headerName: "ID", flex: 0.9 },
    {
      field: "image_url",
      headerName: "PFP",
      flex: 0.5,
      renderCell: (params) => (
        <>
          <Avatar
            src={params.value}
            alt="img_avatar"
            // style={{ width: "100%", height: "100%", borderRadius: "50%" }}
            sx={{ width: 44, height: 44 }}
          />
        </>
      ),
      sortable: false,
      filterable: false,
    },
    {
      field: "project_name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "description",
      headerName: "Description",
      flex: 2,
      cellClassName: "name-column--cell",
    },

    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "Social",
      headerName: "Social Links",
      // width: 90,
      flex: 1.2,
      renderCell: (params) => {
        // Extract the link from your data
        const link1 = params.row.twitter;
        const link2 = params.row.website;
        const link3 = params.row.discord;
        const link4 = params.row.opensea;
        console.log(params);
        // console.log(link);
        return (
          <>
            <Stack
              display={"flex"}
              justifyContent={"center"}
              direction="row"
              mt={4}
              spacing={1}>
              <Stack
                sx={{
                  "&:hover": {
                    color: "#fff",
                    cursor: "pointer",
                    transform: "scale(1.1)",
                  },
                }}
                // key={i}
              >
                <Link
                  href={link1}
                  target="_blank"
                  sx={{ color: colors.grey[100] }}>
                  <TwitterIcon />
                </Link>
              </Stack>
              <Stack
                sx={{
                  "&:hover": {
                    color: "#fff",
                    cursor: "pointer",
                    transform: "scale(1.1)",
                  },
                }}
                // key={i}
              >
                <Link
                  href={link2}
                  target="_blank"
                  sx={{ color: colors.grey[100] }}>
                  <GoogleIcon />
                </Link>
              </Stack>
              <Stack
                sx={{
                  "&:hover": {
                    color: "#fff",
                    cursor: "pointer",
                    transform: "scale(1.1)",
                  },
                }}
                // key={i}
              >
                <Link
                  href={link3}
                  target="_blank"
                  sx={{ color: colors.grey[100] }}>
                  <DiscordIcon />
                </Link>
              </Stack>
              <Stack
                sx={{
                  "&:hover": {
                    color: "#fff",
                    cursor: "pointer",
                    transform: "scale(1.1)",
                  },
                }}>
                <Link
                  href={link4}
                  target="_blank"
                  sx={{ color: colors.grey[100] }}>
                  <OpenseaIcon />
                </Link>
              </Stack>
            </Stack>
          </>
        );
      },
    },
    // {
    //   field: "opensea",
    //   headerName: "opensea",
    //   width: 120,
    //   renderCell: (params) => {
    //     // Extract the link from your data
    //     const link = params.row.opensea;
    //     return (
    //       <Link href={link} target="_blank" sx={{ color: "white" }}>
    //         go to Opensea
    //       </Link>
    //     );
    //   },
    // },
    // {
    //   field: "website",
    //   headerName: "website",
    //   width: 120,
    //   renderCell: (params) => {
    //     // Extract the link from your data
    //     const link = params.row.website;
    //     return (
    //       <Link href={link} target="_blank" sx={{ color: "white" }}>
    //         go to Website
    //       </Link>
    //     );
    //   },
    // },
    // {
    //   field: "discord",
    //   headerName: "discord",
    //   width: 120,
    //   renderCell: (params) => {
    //     // Extract the link from your data
    //     const link = params.row.discord;
    //     return (
    //       <Link href={link} target="_blank" sx={{ color: "white" }}>
    //         go to Disord
    //       </Link>
    //     );
    //   },
    // },
    {
      field: "delete",
      headerName: "Delete",
      sortable: false,
      width: 100,
      renderCell: (params) => (
        <Box
          width="100%"
          m="0 auto"
          p="5px"
          display="flex"
          justifyContent="center"
          backgroundColor={colors.greenAccent[600]}
          borderRadius="4px"
          onClick={() => handleDelete(params.row.id)}>
          <DeleteOutlinedIcon />
          <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
            Delete
          </Typography>
        </Box>

        // <Button
        //   variant="outlined"
        //   color="secondary"
        //   onClick={() => handleDelete(params.row.id)}>
        //   Delete
        // </Button>
      ),
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="Pending Collab Requests"
        subtitle="List of pending Collaboration from other NFT collab"
      />
      <Box
        m="40px 0 20px 0"
        height="40vh"
        width={"100%"}
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
            fontSize: "18px",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          // "& .MuiDataGrid-headerContainer": {
          //   borderTop: "none",
          //   backgroundColor: "#000" || colors.pink, // Change this to your desired color
          // },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}>
        <DataGrid
          rows={collab}
          columns={columns_pending}
          slots={{
            hideFooter: true,
            // columnMenu: { background: 'red', counter: rows.length },
          }}
          hideFooterPagination
          hideFooterSelectedRowCount
          hideFooter
        />
      </Box>

      <Header
        title="Collaborated collab"
        subtitle="List of Collaborated NFT collab"
      />
      <Box
        m="40px 0 100px 0"
        height="45vh"
        width={"100%"}
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
            fontSize: "18px",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}>
        <DataGrid
          // checkboxSelection
          rows={collabAccept}
          columns={columns_approved}
          hideFooterPagination
          hideFooterSelectedRowCount
          hideFooter
        />
      </Box>
    </Box>
  );
};

export default AdminCollaboration;
