import { Route, Switch } from "react-router-dom";

import Landing from "./views/landing/landing.component";
import Home from "./views/home/home.component";
import Detail from "./views/detail/detail.component";
import Create from "./views/create/create.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/home/:id" component={Detail} />
        <Route exact path="/home" component={Home} />
        <Route path="/create" component={Create} />
      </Switch>
    </div>
  );
}

export default App;
