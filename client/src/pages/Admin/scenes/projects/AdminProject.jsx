import { Box, Button, Link, Stack } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../../../components/admin/Header";
import { useTheme } from "@mui/material";
import { useState, useEffect } from "react";
import axiosAPI from "../../../../services/axios.js";
import Popup from "../popup/Popup";
import CreateProject from "./CreateProject";
import { CButton } from "../../../../utility";
import { usePopup } from "../../MyContext";
import UpdateProject from "./UpdateProject";
import TwitterIcon from "../../../../assets/svg/TwitterIcon.jsx";
import GoogleIcon from "../../../../assets/svg/GoogleIcon.jsx";
import DiscordIcon from "../../../../assets/svg/DiscordIcon.jsx";
import OpenseaIcon from "../../../../assets/svg/OpenseaIcon.jsx";

const AdminProject = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { openPopup, setOpenPopup } = usePopup();
  const [selectedProject, setSelectedProject] = useState(null);

  const [projects, setProjects] = useState([]);
  // const { project_name, description, supply } = projects;
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

        // Include other fields as needed
      }));
      console.log(formattedData);
      return formattedData;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  const handleEdit = (user) => {
    console.log(user);
    setSelectedProject(user);
    setOpenPopup(!openPopup);
  };

  const handleDelete = async (id) => {
    console.log(id);

    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        // Send a DELETE request to your API to delete the item by its ID
        const response = await axiosAPI.delete(`/projects/${id}`);

        if (response.status === 204) {
          // deleted item from the DataGrid's data
          const updatedData = projects.filter((item) => item.id !== id);
          setProjects(updatedData);
        } else {
          console.error("Error deleting item. Status code:", response.status);
        }
      } catch (error) {
        // Handle any errors that occur during the delete request
        console.error("Error deleting item:", error);
      }
    }
  };

  const columns = [
    { field: "id", headerName: "Registration ID", flex: 0.5 },
    // { field: "id", headerName: "Registrar ID", flex: 0.5 },
    {
      field: "project_name",
      headerName: "project_name",
      flex: 0.5,
      cellClassName: "name-column--cell",
    },
    {
      field: "description",
      headerName: "description",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "supply",
      headerName: "supply",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 0.4,
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
      flex: 1,
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
    //   field: "twitter",
    //   headerName: "twitter",
    //   width: 90,
    //   renderCell: (params) => {
    //     // Extract the link from your data
    //     const link = params.row.website;
    //     console.log(params);
    //     console.log(link);
    //     return (
    //       <Link href={link} target="_blank" sx={{ color: colors.grey[100] }}>
    //         go to Twitter
    //       </Link>
    //     );
    //   },
    // },
    // {
    //   field: "opensea",
    //   headerName: "opensea",
    //   width: 90,
    //   renderCell: (params) => {
    //     // Extract the link from your data
    //     const link = params.row.opensea;
    //     return (
    //       <Link href={link} target="_blank" sx={{ color: colors.grey[100] }}>
    //         go to Opensea
    //       </Link>
    //     );
    //   },
    // },
    // {
    //   field: "website",
    //   headerName: "website",
    //   width: 90,
    //   renderCell: (params) => {
    //     // Extract the link from your data
    //     const link = params.row.website;
    //     return (
    //       <Link href={link} target="_blank" sx={{ color: colors.grey[100] }}>
    //         go to Website
    //       </Link>
    //     );
    //   },
    // },
    // {
    //   field: "discord",
    //   headerName: "discord",
    //   width: 90,
    //   renderCell: (params) => {
    //     // Extract the link from your data
    //     const link = params.row.discord;
    //     return (
    //       <Link href={link} target="_blank" sx={{ color: colors.grey[100] }}>
    //         go to Disord
    //       </Link>
    //     );
    //   },
    // },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      headerAlign: "center",

      flex: 1,
      renderCell: (params) => (
        <Stack direction={"row"} spacing={2}>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => handleEdit(params.row)}>
            💅
          </Button>

          <Button
            variant="outlined"
            color="secondary"
            onClick={() => handleDelete(params.row.id)}>
            ❌
          </Button>
        </Stack>
      ),
    },
  ];

  return (
    <>
      <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header
            title="PROJECTS"
            subtitle="List of projects for Future Reference"
          />

          <Box>
            <CButton
              title="Add new Project"
              onClick={() => setOpenPopup(!openPopup)}>
              Add new Project
            </CButton>
          </Box>
        </Box>

        <Box
          m="40px 0 0 0"
          height="75vh"
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
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${colors.grey[100]} !important`,
            },
          }}>
          <DataGrid
            rows={projects}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
          />
        </Box>
      </Box>
      {selectedProject ? (
        <Popup title="Update Project">
          <UpdateProject
            user={selectedProject}
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
          />
        </Popup>
      ) : (
        <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}>
          <CreateProject />
        </Popup>
      )}
      {/* {open && (
        <>
          <ConfirmDialog {...{ open, setOpen, projects, setProjects }} />
          <ToastContainer className="toast-container" />
        </>
      )} */}
    </>
  );
};

export default AdminProject;
