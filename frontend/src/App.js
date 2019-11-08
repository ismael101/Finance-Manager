import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Expenses from './components/Expenses'
import Income from './components/Income'
import Index from './components/Index'
import Navbar from './components/Navbar'
import SideMenu from './components/SideMenu'
import Error from './components/Error'
import Savings from './components/Savings'
import {Provider} from 'react-redux'
import store from './store'
import {Sidebar} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <Sidebar.Pushable>
    <SideMenu/>
        <Sidebar.Pusher>
        <Navbar/>
      <Router>
        <Switch>
        <Route path='/' exact component={Index}/>
        <Route path='/income' component={Income}/>
        <Route path='/expenses' component={Expenses}/>
        <Route path='/savings' component={Savings}/>
        <Route path='*' component={Error}/>
        </Switch>
      </Router>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
    </div>
    </Provider>
  );
}

export default App;
