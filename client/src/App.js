import React from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import './App.css';
import {Row, Container, Col, Card, Nav, Navbar, ListGroup} from 'react-bootstrap'
import Expenses from './components/Expenses'
import Income from './components/Income'
import Index from './components/Index'
import Savings from './components/Savings'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import configStore from './store'

function App() {
  const {persistor, store} = configStore()
  return (
    <div className="App">
      <Navbar variant="dark">
        <Navbar.Brand style={{color:"#52e3c2"}}>Finance Manager</Navbar.Brand>
      </Navbar>
      <Container fluid>
        <Row>
          <Col sm={2}>
            <Card bg='dark' className='mt-5 mr-5' style={{height:500}}>
              <Card.Header>
                Menu
              </Card.Header>
              <Card.Body>
              <Nav defaultActiveKey="/" className="flex-column">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href='/income'>Income</Nav.Link>
              <Nav.Link href='/expenses'>Expenses</Nav.Link>
              <Nav.Link href='/savings'>Savings</Nav.Link>
            </Nav>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={10}>
            <Router>
            <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <Switch>
              <Route path='/' exact component = {Index}/>
              <Route path='/income' component = {Income}/>
              <Route path='/savings' component = {Savings}/>
              <Route path='/expenses' component = {Expenses}/>
              </Switch>
              </PersistGate>
              </Provider>
          </Router>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
