import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import Introduce from "./components/Introduce";
import 'normalize.css';


function App() {
  return (
    <div className="App">
        <Header/>
        <Introduce/>
        <Footer/>
    </div>
  );
}

export default App;
