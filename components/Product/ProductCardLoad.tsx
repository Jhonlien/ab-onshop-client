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
import Skeleton from '@mui/material/Skeleton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Chip from '@mui/material/Chip';


const ProductCardLoad: React.FC = () => {
  const theme = useTheme()
  // theme.palette.primary.main
  return (
    <Card sx={{
      maxWidth: 345,
      bgcolor: 'background.default',
      borderRadius: '10px',
    }}>
      <CardHeader
        title={
            <Skeleton animation="wave" width={100} height={20} />
        }
      />

      <Skeleton animation="wave" variant="rectangular" height={194} />
      <CardContent>
        <Typography variant="h6" color={"primary"} sx={{
          marginY: 0.5,
          fontSize: 16,
        }}>
          <Skeleton animation="wave" width={150} height={20} />
        </Typography>
        <Typography variant="h6" color={"primary"} sx={{
          fontSize: 16,
          marginY: 0.5,
          fontWeight: "bold",
        }}>
          <Skeleton animation="wave" width={100} height={20} />
        </Typography>
        <Typography variant="h6" color={"primary"} sx={{
          fontSize: 14,
          fontWeight: "light",
        }}>
          <Skeleton animation="wave" width={160} height={20} />
        </Typography>
        {/* </div> */}
      </CardContent>
      <CardActions disableSpacing sx={{ marginX: 1 }} className={"space-x-2"}>
        {/* <Button
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
        </Button> */}
        <Skeleton animation="wave" width={180} height={20} />
        <Skeleton animation="wave" width={60} height={20} />
        <Skeleton animation="wave" width={60} height={20} />


  
      </CardActions>
    </Card>
  )
}

export default ProductCardLoad