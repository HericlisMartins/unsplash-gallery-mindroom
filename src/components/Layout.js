import React from "react";

import { Link as RouterLink, Outlet } from "react-router-dom";

import { AppBar, Link, Toolbar, Typography } from "@mui/material";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#90caf9", // Adjust primary color
    },
    secondary: {
      main: "#f48fb1", // Adjust secondary color
    },
    background: {
      default: "#303030", // Adjust default background color
      paper: "#424242", // Adjust paper/background color for components
    },
    text: {
      primary: "#ffffff", // Adjust primary text color
      secondary: "#bdbdbd", // Adjust secondary text color
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          minHeight: "100vh",
          minWidth: "100vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#424242", // Adjust paper/background color for components
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#ffffff", // White text color
        },
      },
    },
  },
});

const Header = () => {
  const theme = useTheme();

  const styles = {
    appBar: {
      background: theme.palette.background.default,
      color: theme.palette.text.primary,
    },
    title: {
      flexGrow: 1,
    },
    link: {
      marginLeft: theme.spacing(2),
      color: theme.palette.text.primary,
      textDecoration: "none",
    },
  };

  return (
    <AppBar position="static" sx={styles.appBar}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={styles.title}>
          ICTWEB441 - Q1.5 - Hericlis Unsplash Gallery
        </Typography>
        <Link
          component={RouterLink}
          to="/"
          color="inherit"
          variant="body2"
          sx={styles.link}
        >
          Home
        </Link>
        <Link
          component={RouterLink}
          to="/gallery"
          color="inherit"
          variant="body2"
          sx={styles.link}
        >
          Gallery
        </Link>
        <Link
          component={RouterLink}
          to="/contact"
          color="inherit"
          variant="body2"
          sx={styles.link}
        >
          Contact
        </Link>
      </Toolbar>
    </AppBar>
  );
};

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Outlet />
    </ThemeProvider>
  );
};

export default Layout;
