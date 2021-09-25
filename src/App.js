import React from "react";
import styles from "./styles";
import CssBaseline from "@mui/material/CssBaseline";

import Container from "@mui/material/Container";
import MultiStepForm from "./components/MultiStepForm";
import { makeStyles } from "@mui/styles";
import { createContext } from "react";


const Context = createContext("Default Value");
const useStyles = makeStyles(styles);



const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
        <MultiStepForm classes={classes} />
    </div>
  );
};
export default App;
