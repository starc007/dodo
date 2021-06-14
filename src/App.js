import "./App.css";
import Header from "./components/Navbar/Header";
import Home from "./pages/Home";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Pricing from "./pages/Pricing";
import Feature from "./pages/Feature";
import Home2 from "./pages/Home2";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home2} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/cms-features" component={Feature} />
      </Switch>
    </Router>
  );
}

export default App;
