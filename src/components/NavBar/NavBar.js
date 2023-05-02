import CartWidget from "../CartWidget/CartWidget"  
import "./NavBar.css"
import {NavLink,Link} from "react-router-dom"


const NavBar = () => {
    return(
        <nav className="NavBar">
            <Link to="/">
            <h3>Camarashop</h3>
            </Link>
            <div>
            <NavLink to ={`/category/Nikon`} className={({isActive})=> isActive ? 'ActiveOption' : `Option`}> Nikon</NavLink>
            <NavLink to ={`/category/Canon`} className={({isActive})=> isActive ? 'ActiveOption' : `Option`} >Canon</NavLink>
            <NavLink to ={`/category/Sony`} className={({isActive})=> isActive ? 'ActiveOption' : `Option`}>Sony</NavLink>
            </div>
            <CartWidget/>
        </nav>
        )
}

export default NavBar