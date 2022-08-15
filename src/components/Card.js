
function Card(){
  return (
    <div className="card">
      <img className="img" width={120} height={200} src="/img/gazelu.png" alt=""></img> 
      <p>Adidas Originals Gazelle </p>
        <div className="w_shoes">
          <div className="shoe">
             <span>Price:</span>
             <b>120 $</b>
          </div>
             <button className="btn">
             <img className="b_img" width={14} height={11} src="/img/plus.jpg" alt=""></img>
           </button>
        </div>
     </div>
  )
}
 export default Card
