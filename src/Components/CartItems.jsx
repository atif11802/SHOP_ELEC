import React from 'react'
import "../scss/cartItems.scss";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 365,
      
    },
    media: {
      height: 240,
    },
  });

function CartItems({item,handleUpdateCartqty,handleRemove}) {
    const classes = useStyles();
    return (
        <>
       

<Card className={classes.root}>

  <CardMedia
    className={classes.media}
    image={item.media.source}
    title="Contemplative Reptile"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="h2">
      {item.product_name}
    </Typography>
    <Typography>{item.price.formatted_with_symbol}</Typography>
    
  </CardContent>

<CardActions>
  <Button size="small" color="secondary" onClick={()=> handleUpdateCartqty(item.id, item.quantity + 1)}>
    +
  </Button>
  <Typography>{item.quantity}</Typography>
  <Button size="small" color="secondary" onClick={()=> handleUpdateCartqty(item.id, item.quantity - 1)}>
   -
  </Button>
</CardActions>
<Button onClick={()=> handleRemove(item.id)} color="inherit">Remove Item</Button>
</Card>



        </>
        
    )
}

export default CartItems
