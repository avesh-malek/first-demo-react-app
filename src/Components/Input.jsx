import styles from "./Input.module.css";
function Input({add,handelonchange,value}) {

   
  return (
    <>
      <div className={styles.headdiv}>
        <div><h1>Food item</h1></div>
        <div className={styles.inputdiv}>
        <input
          id="input"
          className={styles.input}
          type="text"
          value={value}
          placeholder="Enter Food Item"
          onChange={(e) => handelonchange(e.target.value)}
        />
        <button className={styles.button} onClick={add}>Add</button>
        </div>
      </div>
    </>
  );
}
export default Input;
