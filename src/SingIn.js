
function SingIn(){
  return(
    <div className="wrapper">
     <header>
      <div className="sin_headerLeft"> 
      <img width={40} height={40} src="/img/user-male.png"  alt=""></img>
       <h3>Bohdanna ~ Co</h3>
      </div>
      <div className="sin_headerRight">
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
        </ul>
      </div>
     </header>
      <div className="sin_contant">
       <form>
         <h2>Sing in</h2>
         <p>Login to track orders,edit your account, and more</p> 
            <label>Email Addres* : </label>   
            <input type={'text'} className="inputs"></input>
            <label>Password* :</label>
             <input type={'password'} className="inputs"></input>
             <button className="btn"><span>Sing in</span></button>   
        </form> 
      </div>
    </div>
  )
}
export default SingIn

