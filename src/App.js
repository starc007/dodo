import "./App.css";
import Header from "./components/Navbar/Header";
import Home from "./pages/Home";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Pricing from "./pages/Pricing";
import Feature from "./pages/Feature";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/cms-features" component={Feature} />
      </Switch>
    </Router>
  );
}

export default App;
