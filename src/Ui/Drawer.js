import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Dashboard from "../Dashboard/Dashboard";
import "./sidebar.css";
import {
  FaMemory,
  FaMoneyBillAlt,
  FaCreditCard,
  FaTabletAlt,
  FaStackExchange,
  FaEllipsisV,
  FaBell,
  FaHouseUser,
  FaWallet,
} from "react-icons/fa";
import { Purchase } from "../Dashboard/Purchase";
import Graph from "../Dashboard/Graph";
import { Link, useNavigate } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    maxWidth: "100%",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      background: "white",
      color: "black",
    },
  },

  name: {
    fontSize: theme.typography.pxToRem(17),
    marginLeft: "-3px",
  },

  icon: {
    color: "#fff",
  },

  menuButton: {
    marginRight: theme.spacing(2),
    backgroundColor: "#fff",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    background: "#05386b",
    color: "#fff",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    background: "#f5f5f5",
    width: "100%",
    overflow: "scroll",
    height: "100vh",
  },
}));

function ResponsiveDrawer(props) {
  const navigate = useNavigate();
  const classes = useStyles();
  const theme = useTheme();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const logout = () => {
    localStorage.setItem("token", "");

    localStorage.setItem("name", "");
    localStorage.setItem("id", "");
    localStorage.setItem("isAdmin", "");
    localStorage.setItem("email", "");
    localStorage.setItem("phoneNumber", "");
    localStorage.setItem("AccountNumber", "");
    localStorage.setItem("AccountBalance", "");
    localStorage.setItem("userRef", "");

    navigate("/login");
  };
  const drawer = (
    <div>
      <div className="div-dol">
        {" "}
        <div>{localStorage.getItem("name")}</div>
        <div>{localStorage.getItem("email")}</div>
        <div className="border-busi">Business user</div>
      </div>
      <Toolbar />

      <div className="div-clads">
        <Divider />
        <div className="div-line">
          <div>
            <FaWallet />
            Dashboard
          </div>
          <div>
            <FaMemory />
            <span>All Transaction</span>
          </div>
          <div>
            <FaMoneyBillAlt />
            Deposits
          </div>
          <div>
            {" "}
            <FaCreditCard />
            Withdrawals
          </div>
          <div>
            <FaTabletAlt />
            Airtime & Data
          </div>
          <div>
            <FaStackExchange />
            Bill Payment
          </div>
          <div onClick={logout}>
            <FaHouseUser />
            Logout
          </div>
        </div>
      </div>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "whitesmoke",
          width: { sm: `calc(100% - ${drawerWidth}px)` },

          ml: { sm: `${drawerWidth}px` },
        }}
        // className={classes.appBar}
        // sx={{
        //   width: { sm: `calc(100% - ${drawerWidth}px)` },

        //   ml: { sm: `${drawerWidth}px` },
        // }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon style={{ color: "#05386b" }} />
          </IconButton>
          <Link style={{ textDecoration: "none" }} to="/">
            {" "}
            <Typography className="rose" variant="h6" noWrap component="div">
              RoseBank
            </Typography>
          </Link>
          <FaBell className="ty-icon" />

          <FaEllipsisV className="t-icon" />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Dashboard />
        <Purchase />
        <br />
        <Graph />
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
