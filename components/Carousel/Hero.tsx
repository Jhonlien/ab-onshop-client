import React from "react";
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from "@mui/material";
import { Card, CardMedia, Box, Typography } from "@mui/material";

type HeroProps = {
  title : string
  desc : string
  imageUrl : string
}

const Hero : React.FC<HeroProps> = ({
  title,
  desc,
  imageUrl
}) => {
  return (
    <div className="flex justify-center my-8">
      <div className="md:w-1/2 px-4 md:px-0">
        <Card className="h-48 rounded-2xl" elevation={0}>
          <Box sx={{ position: 'relative', borderRadius : 10 }}>
            <CardMedia
              component="img"
              image={imageUrl}
              sx={{}}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                height: '100%',
                width: '100%',
                bgcolor: 'rgba(255, 255, 255, 0.80)',
                color: 'white',
                paddingY: '4em',
                paddingX: 5,
                backdropFilter:"blur(2px)"
              }}
            >
              <Typography variant="h5" color={"primary"}  sx={{
                fontSize: 20,
                fontWeight: 'bold'
              }}>{title}</Typography>
              <Typography variant="h6" color={"primary"} sx={{
                fontSize: 16,
                // fontWeight: "light"
              }}>{desc} </Typography>

            </Box>
          </Box>
        </Card>
      </div>
    </div>
  )
}
export default Hero