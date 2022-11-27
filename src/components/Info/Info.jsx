import React from 'react'
import AppContext from '../../context';
import styles  from'./Info.module.scss'


export const Info = ({ title, image, description }) => {
   const {setCartOpeened} = React.useContext(AppContext)

 return (
    <div className={styles.cartEmpty}>
     <img width={110} height={100} src={image} alt=''></img>
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={() => setCartOpeened(false)} className={styles.greenButton}>
       <b>Come back</b>
     </button>
  </div>
  )
}



export default Info;
 