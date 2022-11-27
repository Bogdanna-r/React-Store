import styles  from './Card.module.scss'
import React  from 'react'
import ContentLoader from "react-content-loader"
import AppContext from '../../context'
function Card(
  {
    id,
    title,
    imgUrl,
    price,
    onFavorite,
    onPlus,
    favorited = false,
    loading = false
    }
    ){
  const { isItemsAdded } = React.useContext(AppContext)
  const[isFavorite,setIsFavorite] = React.useState(favorited)
  const obj = {id, parentId:id, title, imgUrl, price}

  const onClickPlus = () => {
    onPlus(obj)
    }
  const onClickFavorite = () => {
   onFavorite(obj)
   setIsFavorite(!isFavorite)
  }


  return (
    <div className={styles.card}>
    {  loading ?   (
  <ContentLoader 
    speed={2}
    width={170}
    height={265}
    viewBox="0 0 150 260"
    backgroundColor="#ffd3a0fc"
    foregroundColor="#ecebeb"
    // {...props}
  >
    <rect x="20" y="0" rx="10" ry="10" width="130" height="120" /> 
    <rect x="20" y="140" rx="5" ry="5" width="155" height="15" /> 
    <rect x="20" y="170" rx="5" ry="5" width="100" height="15" /> 
    <rect x="20" y="215" rx="5" ry="5" width="80" height="25" /> 
    <rect x="120" y="210" rx="10" ry="10" width="32" height="32" />
   </ContentLoader>
   ) : (
     <>

  { onFavorite && ( 
   <div className={styles.favorite} onClick={ onClickFavorite}>
   <img width={14} height={13}  src={ isFavorite ? '/img/liked.png' : '/img/unliked.png'}  alt="sneakers"></img>
   </div>
  )}


<img className={styles.img} width={180} height={190} src={imgUrl} alt=""></img> 
<p>{title} </p>
  <div className={styles.w_shoes}>
    <div className={styles.shoe}>
       <span>Price: </span>
       <b> {price} $</b>
    </div>
     { onPlus && (
       <img
        width={17}
        height={15}
        onClick={onClickPlus } 
        src={ isItemsAdded(id) ? '/img/plus_cheked.png' : '/img/plus.jpg'} 
        alt="Plus">
        </img>
        )}
        </div>
     </>
    )}
</div>
  ) 

  
}

 export default Card
