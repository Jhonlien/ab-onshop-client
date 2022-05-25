import React from "react";
import { Card, CardMedia, Box, Typography } from "@mui/material";

const CategoryCard: React.FC = () => {
  return (
    <Card>
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="200"
          image="https://s3-ap-southeast-1.amazonaws.com/tokotalklive/images/products/146ADED0-9D6C-45CB-B76B-AE1CACD1A19F_1640402638690.jpeg"
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: '100%',
            width: '100%',
            bgcolor: 'rgba(0, 0, 0, 0.54)',
            color: 'white',
            padding: '10px',
            ":hover" : {
              bgcolor : 'transparent',
              transitionDuration: '0.3s',
              cursor : 'pointer'
            }
          }}
        >
          <Typography variant="h5">Lizard</Typography>
        </Box>
      </Box>
    </Card>
  )
}

export default CategoryCard