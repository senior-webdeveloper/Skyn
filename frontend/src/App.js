import React, { useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  useHistory,
} from "react-router-dom";

import ImageInput from "./views/imageInput";
import Recommendations from "./views/Recommendations";
import Form from "./views/Form";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// MUI
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function App() {
  const [open, setOpen] = useState(false);
  const [vertical, horizontal] = ["top", "center"];

  useEffect(() => {
    const interval = setInterval(() => {
      setOpen(true);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const theme = createTheme({
    typography: {
      fontFamily: "Jost",
    },
  });

  return (
    <>
      <Snackbar
        autoHideDuration={3000}
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        // message="Please make sure you take the photo with good litghting conditions!"
        key={vertical + horizontal}
      >
        <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
          Please take the photo with a plain background!
        </Alert>
      </Snackbar>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Switch>
            <Route path="/" element={<ImageInput />} />
            <Route path="/form" element={<Form />} />
            <Route path="/recs" element={<Recommendations />} />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
