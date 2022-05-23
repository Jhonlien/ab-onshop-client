import React from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Button } from "@mui/material";
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import { useTheme } from "@mui/styles";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
type ProductCardProps = {
  name: string
  img_src: string
}


const ProductCard: React.FC<ProductCardProps> = ({
  name,
  img_src
}) => {

  const theme = useTheme()
  return (
    <Card sx={{ maxWidth: 345, bgcolor: 'background.default' }}>
      <CardHeader
        title={
          <Typography variant="h6" color={theme.palette.primary.main} sx={{
            marginY: 1,
            fontSize: 16,
            fontWeight: "bold",
          }}>
            {name}
          </Typography>
        }
      // subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={img_src}
        alt="Paella dish"
      />
      <CardContent>
      <Typography variant="h6" color={theme.palette.primary.main}  sx={{
          fontSize: 16,
          fontWeight: "bold",
        }}>
          Rp. 100.000
        </Typography>
        <Typography variant="h6" color={theme.palette.primary.main}  sx={{
          fontSize: 14,
          fontWeight: "light",
        }}>
          Terjual 16 | 4.5
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ marginY: 1, marginX: 1 }} className={"space-x-2"}>
        <Button
          variant="outlined"
          size="small"
          disableElevation={true}
          sx={{
            border: `2px solid ${theme.palette.color.buttonBorderActive} `,
            borderRadius: '10px',
            fontSize: '0.8em',
            backgroundColor: theme.palette.color.buttonBorderActive + "!important",
            color: "#fff",
            fontWeight: "bolder",
            paddingX: 4,
            paddingY: 0.6,
            textTransform: 'capitalize',
            ":hover": {
              border: `2px solid ${theme.palette.color.buttonBorderActive} `,
            }
          }}
        >
          Beli
        </Button>

        <Button
          variant="outlined"
          size="small"
          disableElevation={true}
          sx={{
            border: `2px solid ${theme.palette.color.buttonBorder} `,
            borderRadius: '10px',
            fontSize: '0.8em',
            fontWeight: "bolder",
            paddingX: 4,
            paddingY: 0.6,
            textTransform: 'capitalize',
            ":hover": {
              border: `2px solid ${theme.palette.color.buttonBorderActive} `,
            }
          }}
        >
          Kerangjang
        </Button>

        <Button
          variant="outlined"
          size="small"
          disableElevation={true}
          sx={{
            border: `2px solid ${theme.palette.color.buttonBorder} `,
            borderRadius: '10px',
            fontSize: '0.8em',
            fontWeight: "bolder",
            textTransform: 'capitalize',
            ":hover": {
              border: `2px solid ${theme.palette.color.buttonBorderActive} `,
            }
          }}
        >
          <FavoriteBorderIcon />
        </Button>
      </CardActions>
    </Card>
  )
}

export default ProductCard