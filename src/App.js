import './App.css';
import Home from './RoutingComponents/Home'
import Contact from './RoutingComponents/Contact'
import Product from './RoutingComponents/Product';
import Items from './RoutingComponents/Items'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true}><Home></Home></Route>
          <Route path="/contact" exact={true}><Contact></Contact></Route>
          <Route path="/product" exact={true}><Product></Product></Route>
          <Route path="/items" exact={true}><Items></Items></Route>
        </Switch>
        
        <Link to="/">Home</Link><br />
        <Link to="/contact">Contact</Link><br />
        <Link to="/product">Product</Link><br />
        <Link to="/items">Items</Link><br />

      </BrowserRouter>
    </div>
  );
}

export default App;
