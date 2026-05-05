import { useSelector } from "react-redux";
import type { RootState } from "./reduxStore";

const Header=()=>{
    const selector=useSelector((store:RootState)=>store.cartCount.value);

    return (
        <>
        <div id="header">
            <img/>
            <div>
                <a href="#">Home</a> <a href="#">Contact</a>
            </div>
            <div>
                Cart:{selector}
            </div>
        </div>
        </>
    )

}
export default Header;
