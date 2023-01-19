import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme.js";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Home /> */}
      {/* <Login /> */}
      <Register /> 
    </ThemeProvider>
  );
}

export default App;
