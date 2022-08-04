import React from "react";
import { makeStyles, useTheme } from '@mui/styles'
import { Typography } from "@mui/material";

type SectionTitleType = {
  title : string
}

const SectionTitle : React.FC<SectionTitleType> = ({
 title 
} : SectionTitleType ) => {
  const theme = useTheme()
  return(
    <div className="text-left my-4">
      <Typography 
        sx={{
          fontSize : 18,
          letterSpacing : -0.1,
          fontWeight : "bold",
          color : "rgb(78, 13, 55)"
        }}
      >
        {title}
      </Typography>
    </div>
  )
}

export default SectionTitle