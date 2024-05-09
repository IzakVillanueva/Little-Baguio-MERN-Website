import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import NewsPage from "scenes/newsPage";
import ServicePage from "scenes/servicePage";
import ResourcePage from "scenes/resourcePage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import ForumPage from "scenes/forumPage";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

    return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/home" />}
            />
            <Route
              path="/home"
              element={<HomePage />}
            />
            <Route 
              path="/login" 
              element={<LoginPage />} 
            />
            <Route 
              path="/news" 
              element={isAuth ? <NewsPage /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/forums" 
              element={isAuth ? <ForumPage /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/services" 
              element={<ServicePage />} 
            />
            <Route 
              path="/resources" 
              element={<ResourcePage />} 
            />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
