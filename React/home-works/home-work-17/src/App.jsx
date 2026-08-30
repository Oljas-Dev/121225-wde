import { useState } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#1976d2" },
    background: { default: "#ffffff" },
    text: { primary: "#000000" },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#90caf9" },
    background: { default: "#121212" },
    text: { primary: "#ffffff" },
  },
});

const StyledButton = styled("button")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  border: "none",
  borderRadius: "8px",
  padding: "12px 24px",
  fontSize: "16px",
  cursor: "pointer",
  "&:hover": { opacity: 0.85 },
}));

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  const handleToggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      {" "}
      <CssBaseline />{" "}
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {" "}
        <Typography variant="h3">
          {" "}
          {isDarkMode ? "Тёмная тема" : "Светлая тема"}{" "}
        </Typography>{" "}
        <Typography variant="body1">
          {" "}
          Текущая тема: {isDarkMode ? "Dark" : "Light"}{" "}
        </Typography>{" "}
        <StyledButton onClick={handleToggleTheme}>
          {" "}
          Переключить тему{" "}
        </StyledButton>{" "}
      </div>{" "}
    </ThemeProvider>
  );
}
export default App;
