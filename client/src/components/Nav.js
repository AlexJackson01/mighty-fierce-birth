import * as React from 'react'
import '../App.css'
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Logo from '../assets/images/mighty-logo.png'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import { NavLink } from 'react-router-dom'
import ScrollTop from './ScrollTop'

const drawerWidth = 240
const navItems = ['Home', 'Courses', 'About', 'Contact']

function Nav (props) {
  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState)
  }

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
        backgroundColor: '#FCFBF6',
        background: '100vh'
      }}
    >
      <Typography variant='h6' sx={{ my: 2, paddingTop: 5 }}>
        <NavLink to='/'>
          <img src={Logo} className='logo' alt='Mighty Fierce Birth Logo logo' />
        </NavLink>
      </Typography>
      <Divider />
      <List>
        {navItems.map(item => (
          <ListItem
            key={item}
            disablePadding
            sx={{ textAlign: 'center', justifyContent: 'center' }}
          >
            <NavLink
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              style={{
                textDecoration: 'none',
                textTransform: 'none',
                color: 'black',
                fontFamily: 'Cutive',
                fontSize: 20
              }}
            >
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
        <IconButton
          href='https://www.instagram.com/mightyfiercebirth/'
          target='_blank'
        >
          <InstagramIcon fontSize='large' sx={{ color: 'black' }} />
        </IconButton>
        <IconButton href='https://www.facebook.com/mightyfiercebirth/' target='_blank'>
          <FacebookIcon fontSize='large' sx={{ color: 'black' }} />
        </IconButton>
      </List>
    </Box>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        sx={{
          position: 'sticky',
          backgroundColor: '#FABFE2',
          color: 'black',
          height: 150,
          justifyContent: 'center'
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon fontSize='large' />
          </IconButton>
          <Typography sx={{ display: { md: 'none' }, paddingRight: 5 }}>
            <NavLink to='/'>
              <img src={Logo} className='logo' alt='Pesky Kidd logo' />
            </NavLink>
          </Typography>
          <Typography sx={{ display: { md: 'none' } }}>
            {/* <h1 className='nav-heading'>Pesky Kidd</h1> */}
          </Typography>
          <Typography
            variant='h6'
            component='div'
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'none', md: 'block' }
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center'
              }}
            >
              <NavLink to='/'>
                <img src={Logo} className='logo' alt='Mighty Fierce Birth logo' />
              </NavLink>
            </Box>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
            {navItems.map(item => (
              <Button key={item}>
                <NavLink
                  to={item === "Home" ? "/" : `/${item}`}
                  style={{
                    textDecoration: 'none',
                    textTransform: 'none',
                    color: 'black',
                    fontFamily: 'League Spartan',
                    fontSize: 22,
                  }}
                >
                  {item}
                </NavLink>
              </Button>
            ))}
            <IconButton
              href='https://www.instagram.com/mightyfiercebirth/'
              target='_blank'
            >
              <InstagramIcon fontSize='large' sx={{ color: 'black' }} />
            </IconButton>
            <IconButton
              href='https://www.facebook.com/mightyfiercebirth/'
              target='_blank'
            >
              <FacebookIcon fontSize='large' sx={{ color: 'black' }} />
            </IconButton>
  
          </Box>
        </Toolbar>
        <ScrollTop />
      </AppBar>
      <Box component='nav'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>
      </Box>

    </Box>
  )
}

Nav.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
}

export default Nav
