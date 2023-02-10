import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Logout from "@mui/icons-material/Logout";
import Tooltip from "@mui/material/Tooltip";

// import component
import ProfileCard from "./ProfileCard";

export default function Profile() {
  const [anchor, setAnchor] = useState(null);
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const tokenAuth = localStorage.getItem("token");
  const open = Boolean(anchor);
  const push = useNavigate()

  // click profile
  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  };

  // close profile
  const handleClose = () => {
    setAnchor(null);
  };

  // logout
  const logOut = () => {
    localStorage.removeItem("token");
    push("/login");
  }

  // show profiles
  const showProfiles = async () => {
    try {
      const response = await axios.get("https://backend-opus.vercel.app/profile", {
        headers: {
          token: `${tokenAuth}`
        }
      });
      setUser(response.data.message.username);
      setEmail(response.data.message.email);

      // let userAvatar = response.data.message;
      // for (let x in userAvatar) {
      //   if (userAvatar[x] == response.data.message.username) {
      //     let a = userAvatar[x];
      //     for (let y of a) {
            
      //     }
      //   }
      // }
      
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    showProfiles()
  })

  return (
    <Box>
      <Grid container alignItems={"center"}>
        <Grid item>
          <Typography>Hi, {user}</Typography>
        </Grid>
        <Grid item>
          <Tooltip title="account setting">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 1 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar sx={{ width: "45px", height: "45px" }}>{user.toLocaleUpperCase().charAt(0)}</Avatar>
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
      <Menu
        anchorEl={anchor}
        id="menu-account"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "vishoverMenuible",
            filter: "drop-shadow(0px 2px 8px #000000)",
            mt: 4
          }
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem sx={{pb: 10}}>
          <ProfileCard name={user} email={email} avatarIcon={user.toLocaleUpperCase().charAt(0)} />
        </MenuItem>
        <MenuItem onClick={logOut}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
}
