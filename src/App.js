import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/header';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import OrderReview from './components/OrderReview/OrderReview';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Shop from './components/Shop/shop';

function App() {
  return (
    <div className="App">
<BrowserRouter>
<Header></Header>
<Switch>
<Route exact path="/">
<Shop></Shop>
</Route>
<Route path="/shop">
<Shop></Shop>
</Route>
<Route path="/inventory">
  <Inventory></Inventory>
</Route>
<Route exact path="/review">
<OrderReview></OrderReview>
</Route>
<Route path="/placeorder">
  <PlaceOrder></PlaceOrder>
</Route>
<Route path="*">
<NotFound></NotFound>
</Route>

</Switch>
</BrowserRouter>

    </div>
  );
}

export default App;
