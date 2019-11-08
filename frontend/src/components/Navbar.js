import React, {Component} from 'react'
import {Menu} from 'semantic-ui-react'

class Nav extends Component{
    render(){
        return(
                <Menu>
                  <Menu.Item header>
                    Finance Manager
                  </Menu.Item>  
                </Menu>
        )
    }
}
export default Nav