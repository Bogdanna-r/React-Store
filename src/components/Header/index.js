import React from 'react'
import { Link } from 'react-router-dom'
import styles  from './Header.module.scss'


function Header (props){
  return(
    <div className={styles.headerRight}>
        <ul className={styles.ul}>
          <span></span>
          <li onClick={props.onClickCart} className={styles.li}> 
            <img width={23} height={22} src="/img/cart.png"  alt=""></img>
          </li>
         <Link to="/favorites">
          <li  className={styles.li}> 
              <img width={22} height={20} src="/img/favorite.png"  alt=""></img>
          </li>
          </Link>
          <Link to="/main">
          <li className={styles.li}>
            <span>Main</span>
          </li>
          </Link>
          <Link to="/">
          <li className={styles.li}>
            <span>Shoes</span>
          </li>
          </Link>
          <Link to="/orders">
          <li className={styles.li}>
          <img width={24} height={23} src="/img/user-male.png"  alt=""></img>
          </li>
        </Link>
        </ul>
      </div>
  )
}

export default Header