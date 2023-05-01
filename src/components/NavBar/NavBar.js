import CartWidget from "../CartWidget/CartWidget"  
import "./NavBar.css"

const NavBar = () => {
    return(
        <div className="container">
            <nav className="navBar">
            <h3>CamaraShop</h3>
            <div>
                <ul>
                    <a href="#">Home</a>
                    <a href="#">Nosotros</a>
                    <a href="#">Categorias</a>
                    <a href="#">Contacto</a>
                </ul>
            </div>
            <CartWidget />
            </nav>
        </div>
        )
}

export default NavBar