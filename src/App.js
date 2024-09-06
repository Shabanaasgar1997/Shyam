import Home from "./Components/Home";
import Form from "./Components/Hooks/Form";
import Products from "./Components/Products";
import FormValidation from "./Components/States/FormValidation";
import State from "./Components/Hooks/useState/State";
import Effect from "./Components/Hooks/useEffect/Effect";
import ReducerHook from "./Components/Hooks/useReducer/ReducerHook";
import Reference from "./Components/Hooks/useRef/Reference";
import Parent from "./Components/Hooks/useContext/Parent";
import Memoization from "./Components/Hooks/useMemo/Memoization";

const Virat = () => {
  alert("hey u clicked");
};

function App() {
  let name = "Shyam";
  let age = 54564;
  return (
    <>
      <Memoization />
      {/* <Parent /> */}
      {/* <Reference /> */}
      {/* <State /> */}
      {/* <Effect /> */}
      {/* <ReducerHook /> */}
      {/* <Products /> */}
      {/* <State /> */}
      {/* <FormValidation /> */}
      {/* <Form /> */}
      {/* <Home
        username={name}
        userage={age}
        address="Hyderabad"
        num={45}
        Navbar={false}
        Kohli={Virat}
      /> */}
    </>
  );
}

export default App;
