import "./App.css";
import { Route, Link, Switch } from "wouter";
import { Home } from "./pages/Home/Home";
import { Detail } from "./pages/Detail/Detail";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { SearchResults } from "./pages/SearchResults/SearchResults";
import gifPlace from "../src/assets/gifPlace.gif";
import { GifsContextProvider } from "./context/GifsContext";

function App(): JSX.Element {
  return (
    <div className="App">
      <div className="imageContainer">
        <Link to="/">
          <img className="gifLogo" src={gifPlace} alt="gif-Place-logo" />
        </Link>
      </div>
      <GifsContextProvider>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/gif/:id" component={Detail} />
        <Route path="/search/:keyword" component={SearchResults} />
        <Route component={ErrorPage} />
      </Switch>
      </GifsContextProvider>
    </div>
  );
}

export default App;
