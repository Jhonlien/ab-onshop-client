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
import Chip from '@mui/material/Chip';


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
    <Card sx={{ 
        maxWidth: 345, 
        bgcolor: 'background.default', 
        borderRadius : '10px', 
      }}>
      <CardHeader
        title={
          <>
            <Chip label="Livia series" color="primary" sx={{
              fontSize : '12px',
              paddingY : 0
            }} />
          </>

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
      <Typography variant="h6" color={theme.palette.primary.main} sx={{
              marginY: 0.5,
              fontSize: 16,
              fontWeight : 500
            }}>
              {name}
            </Typography>
          <Typography variant="h6" color={theme.palette.primary.main}  sx={{
            fontSize: 16,
            marginY: 0.5,
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
        {/* </div> */}
      </CardContent>
      <CardActions disableSpacing sx={{marginX: 1 }} className={"space-x-2"}>
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