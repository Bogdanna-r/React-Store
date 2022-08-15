  
import  Drawer from './components/Drawer'
    
import  Card from './components/Card'


  function Store() {
    return(
     <div className="wrapper">
       <Drawer/>
      <header>
      <div className="headerLeft"></div>
      <div className="headerRight">
        <ul>
          <li> 
            <img width={23} height={22} src="/img/cart.png" alt=""></img>
          </li>
          <li>
            <span>Selected</span>
          </li>
          <li>
            <span>Contact</span>
          </li>
          <li>
          <img width={24} height={23} src="/img/user-male.png" alt=""></img>
          </li>
        </ul>
      </div>
      </header>
      <div className="s_main_contant">
        <div className="s_main_bloks">
          <img className="s_main_photo" width={1100}src="/img/photo3.jpg" alt=""></img>
          <div className="s_main_name">
            <h3>Sports sneakers</h3>
          </div>
        </div>      
        <div className="contant">
          <h3>All sneakers</h3>
           <div className="search-block">
            <form>
              <input type={"text"} name={"text"} className={"search"} placeholder={"search"}></input>
            </form>
           </div>
          <div className="cards">
           <Card></Card>
           <Card></Card>
           <Card></Card>
           <Card></Card>
           <Card></Card>
         </div>
        </div>
      </div>
     </div>

    );
  }



  export default Store