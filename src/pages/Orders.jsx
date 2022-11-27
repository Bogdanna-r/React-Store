import axios from "axios"
import React from "react"
import { reduce } from "rxjs";
import Card from "../components/Card"


function Orders(){
  const [orders, setOrdres] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    (async () => {
      try{
        const {data} = await axios.get('https://63193ca76b4c78d91b37a67a.mockapi.io/orders');
        setOrdres(data.reduce((prev, obj)=> [...prev , ...obj.items],[]))
        Object.keys(reduce);
        setIsLoading(false);
      }catch(error){
        alert('mistake')
        console.log(error)
      }
    })()
  },[])




 return (
  <div className="s_main_contant">
    <div className="s_main_bloks">
       <div className="s_main_name">
         <h3>Your orders</h3>
        </div>
     </div>
   <div className="contant">
   <div className="cards">
   <div className="js"> 
    {(isLoading ? [...Array(8)] : orders).map((item,index) => 
    (  <Card key = {index} loading = {isLoading} {...item } />
    ))}
   </div>
   </div>
  </div>
  </div>
  )
}
export default Orders