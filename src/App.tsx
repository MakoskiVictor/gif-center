import "./App.css";
import { Link } from "wouter";
import { Route } from 'wouter'
import { Home } from './pages/Home/Home'
import { Detail } from "./pages/Detail/Detail"
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import gifPlace from '../src/assets/gifPlace.gif'

function App(): JSX.Element {

  return (
    <div className="App">
      <div className="imageContainer">
      <Link to='/'>
        <img className="gifLogo" src={gifPlace} alt="gif-Place-logo" />
      </Link>
      </div>
      <Route path="/" component={Home} />
      <Route path="/gif" component={Detail} />
      <Route path="/:rest*"  component={ErrorPage} />
    </div>
  );
}

export default App;
