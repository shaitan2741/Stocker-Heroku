import React from 'react';
import './App.css';
import Header from './Components/HeaderComponent';
import particle from './Components/ParticleComponent.js';
import ManageStocks from './StockManagement/ManageStocks';
import AiPrediction from './Prediction/AiPrediction.js';
import About from './Components/AboutComponent';

import { Switch, Route, Redirect,withRouter,BrowserRouter } from 'react-router-dom';
function App() {
  return (
    
    <BrowserRouter>
        
        
      
    <Header />
    
    <Switch>
    <Route exact path='/about' component={About}/>
    <Route exact path='/home/' component={particle}/>
    <Route exact path='/market' component={ManageStocks} />
    <Route exact path='/predict' component={AiPrediction} />
    <Redirect to='/about'/>
    </Switch>
    {/* <Footer /> */}
    
  
    </BrowserRouter>
  );
}

export default App;
