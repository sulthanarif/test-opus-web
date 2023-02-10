import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme.js";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
