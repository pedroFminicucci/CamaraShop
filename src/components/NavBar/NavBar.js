import CartWidget from "../CartWidget/CartWidget"  
import "./NavBar.css"
import {NavLink} from "react-router-dom"
import {Link} from "react-router-dom"

const NavBar = () => {
    return(
        <nav className="NavBar">
            <Link to="/">
            <h3>Camarashop</h3>
            </Link>
            <div>
            <NavLink to ={`/category/celular`} className={({isActive})=> isActive ? 'ActiveOption' : `Option`}> Celular</NavLink>
            <NavLink to ={`/category/tablet`} className={({isActive})=> isActive ? 'ActiveOption' : `Option`} >Tablet</NavLink>
            <NavLink to ={`/category/notebook`} className={({isActive})=> isActive ? 'ActiveOption' : `Option`}>Notebook</NavLink>
            </div>
            <CartWidget/>
        </nav>
        )
}

export default NavBar