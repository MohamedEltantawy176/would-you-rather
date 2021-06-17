import React, { Component, Fragment } from 'react'
import { Form, Header, Menu, Image,Loader, Dimmer} from 'semantic-ui-react'
import { setAuthedUser } from '../../actions/authedUser'
import { connect } from 'react-redux'




class TheMenu extends Component {
    state = { 
        value: '',
        isLoading: false
        
     }
    
    handleItemOnClick = (e,{ value } ) => {
        this.setState({ value })
    }
    handleOnSubmit = e => {
        e.preventDefault()
        const { setAuthedUser } =this.props
        const authedUser = this.state.value

        new Promise((res, rej) => {
            this.setState({ isLoading: true})
            setTimeout(() => res(), 500)
        })
        .then(() => setAuthedUser(authedUser))
        
    }
    

    render() { 
        const { value } =this.state
        const disabled = value === '' ? true : false
        const { users } = this.props
        return ( 
            
            <Fragment>
                
                <Form onSubmit = {this.handleOnSubmit} >
                    <Header as = 'h2' color = 'black'>
                        Choose a User to login !
                    </Header>
                    <br/>
                    {this.state.isLoading && (
                                    <Dimmer active inverted>
                                        <Loader content='Updating'/>
                                    </Dimmer>
                                )}
                        <Menu  selection vertical fluid color = 'blue' >
                            {users.map(user =>(
                                <Menu.Item 
                                    
                                    key= {user.id}
                                    selection
                                    value = {user.id}
                                    
                                    onClick={this.handleItemOnClick}
                                    active=  {value === user.id}
                                    
                                >
                                <Image centered circular inline size = 'mini' src= {user.avatarURL}/>
                                    
                                <br/>
                                {user.name}</Menu.Item>
                            ))}
                        </Menu>
                        <Form.Button 
                        icon = 'play'
                        content = 'login'
                        primary
                        disabled= {disabled}
                        fluid
                        onClick = {this.handleSubmit2}
                        
                    />
                </Form>
            </Fragment>
         );
    }
}    


function mapStateToProps({ users }) {
    
    return {
        users: Object.values(users),
        
    }
    
}

export default connect(mapStateToProps, { setAuthedUser })(TheMenu);