import CartWidget from "./CartWidget/CartWidget"    

const NavBar = () => {
    return(
        <nav>
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
    )
}

export default NavBar