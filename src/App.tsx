import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import "./app.scss";

function App() {
  return (
    <div className="App">
      <section className="header">
        <NavBar />
      </section>
      <Home />
      <section className="footer"></section>
    </div>
  );
}

export default App;
