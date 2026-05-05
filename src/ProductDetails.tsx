import { useDispatch, useSelector } from "react-redux"
import { increment, incrementByAmount } from "./cartCountSlice";
import type { RootState } from "./reduxStore";
import Header from "./Header";
const ProductDetails=()=>{
    const dispatch=useDispatch();
    const selector=useSelector((store:RootState)=>store.cartCount.value)

    return (

        <>

        <Header/>

            <div id="ProductDetails">
                <div>
                    <h3>Product Name</h3>
                    <div>Produt Description</div>
                </div>
                <div>
                    <h3>1200</h3>
                    <button  onClick={()=>dispatch(incrementByAmount(5))} >Add to Cart</button>
             
                </div>
            </div>
        
        </>
    )


}
export default ProductDetails