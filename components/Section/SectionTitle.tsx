import React from "react";
import { makeStyles, useTheme } from '@mui/styles'
import { Typography } from "@mui/material";

const SectionTitle : React.FC = () => {
  const theme = useTheme()
  return(
    <div className="text-left my-4">
      <Typography 
        sx={{
          fontSize : 18,
          letterSpacing : 0.7,
          fontWeight : "bold",
          color : theme.palette.primary.main
        }}
      >
        Produk Terbaru
      </Typography>
    </div>
  )
}

export default SectionTitle