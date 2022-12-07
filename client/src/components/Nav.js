import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logo from '../assets/images/mighty-logo.png';
import { alpha, styled } from '@mui/material/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const NavButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  fontFamily: "League Spartan",
  // fontWeight: 600,
  fontSize: "20px",
  paddingRight: '10px',
  '&:hover': {
    backgroundColor: "#FABFE2",
    textDecoration: "underline"
 },
}));

const drawerWidth = 240;
const navItems = ['Courses', 'About', 'Testimonials', 'Contact'];

function Nav(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img src={Logo} alt="Mighty Fierce logo" className="logo" />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem sx={{ textAlign: "center", justifyContent: "center" }}>
            <IconButton href="https://www.instagram.com/mightyfiercebirth/" target="_blank">
              <InstagramIcon fontSize="large" sx={{ color: "black" }} />
            </IconButton>
            <IconButton href="https://www.instagram.com/mightyfiercebirth/" target="_blank">
              <FacebookIcon fontSize="large" sx={{ color: "black" }} />
            </IconButton>
        </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" sx={{ backgroundColor: "#FABFE2", color: "black" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <img src={Logo} alt="Mighty Fierce logo" className="logo" />
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <NavButton key={item} sx={{ color: 'black' }}>
                {item}
              </NavButton>
            ))}
            <IconButton href="https://www.instagram.com/mightyfiercebirth/" target="_blank">
              <InstagramIcon fontSize="large" sx={{ color: "black" }} />
            </IconButton>
            <IconButton href="https://www.instagram.com/mightyfiercebirth/" target="_blank">
              <FacebookIcon fontSize="large" sx={{ color: "black" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Nav.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Nav;
