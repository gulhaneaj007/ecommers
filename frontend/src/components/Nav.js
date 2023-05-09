import React  from "react";
import {Link} from "react-router-dom"

const Nav=()=>{
    return(
        <>
            <ul className="nav-ul">
                <li><Link to="/">Product</Link></li>
                <li><Link to="/Add">Add </Link></li>
                <li><Link to="/Update">UpdateProduct</Link></li>
                <li><Link to="/logout">logout</Link></li>
                <li><Link to="/Profile">Profile</Link></li>
                <li><Link to="/SignUp">SignUp</Link></li>

            </ul>
        </>
    )
}
export default Nav;