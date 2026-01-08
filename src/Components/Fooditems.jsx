import Item from "./Item";
import styles from "./Fooditems.module.css";
import { useState } from "react";
import { Fragment } from "react";

function Fooditems({ fooditem, handleonclick, remove, Changeswitch, switche ,updateitem,updateinputchange,UPinput}) {
  // const [activitem , setactivitem] = useState([])

  //   const hanldclick = (index) => {
  //   setactivitem((prev) =>
  //     prev.includes(index)
  //       ? prev.filter((i) => i !== index)
  //       : [...prev, index]
  //   );
  // };

  return (
    <>
      <ul className={styles.ul}>
        {fooditem.map((item, index) => (
          <Fragment key={item.id}>
            <Item
              item={item}
              handlforitem={() => handleonclick(item.id)}
              bought={item.isactive}
              handleremove={() => remove(item.id)}
              // update={() => handleonupdate(item.id)}
              Changeswich={() => Changeswitch(item.id)}
            ></Item>
            {switche === item.id && (
              <>
                <input onChange={(e) => updateinputchange(e.target.value)}
                className={styles.Updateinput}
                value={UPinput} type="text" />
                <button className={`${styles.Updatebutt} ${styles.comonbutp}`} onClick={() => updateitem(item.id)}>Update</button>
              </>
            )}
          </Fragment>
        ))}
      </ul>
    </>
  );
}
export default Fooditems;
