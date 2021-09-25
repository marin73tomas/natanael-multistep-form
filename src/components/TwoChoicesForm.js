import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";

const TwoChoicesForm = ({
  currentStepNumber,
  firstChoiceData,
  secondChoiceData,
  classes
}) => {
  const dispatch = useDispatch();
  const handleClick = (event, value) => {
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
      payload: { value, stepNumber: currentStepNumber + 1 },
    });
  };

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
            className="step-card"
            sx={{ maxWidth: 345 }}
            onClick={handleClick.bind(firstChoiceData.value)}
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
            className="step-card"
            sx={{ maxWidth: 345 }}
            onClick={handleClick.bind(secondChoiceData.value)}
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
