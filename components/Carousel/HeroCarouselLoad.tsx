import React from "react";
import Skeleton from '@mui/material/Skeleton';

const HeroCarouselLoad : React.FC = () => {
  return (
    <div className="flex flex-row justify-center">
      <Skeleton animation="wave" 
        className="md:w-1/2 w-full h-full"
        height={400}  
        sx={{
          borderRadius: '10px'
        }}
      />
    </div>
  )
}

export default HeroCarouselLoad