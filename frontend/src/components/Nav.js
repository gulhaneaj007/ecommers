import React  from "react";
import {Link,useNavigate} from "react-router-dom"

const Nav=()=>{
    const auth = localStorage.getItem("usrinfo")
    const navigate = useNavigate();
    const logout =()=>{
        localStorage.clear()
        navigate("SingUp")
    }
    return(
        <>
            <ul className="nav-ul">
                <li><Link to="/">Product</Link></li>
                <li><Link to="/Add">Add </Link></li>
                <li><Link to="/Update">UpdateProduct</Link></li>
                <li><Link to="/Profile">Profile</Link></li>
                <li>{auth ? <Link onClick={logout} to="/SignUp">Logout</Link> : <Link to="/SignUp">SignUp</Link>}</li>
                <li><Link to="/Login">Login</Link></li>



            </ul>
        </>
    )
}
export default Nav;