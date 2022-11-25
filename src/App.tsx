import "./App.css";
import { Route } from 'wouter'
import { Home } from './components/pages/home/Home'

function App(): JSX.Element {

  return (
    <div className="App">
      <Route path="/" component={Home} />
    </div>
  );
}

export default App;
