import { Route, Switch } from "react-router-dom";

import Landing from "./views/landing/landing.component";
import Home from "./views/home/home.component";
import Detail from "./views/detail/detail.component";
import Create from "./views/create/create.component";
import Navbar from "./components/navbar/navbar.component";
import About from "./views/about/about.component";
import Update from "./views/update/update.component";
import { useLocation } from "react-router-dom";

import "./App.css";

// La app contiene el acceso a todos los demas componentes gracias a estar "abrazada" por el Browser Router.
function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && location.pathname !== "/home" ? (
        <Navbar />
      ) : null}
      <Switch>
        <Route path={"/update/:id"} component={Update} />
        <Route path={"/about"} component={About} />
        <Route exact path={"/"} component={Landing} />
        <Route exact path={"/home"} component={Home} />
        <Route path={"/create"} component={Create} />
        <Route path={"/home/:id"} component={Detail} />
      </Switch>
    </div>
  );
}

export default App;
