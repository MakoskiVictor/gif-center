import "./App.css";
import { Route } from 'wouter'
import { Home } from './components/pages/home/Home'
import gifPlace from '../public/gifPlace.gif'

function App(): JSX.Element {

  return (
    <div className="App">
      <div className="imageContainer">
        <img className="gifLogo" src={gifPlace} alt="gif-Place-logo" />
      </div>
      <Route path="/" component={Home} />
    </div>
  );
}

export default App;
