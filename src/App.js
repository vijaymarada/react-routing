import './App.css';
import Home from './RoutingComponents/Home'
import Contact from './RoutingComponents/Contact'
import Product from './RoutingComponents/Product';
import Items from './RoutingComponents/Items'
import About from './RoutingComponents/About'
import {  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams } from 'react-router-dom';
import TodoById from './RoutingComponents/TodoById'
import Topics from './RoutingComponents/Topics';

function App() {
  return (
// uncomment this for pure routing ex

    // <div className="App">
    //   <BrowserRouter>
    //     <Switch>
    //       <Route path="/" exact={true}><Home></Home></Route>
    //       <Route path="/contact" exact={true}><Contact></Contact></Route>
    //       <Route path="/product" exact={true}><Product></Product></Route>
    //       <Route path="/items" exact={true}><Items></Items></Route>
    //       <Route path="/todoById" exact={true}><TodoById></TodoById></Route>

    //     </Switch>

    //     <Link to="/">Home</Link><br />
    //     <Link to="/contact">Contact</Link><br />
    //     <Link to="/product">Product</Link><br />
    //     <Link to="/items">Items</Link><br />
    //     <Link to="/todoById">TodoById</Link><br />

    //   </BrowserRouter>
    // </div>

    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
