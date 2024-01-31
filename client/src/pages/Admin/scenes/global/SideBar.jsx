import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
// import { NavLink } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import profileImg from "../../../../assets/images/UserProfile.png";
const Item = ({ title, to, icon, selected, setSelected, navigate }) => {
  function showclicked() {
    setSelected(title);
    navigate(to);
    console.log("clicked");
  }
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      // onClick={() => setSelected(title)}
      onClick={showclicked}
      icon={icon}>
      <Typography>{title}</Typography>
      {/* <NavLink to={to} /> */}
    </MenuItem>
  );
};
const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      className="sidebar"
      sx={{
        "& .pro-sidebar-container": {
          // backgroundColor: `${colors.primary[400]} !important`,
        },
        "& .pro-sidebar-inner": {
          backgroundColor: `${colors.primary[400]} !important`,
        },

        // "& .pro-sidebar-layout": {
        //   overflowX: "hidden !important",
        // },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          // color: "#ad1aaf !important",
          color: "#ffffff !important",
          backgroundColor: colors.greenAccent[500],
          borderRadius: "50px 0 0 50px",
        },
        "& .pro-menu-item.active": {
          color: "#ffffff !important",
          backgroundColor: colors.greenAccent[500],
          borderRadius: "50px 0 0 50px",
        },
      }}>
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <Menu onClick={() => setIsCollapsed(!isCollapsed)}>
            {!isCollapsed ? (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px">
                <Typography variant="h3" color={colors.grey[100]}>
                  SOULCLUB
                </Typography>
                <IconButton
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  style={{
                    color: colors.greenAccent[400],
                  }}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            ) : (
              <Box sx={{ ml: "15px" }}>
                <IconButton
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  style={{
                    margin: "10px 0 20px 0",
                    fontSize: "40px",
                    color: colors.greenAccent[400],
                  }}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </Menu>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user / Logo"
                  width="100px"
                  height="100px"
                  src={profileImg}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}>
                  Usama
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  SoulClub Admin
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/admin"
              navigate={navigate}
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}>
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/admin/team"
              navigate={navigate}
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Users Information"
              to="/admin/adminusers"
              navigate={navigate}
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Collab Requests"
              to="/admin/admincollaboartion"
              navigate={navigate}
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Projects"
              to="/admin/adminprojects"
              navigate={navigate}
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            {/* <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}>
              Pages
            </Typography>
            <Item
              title="Collab Form"
              to="/admin/collabform"
              navigate={navigate}
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/admin/faq"
              navigate={navigate}
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}>
              Charts
            </Typography>
            <Item
              title="Line Chart"
              to="/admin/line"
              navigate={navigate}
              icon={<BarChartOutlinedIcon />}
              // icon={<L />}
              selected={selected}
              setSelected={setSelected}
            />
            {/* <Item
              title="Pie Chart"
              to="/admin/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/admin/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/admin/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default SideBar;
