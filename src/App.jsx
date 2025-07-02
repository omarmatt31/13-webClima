import "bootstrap/dist/css/bootstrap.min.css";
import FormularioConsulta from "./components/FormularioConsulta";

function App() {
  return (
    <>
    <main>
      <h1 className="text-center my-4">Estado Climatico</h1>
      <FormularioConsulta></FormularioConsulta>
    </main>
    <footer className="bg-dark text-light text-center py-3">
      <p>💻 Omar Mattos 💻</p>
      <p>&copy; Todos los derechos reservados</p>
    </footer>
    </>
  )
}

export default App
