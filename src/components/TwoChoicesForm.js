import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";

const TwoChoicesForm = ({
  currentStepNumber,
  firstChoiceData,
  secondChoiceData,
  classes
}) => {

  const [currentValue, setCurrentValue] = React.useState(undefined)
  const dispatch = useDispatch();
  const values = useSelector((state) => state.values);
  console.log(values, values.has(secondChoiceData.value));
  if (values.has(firstChoiceData.value) || values.has(secondChoiceData.value))
  {
     dispatch({
       type: "allowStep",
       payload: { stepNumber: currentStepNumber + 1 },
     });
  }
  const handleClick = (event) => {
    //console.log(event);
    const target = event.target;

    document
      .querySelectorAll(".step-card")
      .forEach((e) => e.closest(".MuiGrid-item").classList.remove("active"));

    // add active class to the grid item clicked
    !target.classList.contains("MuiGrid-item")
      ? target.closest(".MuiGrid-item").classList.add("active")
      : target.classList.add("active");

    dispatch({
      type: "allowStep",
      payload: {  stepNumber: currentStepNumber + 1 },
    });
    dispatch({
      type: "addValues",
      payload: {
        newValue: currentValue,
        oldValue:
          currentValue == firstChoiceData.value
            ? secondChoiceData.value
            : firstChoiceData.value,
      },
    });
  };
  console.log(values, values.has(firstChoiceData.value));
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item md={6} className={classes.choiceItem}>
          <Card
            className={`step-card ${
              values.has(firstChoiceData.value) ? "active" : ""
            }`}
            sx={{ maxWidth: 345 }}
            onClick={(e) => {
              setCurrentValue(firstChoiceData.value);
              handleClick(e);
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="placeholder-image.jpg"
                alt="placeholder"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {firstChoiceData.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {firstChoiceData.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item md={6} className={classes.choiceItem}>
          {" "}
          <Card
            className={`step-card ${
              values.has(secondChoiceData.value) && "active"
            }`}
            sx={{ maxWidth: 345 }}
            onClick={(e) => {
              setCurrentValue(secondChoiceData.value);
              handleClick(e);
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="placeholder-image.jpg"
                alt="placeholder"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {secondChoiceData.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {secondChoiceData.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TwoChoicesForm;
