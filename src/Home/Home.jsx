import style from './Home.module.css';
import { useEffect } from "react";
import { useState } from "react";
import desserts from '../Data/Data'
import Title from './Title';
import Cart from './../Cart/Cart';

const Home = () => {
    let [data , setData] = useState(desserts);

function getData(){
    let getItemCart = localStorage.getItem("mycart");
    if(getItemCart)
    {
        return JSON.parse(getItemCart);
    }
    else
    {
        return [];
    }
}

    let [cart,setCart] = useState(getData);
    
    // console.log(data)
function handleAddClick(id)
{
    // setBtnState(true)
    let copyItems = structuredClone(data);
    let updatedCart = cart.map((item) =>
        item.id === copyItems[id].id ? { ...item, quantity: item.quantity + 1 } : item
    );

    const isDuplicate = cart.some((item) => item.id === copyItems[id].id);

    if (!isDuplicate) {
        copyItems[id].quantity = 1;
        setCart([...cart, copyItems[id]]);
    } else {
        setCart(updatedCart);
    }

    // toast('Product Added');

}
useEffect(()=>{
    localStorage.setItem("mycart",JSON.stringify(cart))
},[cart])

    function calculateTotalSum() {
        const totalSum = cart.reduce((acc, item) => {
            return acc + item.price * item.quantity;
        }, 0); // Initial value of accumulator is 0
    
        return totalSum;
    }
    const totalSum = calculateTotalSum();
    // console.log("Total Sum:", totalSum);


// console.log(cartTotal)
function deleteHandle(ids)
{
    let newItems = cart.filter((el,index)=> index != ids);
    setCart(newItems)
    localStorage.setItem("carts",JSON.stringify(newItems));
    // toast('Product Removed')
    console.log(ids)
}

  return (
    <>
    <Title/>
    <div className={style.flex}>
    <div className={style.products}>
    {data.map((el,index)=>
    <div key={index} className={style.parent}>
    <div className={style.image}>
        <img src={el.image} alt="" />
        <button onClick={()=>{handleAddClick(index)}}>Add To Cart</button> 
    </div>
    <p>{el.category}</p>
    <h5>{el.name}</h5>
    <h6>${el.price}</h6>
</div>
    )}
    </div>
    <div className={style.text}>
        <Cart myCart={cart} setMyCart={setCart} totalSum={totalSum} deleteHandle={deleteHandle}/>
    </div>
    </div>
    </>
  )
}

export default Home
