import { useEffect } from "react";
import { fetchProducts, type IProductState } from "./productSlice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./reduxStore";

const Products=()=>{

    const selector=useSelector((store:RootState)=>store.products.items);
    console.log(selector);
    const dispatch=useDispatch<any>();
    useEffect(()=>{
     dispatch(   fetchProducts());
     


    },[])

    return (


        <>
        <div>
            {
                selector?.map((item)=>{
                    return (

                        <h3>{item.title}</h3>
                    )
                })
            }
        </div>
        
        </>
    )


}
export default Products;
