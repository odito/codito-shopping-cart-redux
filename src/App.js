import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Products from './components/Products';
import Details from './components/Details';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Error from './components/Error';
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
  <Provider store={store}>
      <div className="App ">
     
      {/* navbar */}
      <Navbar />
       <div className=""> 
       <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/about" component={About} />
        <Route exact path="/details/:id" component={Details} />
        <Route  component={Error} />
       </Switch>
       </div>
   
     
   
 
     
      
     
     </div>
  </Provider>
  );
}




export default App;
