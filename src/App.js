import "./App.css";
import { renderRoutesHome } from "./routes";
import PageNotFound from "./containers/PageNotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./containers/HomeTemplate/_component/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        {renderRoutesHome()}
        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
