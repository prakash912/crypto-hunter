import { AppBar, MenuItem, Select, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CryptoState } from "../CryptoContext";
import AuthModal from "./Authentication/AuthModal";
import UserSidebar from "./Authentication/UserSidebar";

const useStyles = makeStyles({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
});
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});


const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { currency, setCurrency ,user } = CryptoState();
  
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              onClick={() => navigate("/")}
              sx={{ fontWeight: "bold" }}
              className={classes.title}
              variant="h6"
            >
              Crypto Hunter
            </Typography>
            <Select
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              style={{ width: 100, height: 40, marginRight: 15 }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
            {user ? <UserSidebar /> : <AuthModal />}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
