import "./App.css";
import Navbar from "./components/Navbar";
import WelcomePage from "./components/WelcomePage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import ViewPage from "./components/ViewPage";
import { BuyNowPage } from "./components/BuyNowPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
      <Switch>
        <Route path="/viewpage" exact>
          <ViewPage />
        </Route>
      </Switch>
      <Switch>
        <Route path="/buynowpage" exact>
          <BuyNowPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
