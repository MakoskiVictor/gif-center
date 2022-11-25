import "./App.css";
import { Route } from 'wouter'
import { Home } from './components/home/Home'

function App(): JSX.Element {

  return (
    <div className="App">
      <Route path="/home" component={Home} />
    </div>
  );
}

export default App;
