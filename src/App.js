import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/NavBar/CartWidget/ItemListContainer/ItemListContainer";


function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos"}/>
    </div>
  );
}

export default App;
