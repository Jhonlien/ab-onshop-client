import React from "react";
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from "@mui/material";


var items = [
  {
    src: "https://images.tokopedia.net/img/cache/1208/NsjrJu/2022/5/20/ef863422-e345-4c7a-98e1-258d266d403a.jpg.webp?ect=3g",
  },
  {
    src: "https://images.tokopedia.net/img/NsjrJu/2020/9/25/ea701ee6-f36b-473d-b429-4d2a1da0713d.jpg?ect=3g",
  }
]

const HeroCarousel = () => {
  return (
    <div className="flex justify-center">
      <Carousel
        className="mx-4 md:w-1/2 w-full self-center"
        height={300}
        sx={{
          marginY: 4,
          borderRadius: '30px'
        }}

        navButtonsAlwaysInvisible
        indicators={false}
      >
        {
          items.map((item, i) => <Item key={i} item={item} />)
        }
      </Carousel>
    </div>
  )
}

const Item = (props: any) => {
  return (
    <Paper sx={{ height: '300px' }} >
      <img
        src={props.item.src}
        alt=""
        className="h-full object-fill"
      />
    </Paper>
  )
}

export default HeroCarousel