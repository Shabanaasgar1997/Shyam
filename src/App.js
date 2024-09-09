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
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import Back from "./Components/Hooks/useCallBack/Back";
import Signup from "./CRUD/Signup";
import Read from "./CRUD/Read";

const Virat = () => {
  alert("hey u clicked");
};

function App() {
  let name = "Shyam";
  let age = 54564;
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/read" element={<Read />} />
        <Route path="/callback" element={<Back />} />
        <Route path="*" element={<PageNotFound />}>
          <Route path=":id" element={<PageNotFound />} />
        </Route>
      </Routes>
      {/* <Memoization /> */}
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
