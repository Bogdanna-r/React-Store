 function Drawer(){
  return(
     <div className="overlay">
      <div className="drawer">
        <div className="drawer_name">
         <h3> Basket</h3>
         <img width={23} height={22} src="/img/cart.png" alt=""></img>
       </div>
       <div className="cardItem">
         <img  width={85} height={150} src="/img/gazelu.png" alt=""></img> 
          <div className="item">
         <p>Adidas Originals Gazelle</p>
         <b>120 $</b>
         </div>
         <img className="remove" width={30} height={30} src="/img/remove2.webp" alt=""></img>
      </div>
       <div className="totalBlock">
         <ul>
        <li>
          <span>sum total:</span>
          <div></div>
          <b>120 $</b>
        </li>
         <li>
         <span>tax 5%:</span>
          <div></div>
          <b>125 $</b>
        </li>
       </ul>
        <button>Order</button>
       </div>
     </div>
     </div>
  )
  }

export default Drawer
