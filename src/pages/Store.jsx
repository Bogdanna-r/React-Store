
import Header from "../components/Header";
 import React from "react";
function Store() {
  return (
    <div className="wrapper">
   <header>
     <div className="headerLeft">
     <div className="img"> <img width={40} height={40} src="/img/logo2.jpg" alt=""></img></div> 
      <div>
      <h3>Types of shoes</h3>
       <select>
        <option></option>
        <option >sneakers</option>
        <option>sandals</option>
        <option>classic</option>
       </select>
       </div>
     </div>
      <Header/>
   </header>
   <div className="main_contant">
    <div className="main_bloks">
    <img className="main_photo" width={275} height={380} src="/img/photo_shoes.jpg" alt=""></img>
    <div className="main_name">
       <h3>Bohdanna ~ Co.</h3>
       <h1>Onlane Store</h1>
    </div>
   </div>
   <div className="section_1">
        <div className="block_1"></div>
        <img className="img" width={280} header={350} src="/img/photo2.jpg" alt=""></img>
     </div>
     <div className="section_2">
        <div className="block2"></div>
        <div className="block_name"><p> Shop now</p></div>
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









