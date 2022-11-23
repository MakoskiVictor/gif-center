import "./App.css";

function App(): JSX.Element {


  const a = "asd";
  const b = 2;
  const e = "asdasd" || 2;

  return (
    <div className="App">
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more {e}
      </p>
    </div>
  );
}

export default App;
