import React, { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { IoMedicalOutline } from "react-icons/io5";
import { HiOutlineBars3 } from "react-icons/hi2";
import { GiHospitalCross } from "react-icons/gi";
import {
  Box,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  List,
} from "@mui/material";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <GiHospitalCross />,
    },
    {
      text: "Services",
      icon: <IoMedicalOutline />,
    },
  ];

  return (
    <nav>
      <div className="navbar-links-container">
        <Link className="" to={"/"}>
          Home
        </Link>
        <Link className="" to={"/services"}>
          Services
        </Link>
      </div>

      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>

      <div>
        <Drawer
          open={openMenu}
          onClose={() => setOpenMenu(false)}
          anchor="right"
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}
          >
            <List>
              {menuOptions.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
