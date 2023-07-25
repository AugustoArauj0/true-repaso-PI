import Home from "./views/home/home.component"
import Create from "./views/Create/create.component"
import Detail from "./views/Detail/detail.component"

import './App.css';

function App() {
  return (
    <div className="App">
      <Home/>
      <Detail/>
      <Create/>
    </div>
  );
}

export default App;
