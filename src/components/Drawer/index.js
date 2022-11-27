import React from 'react'
import Info from '../Info/Info'
import styles  from './Drawer.module.scss'
import axios from 'axios'
import {useCart} from '../../hooks/useCart'

 const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

function Drawer({ onClose,onRemove, items = [], opened}){
  const { cartItems, setCartItems, totalPrice} = useCart();
   const [orderId, setOrderId] = React.useState(null)
   const [isOrderComplate, setIsOrderComplete] = React.useState(false)
   const[isLoading, setIsLoading] = React.useState(false)


  const onClickOrder = async () => {
    try{
    setIsLoading(true)
    const{data} = await axios.post('https://63193ca76b4c78d91b37a67a.mockapi.io/orders', {
    items: cartItems
  });
    setOrderId(data.id)
    setIsOrderComplete(true)
    setCartItems([]);

    for(let i = 0; i < cartItems.length; i++ ){
      const item = cartItems[i]
      await axios.delete('https://63193ca76b4c78d91b37a67a.mockapi.io/cart' + item.id);
      await delay(1000)
    }
  } catch (error){
    alert('error when creating the order :(')
  }
  setIsLoading(false)
  }

  return(

   <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
    <div className={styles.drawer}>
      <img onClick={onClose}  className={styles.main_remove} width={20} height={20} src="/img/remove.png" alt=""></img>
      <div className={styles.drawer_name}>
        <h3> Basket</h3>     
        <img width={20} height={23} src="/img/cart.png" alt=""></img>
       </div>
   {items.length > 0 ? (
     <div className=' '>
      <div className={styles.cardItem}>
        {items.map((obj) => (
       <>
       <div key = {obj.id} className={styles.items}>
         <img  width={100} height={110} src={obj.imgUrl} alt=""></img>
        <div>
          <p>{obj.title}</p>
          <b>{obj.price}$</b>
        </div>
        <img 
          onClick={() => onRemove(obj.id)} 
          className={styles.remove} width={20} height={20} 
          src="/img/remove.png"
          alt="">
          </img>
       </div>
      </>
      ))}
     </div>
       <div className={styles.totalBlock}>
        <ul>
          <li>
           <span>sum total:</span>
           <div></div>
           <b>{totalPrice} $</b>
          </li>     
       </ul>
       <button disabled={isLoading} onClick={onClickOrder} >Order</button>
      </div>
        
        </div>
        ) : (
           <Info
            title={ isOrderComplate ? "The order is made ;)" : "Basket emty"}
            description = { isOrderComplate ? `Your order #${orderId} will be delivered to the courier shortly` :  'Add at least one pair of sneakers'} 
            image={ isOrderComplate ? "/img/ListDone.svg" : "/img/box.png"} 
            />
        )} 
     </div>
     </div>
  )
  }

export default Drawer
