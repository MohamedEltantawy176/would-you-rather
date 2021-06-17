import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import  {
    Segment,
    Header,
    Loader,
    Dimmer,
    Form,
    Image,
    Grid
} from 'semantic-ui-react'

import { handleSaveQuestion } from '../actions/questions'


export class NewPost extends Component {
            state = { 
                isValid: false,
                isLoading: false,
                firstOption: '',
                secondOption: ''
             }

             handleOnChange = (e) =>{
                 this.setState({ [e.target.id]: e.target.value })
             }
             handleOnSubmit = (e) => {
                 e.preventDefault()
                 const { authedUser, handleSaveQuestion } = this.props
                 const { firstOption, secondOption} = this.state

                 new Promise((res,rej) => {
                     this.setState({ isLoading: true})
                     handleSaveQuestion(firstOption, secondOption, authedUser)
                     setTimeout(() => res('success'), 500)
                 }).then(() => {
                     this.setState({
                         firstOption:'',
                         secondOption:''
                     })
                     this.setState({ isValid: true })
                 })
             }

            render() { 
                console.log('this.props', this.props)
                const disabled =  this.state.firstOption === '' || this.state.secondOption === ''
                if (this.state.isValid ===  true ){
                    return <Redirect to='/'/>
                }
                return ( 
                    <div>
                    <Segment.Group>
                        <Header as='h3' textAlign='centered' block attached='top' color = 'blue'>
                            Create a New Poll
                        </Header>
                        <Grid padded>
                            <Grid.Column>
                                {this.state.isLoading && (
                                    <Dimmer active inverted>
                                        <Loader content='Updating'/>
                                    </Dimmer>
                                )}
                                
                                <Header textAlign = 'centered'>Would You Rather ...</Header>
                                <Form onSubmit={this.handleOnSubmit}>
                                    <Form.Input
                                        id='firstOption'
                                        placeholder='Enter option one...'
                                        value={this.state.firstOption}
                                        onChange={this.handleOnChange}
                                        required
                                    />
                                    <Header textAlign= 'centered' color = 'blue'>or</Header>
                                    <Form.Input
                                        id='secondOption'
                                        placeholder='Enter option two...'
                                        value={this.state.secondOption}
                                        onChange={this.handleOnChange}
                                        required
                                    />
                                    <Form.Button primary size='tiny' fluid disabled={disabled}>
                                        Submit
                                    </Form.Button>
                                </Form>
                            </Grid.Column>
                        </Grid>
                    </Segment.Group>
                    <Image src ='https://i.postimg.cc/fRjv3YkM/depositphotos-78309252-stock-illustration-question-flat-blue-color-icon.jpg' size = 'medium' centered>
                        
                    </Image>
                    </div>
                 );
            }
        }
 
function mapStateToProps({authedUser}) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps, { handleSaveQuestion}) (NewPost);