import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos"}/>
      <ItemCount initial={1} stock={10} onAdd={(quantity)=> {}}/>
    </div>
  );
}

export default App;
