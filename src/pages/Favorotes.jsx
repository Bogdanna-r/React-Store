import React from "react"
import Card from "../components/Card"
import AppContext from "../context"

function Favorites(){
const {favorite, onAddToFavorite} = React.useContext(AppContext)

  return(
     
  <div className="s_main_contant">
    <div className="s_main_bloks">
       <div className="s_main_name">
         <h3>Your favorites</h3>
        </div>
     </div>
   <div className="contant">
   <div className="cards">
   <div className="js"> 
    { favorite.map((item,index) => 
    (  <Card key={index} favorited={true} onFavorite = {onAddToFavorite} {... item}
      />
    ))}
   </div>
   </div>
  </div>
  </div>
  )
}
export default Favorites