import logo from "./logo.svg";
import "./App.css";
import Locations from "./components/Locations/Locations";
import Bill from "./components/Bill/Bill";

function App() {
  return (
    <div className="App">
      <Locations />
      <Bill />
    </div>
  );
}

export default App;
