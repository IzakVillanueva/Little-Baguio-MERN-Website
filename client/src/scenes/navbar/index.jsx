import { useState } from "react";
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
  InputLabel,
} from "@mui/material";
import {
  Search,
  Message,
  DarkMode,
  LightMode,
  Notifications,
  Help,
  Menu,
  Close,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "state";
import { useNavigate } from "react-router-dom";
import FlexBetween from "components/FlexBetween";
import './nav.css';

const Navbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false); // navbar for mobile
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)"); // determine if screen size are mobile

  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const alt = theme.palette.background.alt;
  let isLoggedOut = true;
  let username = '';

  if (user !== null && user !== undefined) {
    username = `${user.username}`; // Assign user.username if it's not null or undefined
    isLoggedOut = false
  } else {
    isLoggedOut = true;
  }

  return (
    <FlexBetween padding="1rem 6% 1rem 2%" backgroundColor={alt} >
      <FlexBetween gap="5rem">
        <div style={{ display: 'flex'}}>
          {/* LOGO */}
          <FlexBetween gap="1.75rem">
          <div style={{ maxHeight:'50px', height: '100%'}}>
            <button onClick={() => navigate("/home")} style={{ border: 'none', background: 'none', cursor: 'pointer', alignSelf: 'center' }}>
                <img src="../../../../assets/LB Logo (Dark).png" alt=""
                style={{ maxWidth: '100%', maxHeight: '50px', width: 'auto', height: 'auto' }}
                />
            </button>
          </div>
          </FlexBetween>
        </div>
        {isNonMobileScreens && (
          <FlexBetween>
          <div style={{ display: 'flex'}}>
            {/* Home */}
            <div className="homeBut" style={{ height: '50%' }}>
              <button onClick={() => navigate("/home")} style={{ border: 'none', background: 'none', cursor: 'pointer'}}>
                  <h2>Home</h2>
              </button>
            </div>
            {/* Community */}
            <div className="commBut" style={{ height: '50%' }}>
              <button onClick={() => navigate("/forums")} style={{ border: 'none', background: 'none', cursor: 'pointer'}}>
                  <h2>Community</h2>
              </button>
            </div>
            {/* Services */}
            <FormControl fullWidth size="normal">
                <InputLabel id="services-text"
                  sx={{
                    fontFamily: "Montserrat",
                    fontSize: "1.41em",
                  }}>Services</InputLabel>
                <Select 
                  labelId="services-text" 
                  value="Services"
                  sx={{
                    m:"auto",
                    width: "200px",
                    fontFamily: "Montserrat",
                    fontSize: "1.41em",
                    "& .MuiSelect-select:focus": {
                      backgroundColor: neutralLight,
                    },
                  }}
                  input={<InputBase />}
                >
                  <MenuItem value="Services" onClick={() => navigate("/services")}>
                    <Typography>Services</Typography>
                  </MenuItem>
                  <MenuItem value="News" onClick={() => navigate("/news")}>
                    <Typography>News</Typography>
                  </MenuItem>
                  <MenuItem value="Resources" onClick={() => navigate("/resources")}>
                    <Typography>Resources</Typography>
                  </MenuItem>
                </Select>
              </FormControl>
          </div>
          </FlexBetween>
        )}
        
      </FlexBetween>
      {/* DESKTOP NAV */}
      {isNonMobileScreens ? (
        <FlexBetween gap="2rem">
          {isLoggedOut ? (
            <div style={{ height: '50%' }}>
              <button className="loginBut" onClick={() => navigate("/login")} style={{cursor: 'pointer'}}>
                  <h3>Login</h3>
              </button>
            </div>
          ) : (
            
            <FormControl variant="standard" value={username}> {/* DROPDOWN SHOW USER */}
              <Select
                value={username}
                sx={{
                  backgroundColor: neutralLight,
                  width: "150px",
                  borderRadius: "0.25rem",
                  p: "0.25rem 1rem",
                  "& .MuiSvgIcon-root": {
                    pr: "0.25rem",
                    width: "3rem",
                  },
                  "& .MuiSelect-select:focus": {
                    backgroundColor: neutralLight,
                  },
                }}
                input={<InputBase />}
              >
                <MenuItem value={username}>
                  <Typography>{username}</Typography>
                </MenuItem>
                <MenuItem onClick={() => dispatch(setLogout())}>Log Out</MenuItem>
              </Select>
            </FormControl>
          )}
          
        </FlexBetween>
      ) : (
        <IconButton
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
        >
          <Menu />
        </IconButton>
      )}

      {/* MOBILE NAV */}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100%"
          zIndex="10"
          maxWidth="500px"
          minWidth="300px"
          backgroundColor={background}
        >
          {/* CLOSE ICON */}
          <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <Close />
            </IconButton>
          </Box>

          {/* MENU ITEMS */}
          <FlexBetween
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="3rem"
          >
            {/* <IconButton
              onClick={() => dispatch(setMode())}
              sx={{ fontSize: "25px" }}
            >
              {theme.palette.mode === "dark" ? (
                <DarkMode sx={{ fontSize: "25px" }} />
              ) : (
                <LightMode sx={{ color: dark, fontSize: "25px" }} />
              )}
            </IconButton>
            <Message sx={{ fontSize: "25px" }} />
            <Notifications sx={{ fontSize: "25px" }} />
            <Help sx={{ fontSize: "25px" }} /> */}
            <Typography onClick={() => navigate("/home")} style={{cursor: 'pointer'}}>Home</Typography>
            <Typography onClick={() => navigate("/news")} style={{cursor: 'pointer'}}>Community</Typography>
            <Typography onClick={() => navigate("/home")}style={{cursor: 'pointer'}}>Services</Typography>
            <FormControl variant="standard" value={username}>
              <Select
                value={username}
                sx={{
                  backgroundColor: neutralLight,
                  width: "150px",
                  borderRadius: "0.25rem",
                  p: "0.25rem 1rem",
                  "& .MuiSvgIcon-root": {
                    pr: "0.25rem",
                    width: "3rem",
                  },
                  "& .MuiSelect-select:focus": {
                    backgroundColor: neutralLight,
                  },
                }}
                input={<InputBase />}
              >
                <MenuItem value={username}>
                  <Typography>{username}</Typography>
                </MenuItem>
                <MenuItem onClick={() => dispatch(setLogout())}>
                  Log Out
                </MenuItem>
              </Select>
            </FormControl>
          </FlexBetween>
        </Box>
      )}
    </FlexBetween>
  );
};

export default Navbar;