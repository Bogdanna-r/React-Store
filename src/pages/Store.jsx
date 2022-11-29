
 import React from "react";
 import { Link } from "react-router-dom";

 function Store() {
  return (
    <div>
   <header>
     <div className="headerLeft">
     <div className="img"> <img width={40} height={40} src="/img/logo3.jpg" alt=""></img></div> 
      <div className="option">
      <h3>Types of shoes</h3>
       <select>
        <option></option>
        <option >sneakers</option>
        <option>sandals</option>
        <option>classic</option>
       </select>
       </div>
     </div>
   </header>
   <div className="main_contant">
    <div className="main_bloks">
    <img className="main_photo" width={420} height={520} src="/img/photo_shoes.jpg" alt=""></img>
    <div className="main_name">
       <h3>Bohdanna ~ Co.</h3>
       <h1>Onlane Store</h1>
    </div>
   </div>
   <div className="section_1">
        <div className="block_1"></div>
        <img className="img" width={300} header={340} src="/img/photo2.jpg" alt=""></img>
     </div>
     <div className="section_2">
        <div className="block2"></div>
        <div className="block_name">
          <p> Shop now</p>
        </div>
        {/* <a href="https://googl" class="button">Go to Google</a> */}
        <Link to="/">
          <li>
            <span className="shoespage">Go to  Shoes</span>
          </li>
          </Link>
     </div>
      <div className="section_3">
        <div className="line"></div>
        <p>www.onlanestore.com</p>
      </div>
     </div>
  </div>
  );
}
export default Store;









