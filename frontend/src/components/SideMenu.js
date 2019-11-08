import React, {Component} from 'react'
import {Sidebar, Menu} from 'semantic-ui-react'
class SideMenu extends Component{
    render(){
        return(
                <Sidebar animation='push' visible='true' direction='left'>
                <Menu secondary vertical>
                        <Menu.Item>Index</Menu.Item>
                        <Menu.Item>Income</Menu.Item>
                        <Menu.Item>Expenses</Menu.Item>
                        <Menu.Item>Savings</Menu.Item>
                    </Menu>
                </Sidebar>
        )
    }
}

export default SideMenu