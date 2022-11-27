
import React from "react";
import { Routes, Route } from "react-router-dom";
import Drawer from "./components/Drawer";
import axios from "axios";
import Header from "./components/Header"; 
import Home from "./pages/Home";            
import Favorites from "./pages/Favorotes";
import AppContext from "./context";
import Orders from "./pages/Orders";
import Store from "./pages/Store";


 
function App() {
  const [items,setItems] = React.useState([
    // {
    //   "id": "1",
    //   "title": "adidas Top Ten",
    //   "imgUrl": "/img/sneakers/Adidas.T.webp",
    //   "price": 110
    //  },
    //  {
    //   "id": "2",
    //   "title": "New Balance 574 Rugged",
    //   "imgUrl": "/img/sneakers/NewBalance.webp",
    //   "price": 120
    //  },
    //  {
    //   "id": "3",
    //   "title": "adidas Originals Ozelia",
    //   "imgUrl": "/img/sneakers/Adidas.O.webp",
    //   "price": 140
    //  },
    //  {
    //   "id": "4",
    //   "title": "Nike Air Force 1 '07",
    //   "imgUrl": "/img/sneakers/NikeAirForce.webp",
    //   "price": 145
    //  },
    //  {
    //   "id": "5",
    //   "title": "Jordan Max Aura 4",
    //   "imgUrl": "/img/sneakers/Jordan.M.webp",
    //   "price": 160
    //  },
    //  {
    //   "id": "6",
    //   "title": "Nike VaporMax Plus",
    //   "imgUrl": "/img/sneakers/Nike.V.webp",
    //   "price": 270
    //  }
  ])
  const [cartItems, setCartItems] = React.useState([])
  const [favorite, setFavorites] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [cartOpened, setCartOpeened] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(true)

    
 React.useEffect( () =>{
  async function fetchData(){
    try{
      const [cartResponse,favoriteResponse, itemsResponse] = await Promise.all([
        axios.get('https://63193ca76b4c78d91b37a67a.mockapi.io/cart'),
        axios.get('https://63193ca76b4c78d91b37a67a.mockapi.io/favorites'),
        axios.get('https://63193ca76b4c78d91b37a67a.mockapi.io/item' )
      ])
   setIsLoading(false)
   setCartItems(cartResponse.data)
   setFavorites(favoriteResponse.data)
   setItems(itemsResponse.data);
    }catch(error){
      alert('error when requesting date :(')
    }
  } fetchData()
    },[]);

   const onAddToCart = async (obj) => {
    try{
     if(cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      setCartItems((prev) => prev.filter((item) => Number( item.id) !== Number(obj.id)))
      await axios.delete(`https://63193ca76b4c78d91b37a67a.mockapi.io/cart/${obj.id}`)
      } else{
       setCartItems((prev) => [...prev, obj]);
       await  axios.post('https://63193ca76b4c78d91b37a67a.mockapi.io/cart', obj );
      }
     }catch(error){
      alert('error when requesting cart')
       console.error(error)
     }
    };
   const onRemoveItem = (id) =>{
    try{
     axios.delete(`https://63193ca76b4c78d91b37a67a.mockapi.io/cart/${id}`)
      setCartItems((prev) => prev.filter((item) => item.id !== id  ))
     }catch(error){
      alert('error when requesting can not remove :(')
      console.error(error)
     }
    }
   const onAddToFavorite = async (obj) => {
      try{
       if(favorite.find((favObj) => Number( favObj.id) === Number( obj.id))) {
        axios.delete(`https://63193ca76b4c78d91b37a67a.mockapi.io/favorites/${obj.id}`)
        setFavorites ((prev) => prev.filter((item) => Number( item.id) !== Number(obj.id)))
       }else{
    const { data } = await axios.post('https://63193ca76b4c78d91b37a67a.mockapi.io/favorites' , obj)
      setFavorites((prev) => [...prev, data]) 
    }}catch (erorr){
      alert("not add to favorite")
    }
     }
   const onChangeSearchInput = (event) => {
      setSearchValue(event.target.value)
     }
    
     const isItemsAdded = (id) => {
       return cartItems.some((obj) => Number(obj.parentId) === Number(id));
     }


 return (
  <AppContext.Provider value={{
    items,
    cartItems,
    favorite,
    isItemsAdded,
    onAddToFavorite,
    setCartOpeened,
    setCartItems,
    onAddToCart
    }}>

  <div className="wrapper">
    <Drawer
     items={cartItems}
     onClose={() => setCartOpeened(false)}
     onRemove = {onRemoveItem} 
     opened={cartOpened} /> 


    <header>
      <div className="headerLeft"></div>
      <Header onClickCart = {() => setCartOpeened(true) }/>
    </header>

      <Routes >
      <Route
         path="/" 
         exact 
         element={
       <Home
          items = {items}
          cartItems = {cartItems}
          searchValue = {searchValue}
          setSearchValue = {setSearchValue}
          onChangeSearchInput = {onChangeSearchInput}
          onAddToFavorite={onAddToFavorite}
          onAddToCart={onAddToCart} 
          isLoading = {isLoading}                
          />}
         > </Route> 
           <Route
             path="/favorites" 
             exact
             element={
           <Favorites
              items = {favorite}
             />}
          > </Route> 

            <Route 
            path="/orders"
            exact
            element={
             <Orders/>
              }
              >
          </Route>
          <Route 
            path="/main"
            exact
            element={
             <Store/>
              }
              >
          </Route>
      </Routes>
     </div>
    </AppContext.Provider>
  );
}



  export default App

























