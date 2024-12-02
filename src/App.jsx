import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"


function App() {

  return (
    <div>

      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a Pc Lux, su tienda de hardware de confianza"} />
      
    </div>

  )
}

export default App
