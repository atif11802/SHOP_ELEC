import "../scss/Checkout.scss";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
function Checkout() {
    const classes = useStyles();
    return (
        <>
        <div className="checkout">
           <h2>
               we are currently working with Credit card payment,so kindly buy manually with bkash
           </h2>
           <h1>our bkash no. 0176111111</h1>
           <form className={classes.root} noValidate autoComplete="off" action="https://formsubmit.co/ratul0947@gmail.com" method="POST">
      <TextField required type="number" name="number" id="standard-basic" label="Your phone number" />
      
      <TextField type="text" name="name" required  id="standard-basic" label="your name" />
      
      <TextField type="text" name="location"  required id="standard-basic" label="your location" />
      <TextField  id="standard"  name="product and quantity" label="name of product with quantity" />
      
      <TextField required type="number" name="price" id="standard-basic" label="price" />
      <button type="submit">Send</button>
      
    </form>

           
        </div>
        </>
        
    )
}

export default Checkout
