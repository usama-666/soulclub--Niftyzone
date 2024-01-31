import { Box, Button, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../../../components/admin/Header";
import { useTheme } from "@mui/material";
import { useState, useEffect } from "react";
import axiosAPI from "../../../../services/axios.js";
import Popup from "../popup/Popup";
import { CButton } from "../../../../utility";
import CreateUser from "./CreateUser";
import { usePopup } from "../../MyContext";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const AdminUsers = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [users, setUsers] = useState([]);
  const { openPopup, setOpenPopup } = usePopup();
  // const { project_name, description, supply } = projects;
  async function fetchUsers() {
    try {
      const response = await axiosAPI.get("/users");
      console.log(response.data.data);
      const formattedData = response.data.data.map((user) => ({
        id: user._id, // Use _id as the id
        name: user.name,
        email: user.email,
        phone: user.phone,
        // Include other fields as needed
      }));
      console.log(formattedData);
      return formattedData;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (error) {
        // Handle the error if needed
      }
    }

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    console.log(id);
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        // Send a DELETE request to your API to delete the item by its ID
        const response = await axiosAPI.delete(`/users/${id}`);

        if (response.status === 200) {
          // deleted item from the DataGrid's data
          const updatedData = users.filter((item) => item.id !== id);
          setUsers(updatedData);
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
    { field: "id", headerName: "Registrar ID", flex: 2 },
    {
      field: "name",
      headerName: "Name",
      flex: 2,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 2,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 2,
    },

    {
      field: "delete",
      headerName: "Delete",
      sortable: false,
      width: 100,
      flex: 1.5,
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
    <>
      <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="Users" subtitle="List of Users for Future Reference" />

          <Box>
            <CButton
              title="Add new User"
              onClick={() => setOpenPopup(!openPopup)}>
              Add new User
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
            rows={users}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
          />
        </Box>
      </Box>

      <Popup title="Create User">
        <CreateUser openPopup={openPopup} setOpenPopup={setOpenPopup} />
      </Popup>
    </>
  );
};

export default AdminUsers;
