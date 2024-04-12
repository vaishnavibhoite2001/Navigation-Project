import {Link} from "react-router-dom";
const Nav=()=>{
    return(
        <>
        <Link to="/home">
            <li>Home</li>
        </Link>
        <Link to="/contact">
            <li>Contact</li>
        </Link>
        <Link to="/about">
            <li>About</li>
        </Link>
        <Link to="/product">
            <li>Product</li>
        </Link>
        </>

    );
}

export default Nav;