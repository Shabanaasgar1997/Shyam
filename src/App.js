import Home from "./Components/Home";
import Products from "./Components/Products";
import State from "./Components/States/State";

const Virat = () => {
  alert("hey u clicked");
};

function App() {
  let name = "Shyam";
  let age = 54564;
  return (
    <>
      {/* <Products /> */}
      <State />
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
