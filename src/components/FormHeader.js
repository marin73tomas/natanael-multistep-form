import React from 'react'
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function FormHeader({classes, title}) {
    
     return (
      <Box component="div" className={classes.formHeader}>
        <Typography variant="h3" component="h3" className={classes.h3}>
          {title}
        </Typography>
      </Box>
     )


}
