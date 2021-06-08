import "./App.css";
import Header from "./components/Navbar/Header";
import Home from "./pages/Home";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Pricing from "./pages/Pricing";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pricing" component={Pricing} />
      </Switch>
    </Router>
  );
}

export default App;
