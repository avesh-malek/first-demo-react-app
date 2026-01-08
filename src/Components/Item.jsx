import styles from "./Item.module.css";
function Item({item , bought,handlforitem,handleremove,Changeswich}) {

    return(<>
      
            <li className={`${styles.item} ${bought && styles.back}`}><span>{item.name}</span>
            <div className={styles.buttondiv}>
                <button  className={`${styles.Change} ${styles.comonbut}`} onClick={handlforitem} >Change Color</button>
                <button className={`${styles.update} ${styles.comonbut}`} onClick={Changeswich}>Edit</button>
                <button  className={`${styles.remove} ${styles.comonbut}`} onClick={handleremove}>Remove</button>
            </div></li>
    </>)
}
export default Item;