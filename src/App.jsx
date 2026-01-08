import Container from "./Components/Container";
import Fooditems from "./Components/Fooditems";
import Input from "./Components/Input";
import Error from "./Components/Error";
import "./App.css";
import { useState } from "react";

function App() {
  const [fooditem, setfooditem] = useState([
    { id: 1, name: "pizza", isactive: false },
    { id: 2, name: "burger", isactive: false },
  ]);

  const [inputval, setinputval] = useState("");

  
  const add = (e) => {
    if (inputval.trim() === "") {
      return;
    }
    
    setfooditem([
      { id: Date.now(), name: inputval, isactive: false },
      ...fooditem,
    ]);
    setinputval("");
    // setfooditem([{id:Date.now(),name:inputval
    //   ,isactive:false,...fooditem}])
  };
  
  const handleonclickcolor = (id) => {
    setfooditem((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isactive: !item.isactive } : item
  )
);
};

const removeitem = (id) => {
  setfooditem((prev) =>
    prev.filter((item) => item.id !== id )
);
};


const [switche, setswitch] = useState(null);

const flipswitch = (id) => {
    // setswitch(prev => !prev)
    setswitch(id)
    console.log(switche)
  
}
const [updatevalinput,Setupdatevalinput] = useState("")

const update = (id) =>{

  if(updatevalinput.trim() === "") return 

    setfooditem((prev)=> prev.map((item) => item.id === id ? {...item , name:updatevalinput} : item))
    Setupdatevalinput("")
    setswitch(null)
}

  return (
    <>
      <Container>
        <Input add={add} value={inputval} handelonchange={setinputval} />
        <Error fooditem={fooditem} />
        <Fooditems
          fooditem={fooditem}
          handleonclick={handleonclickcolor}
          remove={removeitem}
        
          switche={switche}
          Changeswitch = {flipswitch}

          updateitem = {update}
          updateinputchange = {Setupdatevalinput}
          UPinput = {updatevalinput}
        />
        
      </Container>
    </>
  );
}

export default App;
