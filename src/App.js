import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos"}/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
