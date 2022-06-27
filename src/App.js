import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import Welcome from './components/Welcome/Welcome';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <Welcome name="Libertaria"/>
      <ItemListContainer greeting="Libros para todo gusto. Proximamante!"/>
      <Footer />
    </div>
  );
}

export default App;