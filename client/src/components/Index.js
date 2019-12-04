import React, {Component} from 'react'
import { connect } from 'react-redux';
import {fetchIncome} from '../actions/incomeAction'
import {fetchExpenses} from '../actions/expensesAction'
import {fetchSavings} from '../actions/savingsActions'
import {Card, Nav, Container, CardDeck, Tab} from 'react-bootstrap'
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
class Index extends Component{
    constructor(props){
        super(props)
        this.state = {
            income:[],
            savings:[],
            expenses:[],
            incomeTotal:'',
            savingsTotal:'',
            expensesTotal:''
        }
    }
    async componentWillMount(){
        await this.props.fetchIncome()
        await this.props.fetchExpenses()
        await this.props.fetchSavings()
        let months = [1,2,3,4,5,6,7,8,9,10,11,12]
        let income = []
        let expenses = []
        let savings = []
        let incomeTotal = 0
        let savingsTotal = 0
        let expensesTotal = 0
        months.forEach(month => {
            let incomeAmount = 0
            let expensesAmount = 0
            let savingsAmount = 0
            this.props.income.forEach(set => {
                if(set.month == month){
                    incomeAmount = incomeAmount + set.amount
                }
                incomeTotal = incomeTotal + set.amount
            })
            this.props.expenses.forEach(set => {
                if(set.month == month){
                    expensesAmount = expensesAmount + set.amount 
                }
                expensesTotal = expensesTotal + set.amount
            })
            this.props.savings.forEach(set => {
                if(set.month == month){
                    savingsAmount = savingsAmount + set.amount
                }
                savingsTotal = savingsTotal + set.amount
            })
            income.push({name:month,data:incomeAmount})
            savings.push({name:month,data:savingsAmount})
            expenses.push({name:month,data:expensesAmount})
        })
        this.setState({
            income:income,
            savings:savings,
            expenses:expenses,
            incomeTotal:incomeTotal,
            savingsTotal:savingsTotal,
            expensesTotal:expensesTotal
        })
        console.log(this.state)
    }
    render(){    
        return(
            <Container id="index">
                <Tab.Container defaultActiveKey="income">
                   <Card bg="dark" className='mt-5' border='info'>
                   <Card.Header>
                   <Nav variant="pills success info" defaultActiveKey="#income">
                    <Nav.Item>
                        <Nav.Link eventKey='income'>Income</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey='expenses'>Expenses</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey='savings'>Savings</Nav.Link>
                    </Nav.Item>
                    </Nav>
                    </Card.Header>
                    <Card.Body>
                        <Tab.Content>
                            <Tab.Pane eventKey='income'>
                            <div style={{ width: 1000, height: 500}}> 
                            <ResponsiveContainer>
                            <AreaChart id="income" data={this.state.income}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name"/>
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="data" stroke="#fff" fill="#52e3c2" />
                            </AreaChart>
                            </ResponsiveContainer>
                            </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey='expenses'>
                            <div style={{ width: 1000, height: 500 }}>
                            <ResponsiveContainer>
                            <AreaChart id="expenses" data={this.state.expenses}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name"/>
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="data" stroke="#fff" fill="#52e3c2" />
                            </AreaChart>
                            </ResponsiveContainer>
                            </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey='savings'>
                            <div style={{ width: 1000, height: 500 }}>
                            <ResponsiveContainer>
                            <AreaChart id="savings" data={this.state.savings}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name"/>
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="data" stroke="#fff" fill="#52e3c2" />
                            </AreaChart>
                            </ResponsiveContainer>
                            </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Card.Body>
                   </Card>
                   </Tab.Container>
                   <CardDeck className='my-5'>
                       <Card bg="dark" className='text-center' border='info'>
                           <Card.Header>Income Total</Card.Header>
                           <Card.Body>
                           <h2>$ {this.state.incomeTotal}</h2>
                            </Card.Body>
                        </Card>
                        <Card bg='dark' className='text-center' border='info'>
                            <Card.Header>Expenses Total</Card.Header>
                            <Card.Body>
                            <h2>$ {this.state.expensesTotal}</h2>
                            </Card.Body>
                        </Card>
                        <Card bg='dark' className='text-center' border='info'>
                            <Card.Header>Savings Total</Card.Header>
                            <Card.Body>
                            <h2>$ {this.state.savingsTotal}</h2>
                            </Card.Body>
                        </Card>
                   </CardDeck>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    income: state.income.income,
    savings: state.savings.savings,
    expenses: state.expenses.expenses
  });

export default connect(mapStateToProps, {fetchIncome,fetchExpenses,fetchSavings})(Index)