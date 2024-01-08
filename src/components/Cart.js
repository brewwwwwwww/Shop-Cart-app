import React from "react";
import Items from "./Item";
import { useCart } from "../context/CartContext";

const Cart = () => {
    const {products, total, formatMoney} = useCart()
    return(
        <div className="cart">
        <h1 style={{textAlign:"center"}}>
            {products.length > 0 ? `ยอดชำระเงินรวม : ${formatMoney(total)} บาท` : "ไม่มีสินค้าในตะกร้า"}
        </h1>
            {products.map((data)=>{
                return(
                    <Items key={data.id} {...data}/>
                )
            })}
        </div>
    )
}

export default Cart