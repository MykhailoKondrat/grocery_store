import React from 'react';
import './App.css';
import  {
  Redirect,
  Route,
  withRouter,
  Switch,
} from 'react-router-dom';
import ProductDetails from './containers/ProductDetails/ProductDetails';
import GroceryErrands from './components/GroceryErrands/GroceryErrands';
function App() {
  return (
    <>
      <Switch>
        <Route path="/:id">
          <ProductDetails/>
        </Route>
        <Route path="/" >
            <GroceryErrands/>
        </Route>
        <Redirect to="/"/>
      </Switch>
    
      
    </>
  )
}

export default withRouter(App);

