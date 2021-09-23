import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Menu,
  MenuItem,
  Box,
} from '@mui/material/';
import {
  Description,
  AccountCircle,
  RecentActors,
  Payment,
  LiveHelp,
  QuestionAnswer,
} from '@mui/icons-material/';

const drawerWidth = 240;

type Props = {
  children: JSX.Element;
};

export const AppMenu = ({ children }: Props) => {
  const history = useHistory();
  const location = useLocation();
  const auth = true;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const mainMenuItems = [
    {
      name: 'My Applcations',
      icon: <Description />,
      path: '/',
    },
    {
      name: 'Applcants',
      icon: <RecentActors />,
      path: '/applicants',
    },
    {
      name: 'Payments',
      icon: <Payment />,
      path: '/payments',
    },
  ];

  const subMenuItems = [
    {
      name: 'Support',
      icon: <QuestionAnswer />,
      path: '/support',
    },
    {
      name: 'FAQ',
      icon: <LiveHelp />,
      path: '/faq',
    },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: drawerWidth,
          background: '#FFFCFC',
          color: '#003C2D',
          display: 'flex',
          alignItems: 'flex-end',
        }}>
        <Toolbar>
          {auth && (
            <Box sx={{ display: 'flex' }}>
              <Typography
                sx={{
                  mt: 1.8,
                  userSelect: 'none',
                }}>
                Profile
              </Typography>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit">
                <AccountCircle fontSize="large" />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}>
                <MenuItem onClick={handleClose}>Profile settings</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Log out</MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left">
        <Box
          sx={{
            p: 2,
            textAlign: 'center',
            userSelect: 'none',
          }}>
          <Typography sx={{ fontWeight: 600 }} variant="h5">
            Visas
            <Box sx={{ color: '#FF9B33', fontWeight: 600 }} component="span">
              Easy
            </Box>
          </Typography>
        </Box>
        <Divider />
        <List>
          {mainMenuItems.map((item) => (
            <ListItem
              button
              key={item.name}
              onClick={() => history.push(item.path)}
              sx={
                location.pathname === item.path
                  ? { background: '#f4f4f4' }
                  : null
              }>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {subMenuItems.map((item) => (
            <ListItem
              button
              key={item.name}
              onClick={() => history.push(item.path)}
              sx={
                location.pathname === item.path
                  ? { background: '#f4f4f4' }
                  : null
              }>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        sx={{
          flexGrow: 1,
          mt: 10,
          p: 3,
        }}>
        {children}
      </Box>
    </Box>
  );
};
