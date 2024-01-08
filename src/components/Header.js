import React from "react"
import "./Header.css"
import { useCart } from "../context/CartContext"

const Header = () => {
    const {amount} = useCart()
    return(
        <header>
            <p>shopping Application</p>
            <p>สินค้าในตะกร้า : {amount}</p>
        </header>
    )
}

export default Header