import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart =()=>{

    const cartItems = useSelector((store)=> store.cart.items);

    const dispatch= useDispatch();
    const handleClearButton =()=>{
        dispatch(clearCart());
    }
    return(
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                <ItemList items={cartItems}/>
            </div>
            <button className="p-2 m-2 bg-black text-white rounded-lg"
            onClick={handleClearButton}>
                Clear
            </button>
            {cartItems.length===0 && (
                <h1>Cart is Empty. Add Items to the cart!</h1>
            )}
        </div>
    )
}
 export default Cart;
