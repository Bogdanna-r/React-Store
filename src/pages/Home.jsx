import React from "react";

import Card from  "../components/Card"

function Home({
  items,
  searchValue,
  setSearchValue,  
  onChangeSearchInput,   
  onAddToFavorite,  
  onAddToCart, 
  isLoading,
  }){
 
  const renderItems = () => {
   const filtredItems = items.filter((item) =>
   item.title.toLowerCase().includes(searchValue.toLowerCase())
   );

  return ( isLoading ? [...Array(8)] : filtredItems ).map((item, index) => (
     <Card 
       key = {index}
       onFavorite={(obj)=> onAddToFavorite(obj)}
       onPlus={(obj)=> onAddToCart(obj)}
       loading = {isLoading}
       {...item }
   />
    ))
  }
  return(
    <div className="s_main_contant">
    <div className="s_main_bloks">
      <img className="s_main_photo" width={1050} height={280} src="/img/1Change.png" alt=""></img>
      <div className="s_main_name">
        <h3>Sports sneakers</h3>
      </div>
    </div>      
    <div className="contant">
      <h3>{searchValue ? `Search by request: "${searchValue}"` : 'All sneakers'}</h3>
       <div className="search-block">
        <form>
        <input onChange={onChangeSearchInput} value={searchValue} type={"text"} name={"text"} className={"search"} placeholder={"search"}></input>
         { searchValue && (
          <img 
           onClick={ () => setSearchValue('')}
           className="clear" width={12} height={12} src="/img/svg_remove2.jpg" alt=""
          ></img>
          )}
        </form>
       </div>
      <div className="cards">
       <div className="js"> { renderItems()}</div>
     </div>
    </div>
  </div>
  )
}
export default Home;