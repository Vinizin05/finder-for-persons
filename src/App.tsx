import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h2>Finder persons on github</h2>
      <Outlet />
    </div>
  );
}

export default App;
