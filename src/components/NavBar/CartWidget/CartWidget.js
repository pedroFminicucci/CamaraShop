import cart from "./assets/cart.svg"

const imgStyle = {
    width: "3%",
    height: "3%"
}

const CartWidget = () => {
    return (
        <div>
            <img src={cart} alt="cart-widget" style={imgStyle}/>
            0
        </div>
    )
}

export default CartWidget