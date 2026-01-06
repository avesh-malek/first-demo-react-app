import styles from "./Item.module.css";
function Item({item , bought,handleonclick}){

    return(<>
      
            <li className={`${styles.item} ${bought && styles.back}`}><span>{item.name}</span>
            <div className={styles.buttondiv}>
                <button  className={styles.Change} onClick={handleonclick} >Change Color</button>
                <button  className={styles.remove} >Remove</button>
            </div></li>
    </>)
}
export default Item;