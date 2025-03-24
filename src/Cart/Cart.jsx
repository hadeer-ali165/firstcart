import React from 'react'
import cart from './Cart.module.css'
import removeBtn from '../assets/Images/icon-remove-item.svg'
import imgCart from '../assets/illustration-empty-cart.svg'
const Cart = ({myCart,deleteHandle,totalSum}) => {
  return (
    <>
    <div className={cart.cart}>
        <h2>Your Cart({myCart.length})</h2>
{myCart.length == 0 ?
     <div className={cart.myCarts}>
            <img src={imgCart} alt="" />
            <p>your added items will appear here</p>
        </div>

        :
        <div>
                    {myCart.map((el,index)=>
            <div key={index}  className={cart.addCart}>
            <div className="flexy">
            <div className={cart.detail}>
                <img src={el.image} alt="" />
                <h5>{el.category}</h5>
            </div>
            <div className={cart.price}>
                <h5>{el.quantity}x</h5>
                <h6>${el.price * el.quantity}</h6>
            </div>
            </div>
            <div className={cart.deleted} onClick={()=>deleteHandle(index)}>
                <img src={removeBtn} alt="" />
            </div>
        </div>
    )}
    <div style={{padding:"20px 0px", fontSize:"20px",fontWeight:"bold"}}><h4>Total : <span style={{color:"hsl(14, 86%, 42%)"}}> ${totalSum}</span></h4></div>
        </div>
}

        {/* <div className={cart.myCarts}>
            <img src={imgCart} alt="" />
            <p>your added items will appear here</p>
        </div> */}
    </div>
    </>
  )
}

export default Cart
