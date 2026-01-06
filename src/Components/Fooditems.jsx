import Item from "./Item";
import styles from "./Fooditems.module.css";
import { useState } from "react";
function Fooditems({ fooditem }) {

  const [activitem , setactivitem] = useState([])

  const hanldclick = (index) => {
  setactivitem((prev) =>
    prev.includes(index)
      ? prev.filter((i) => i !== index)
      : [...prev, index]
  );
};


  return (
    <>
      <ul className={styles.ul}>
        {fooditem.map((item, index) => (
          <Item
            item={item}
            key={index}
            handleonclick={() => hanldclick(index)}
            bought={activitem.includes(index)}
          ></Item>
        ))}
      </ul>
    </>
  );
}
export default Fooditems;
