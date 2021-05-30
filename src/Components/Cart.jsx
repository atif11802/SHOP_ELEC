
import CartItems from './CartItems'
import "../scss/Cart.scss";
import { Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';


function Cart({cart,handleUpdateCartqty,handleRemove,handleEmpty}) {

    const Emptycart =()=>{
       return(
<>
<h1>your cart is empty</h1>
            <h3>Buy and Chill. <Link to="/">shop</Link> </h3>
</>
            
            )
    }
   
    const FilledCart =()=>{
        return(
            <>
            <div className="parent">
            {
                 cart.line_items.map((item)=>(
                     <CartItems
                     
                     item={item}
                     handleUpdateCartqty={handleUpdateCartqty}
                     handleRemove={handleRemove}
                     />
                 ))
             }

            </div>

             <h1>subtotal : {cart.subtotal.formatted_with_symbol}</h1>
             <Button  onClick={handleEmpty} color="secondary">Remove</Button>
             <Link to="/checkout">
             <Button  color="secondary">Checkout</Button>
             </Link>
             
             
            </>
        )

    }

    if(!cart.line_items) return "Loading....... ";

    return (
        <div className="cart">
            <h1>Your Shopping Cart</h1>
            {
                !cart.line_items.length ? <Emptycart /> : <FilledCart />
            }
        </div>
    )

    
}

export default Cart;
