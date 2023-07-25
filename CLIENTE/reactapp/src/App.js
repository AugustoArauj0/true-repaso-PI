import Home from "./views/home/home.component.jsx"
import Create from "./views/create/create.component.jsx"
import Detail from "./views/detail/detail.component.jsx"

import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
      <Detail />
      <Create />
    </div>
  );
}

export default App;
