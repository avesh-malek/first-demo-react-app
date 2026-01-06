import styles from './Error.module.css'

const error = ({fooditem})=>{
    return <> {fooditem.length===0 &&  <p className={styles.error}>fooditem is empty</p>}
   
    </>
}
export default error;