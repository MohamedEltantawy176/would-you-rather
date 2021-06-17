import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {
    Button,
     Menu,
     Image
 } from 'semantic-ui-react'
import { setAuthedUser} from '../actions/authedUser'
import { connect } from 'react-redux'


class NavBar extends Component {
     handleOnLogout = (e) => {
        e.preventDefault()
        this.props.setAuthedUser(null)
        
     }
     render() { 
        const { authedUser, users } = this.props;
        
        
        return ( 
            <Menu pointing secondary color = 'blue'  >
                 <Menu.Menu position = 'left' >
                        <Menu.Item>
                            <span>  
                                <Image
                                    src={users[authedUser].avatarURL}
                                    avatar
                                    spaced='right'
                                    verticalAlign='bottom'
                                    />
                                {users[authedUser].name}
                            </span>  
                        </Menu.Item>
                    </Menu.Menu>
                <Menu.Menu position='right' >
                    <Menu.Item 
                    name='home' 
                    as  = {NavLink}
                    to ='/'
                    exact
                    />
                    <Menu.Item
                    name='new post'
                    as = {NavLink}
                    to ='/add'
                    
                    />
                    <Menu.Item
                    name='leader board'
                    as = { NavLink }
                    to ='/leaderboard'  
                    />
                   
                    <Menu.Item>
                        <Button
                        content='logout'
                        labelPosition='right'
                        
                        color = 'instagram'
                        icon='arrow alternate circle right outline'
                        size='mini'
                        onClick={this.handleOnLogout}
                        />
                    </Menu.Item> 
                </Menu.Menu>
             </Menu>
         );
    }
 }
 
function mapStateToProps({ users, authedUser}) {
    return{
        users,
        authedUser
       
    }
}


export default connect(mapStateToProps, {setAuthedUser}) (NavBar);