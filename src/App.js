import './App.css';
import Items from './Components/Items';
import Nav from './Components/Nav';
import Cart from "./Components/Cart"
import { commerce } from './lib/commerce';
import {useState,useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Checkout from './Components/Checkout';



function App() {

  const [datas,setDatas] =useState([]);
  const [cart, setCart] = useState({});
    
  const fetchCart = async () => {
		setCart(await commerce.cart.retrieve());
	};

    const addtocart = async (Id, quantity)=>{
      const res= await  commerce.cart.add(Id,1 );
      setCart(res);
      console.log(res);
    }
    const handleUpdateCartqty = async (productID, quantity) => {
      const response = await commerce.cart.update(productID, {quantity});
      setCart(response.cart);
    };
    const handleRemove = async (productID) => {
      const response = await commerce.cart.remove(productID);
      setCart(response.cart);
    };
    
	const handleEmpty = async () => {
		const response = await commerce.cart.empty();
		setCart(response.cart);
	};

  useEffect(()=>{   async function fetchData (){
      
        const res = await commerce.products.list();
        setDatas(res.data);
      
    }
    fetchData();
  },[])


  useEffect(() => {
		
		fetchCart();
	}, [fetchCart]);

  console.log(cart.subtotal);

  return (
    < Router>
    <div className="App">
      <Nav
      total={cart.total_items}
      />
     

     <Switch>

       <Route exact path="/">
       <div className="parent">
      {
          datas.map((data)=>(
            <Items
            Id={data.id}
            key={data.id}
            title={data.name}
            price={data.price.formatted_with_symbol}
            description={data.description}
            image={data.media.source}
            addtocart={addtocart}
            
            />
          ))
        }

      </div>

       </Route>
       <Route exact path="/cart">
       <Cart
    cart={cart}
    handleUpdateCartqty={handleUpdateCartqty}
    handleRemove={handleRemove}
    handleEmpty={handleEmpty}
      
      />

       </Route>
     
       <Route exact path="/checkout">
       <Checkout />

       </Route>




     </Switch>
      

     

      
      
        

      
    </div>
    </ Router>
  );
}

export default App;
