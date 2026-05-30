import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import logoFam from "../assets/icons/logoFam.png"
import { Link, NavLink } from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navItems = [
    { label: "Homepage", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Products", path: "/products" },
    { label: "Contact Us", path: "/contact" },
  ];

  const drawerItems = [
    { label: "Homepage", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Products", path: "/products" },
    { label: "Contact Us", path: "/contact" },
  ];

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#fff",
        color: "#000",
        px: { xs: 2, sm: 5, md: 10, lg: 15 },
        pt: 1.5,
        pb: 0.75,
      }}
    >
      <Toolbar 
        disableGutters 
        sx={{ 
          display: "flex", 
          justifyContent: { xs: "space-between", md: "space-between" },
          gap: { xs: 2, md: 0 }
        }}
      >
        <Box 
          component={Link} 
          to="/" 
          sx={{ display: "flex", alignItems: "center", gap: 1, textDecoration: "none" }}
        >
          <img src={logoFam} alt="logo" style={{ width: 150 }} />
        </Box>

        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: { md: 4, lg: 8 } }}>
          {navItems.slice(0, 2).map((item) => (
            <Typography 
              key={item.label}
              component={NavLink} 
              to={item.path} 
              sx={{ 
                color: "#000", 
                textDecoration: "none",
                "&:hover": { color: "#e91e63" },
                "&.active": { color: "#e91e63" }
              }}
            >
              {item.label}
            </Typography>
          ))}

          {/* Products Dropdown */}
          {/* <Box>
            <Button
              onClick={handleOpen}
              endIcon={<KeyboardArrowDownIcon />}
              sx={{
                color: "#000",
                textTransform: "none",
                "&:hover": {
                  color: "#e91e63",
                },
              }}
            >
              Products
            </Button>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Product 1</MenuItem>
              <MenuItem onClick={handleClose}>Product 2</MenuItem>
            </Menu>
          </Box> */}

          {navItems.slice(2).map((item) => (
            <Typography 
              key={item.label}
              component={NavLink} 
              to={item.path} 
              sx={{ 
                color: "#000", 
                textDecoration: "none",
                "&:hover": { color: "#e91e63" },
                "&.active": { color: "#e91e63" }
              }}
            >
              {item.label}
            </Typography>
          ))}

          <Button
            disableElevation
            variant="contained"
            sx={{
              backgroundColor: "#e91e63",
              borderRadius: "30px",
              px: 2.5,
              py: 1.25,
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#e91e63",
              },
            }}
          >
            Connect With Us
          </Button>
        </Box>
        
        <IconButton
          color="inherit"
          aria-label={Boolean(mobileMoreAnchorEl) ? "close menu" : "open menu"}
          onClick={Boolean(mobileMoreAnchorEl) ? handleMobileMenuClose : handleMobileMenuOpen}
          sx={{ display: { md: 'none' }, color: "#e91e63" }}
        >
          {Boolean(mobileMoreAnchorEl) ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Toolbar>

      {/* Mobile Dropdown Menu */}
      <Menu
        elevation={0}
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={Boolean(mobileMoreAnchorEl)}
        onClose={handleMobileMenuClose}
        sx={{ 
          display: { xs: 'block', md: 'none' },
          '& .MuiPaper-root': {
            width: '100%',
            maxWidth: '100%',
            left: '0 !important',
            top: '113px !important',
            borderRadius: 0,
          }
        }}
      >
        {drawerItems.map((item) => (
          <MenuItem 
            key={item.label} 
            onClick={handleMobileMenuClose}
            component={NavLink}
            to={item.path}
            sx={{ 
              color: "#000",
              width: "100%",
              justifyContent: "center",
              py: 1.5,
              "&.active": { color: "#e91e63" }
            }}
          >
            {item.label}
          </MenuItem>
        ))}
        <MenuItem onClick={handleMobileMenuClose} sx={{ justifyContent: "center" }}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#e91e63",
              borderRadius: "30px",
              textTransform: "none",
              "&:hover": { backgroundColor: "#e91e63" },
            }}
          >
            Connect With Us
          </Button>
        </MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
