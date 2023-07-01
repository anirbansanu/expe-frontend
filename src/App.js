import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import GridTile from './component/GridTile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch  } from '@fortawesome/free-solid-svg-icons';
import Header from './component/Header';
function App() {
  return (
    
    <div className="container my-2">
      <Header/>
      <div className="row m-0 justify-content-center my-2">
        <GridTile text="Tile 1" icon={faHome} bg="#fa8231"/>
        <GridTile text="Tile 2" icon={faSearch} bg="#20bf6b" />
        <GridTile text="Tile 1" icon={faHome} bg="" />
        <GridTile text="Tile 2" icon={faSearch} bg="#fa8231" />
        <GridTile text="Tile 1" icon={faHome} bg="" />
        <GridTile text="Tile 2" icon={faSearch} bg="#20bf6b" />
        {/* Add more GridTile components as needed */}
      </div>
    </div>
  );
}

export default App;
