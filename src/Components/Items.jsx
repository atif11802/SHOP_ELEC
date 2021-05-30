import React from 'react';
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
    maxWidth: 345,
    marginTop: 20,
    marginLeft: 30,
  },
});



function Items({title,price,description,image,Id,addtocart}) {


    
      


    const classes = useStyles();
    return (
        <>
        <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" >
            {title}
          </Typography >
          
          <Typography dangerouslySetInnerHTML={{__html:description }} varient="body2" color="textSecondary" />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography>
            {price}
        </Typography>
        <Button onClick={()=>addtocart(Id)} size="small" color="primary">
          add to cart
        </Button>
      </CardActions>
    </Card>
            
        </>
    )
}

export default Items
