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
    { id: 3, name: "pasta", isactive: false },
    { id: 4, name: "fries", isactive: false },
    { id: 5, name: "samosa", isactive: false },
  ]);

  const [inputval, setinputval] = useState([]);

  const add = (e) => {

    setfooditem([
      { id: Date.now(), name: inputval, isactive: false },
      ...fooditem,
    ]);
    // setfooditem([{id:Date.now(),name:inputval
    //   ,isactive:false,...fooditem}])
    setinputval("");
  };

  return (
    <>
      <Container>
        <Input add={add} value={inputval} handelonchange={setinputval} />
        <Error fooditem={fooditem} />
        <Fooditems fooditem={fooditem} />
      </Container>
    </>
  );
}

export default App;
