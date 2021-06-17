import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {
    Button,
    Checkbox,
    Form,
    Header,
} from 'semantic-ui-react'
import { handleSaveQuestionAnswer } from '../actions/users'



export class Question extends Component {
        state = { 
            value: '', 
           
        }
        
        handleChange = (e, { value }) => {
            console.log(value);
            this.setState({ value })}

        handleSubmit = (e) => {
            
            e.preventDefault()
            if(this.state.value !== '') {
                const { authedUser, question, handleSaveQuestionAnswer } = this.props
                handleSaveQuestionAnswer(authedUser, question.id, this.state.value)
                 
            }
        }

        render() { 

            const { question} =this.props
            const disabled = this.state.value === '' ? true : false
            return (  
                <Fragment>
                    <Header as= 'h4' textAlign = 'centered' >Would you rather</Header>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Field>
                            <Checkbox
                                label= {question.optionOne.text}
                                name= 'radioGroup'
                                value='optionOne'
                                checked={this.state.value === 'optionOne'}
                                onChange={this.handleChange}
                            />
                            <br/>
                            <Checkbox
                                label= {question.optionTwo.text}
                                name= 'radioGroup'
                                value='optionTwo'
                                checked={this.state.value === 'optionTwo'}
                                onChange={this.handleChange}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Button
                                
                                size='tiny'
                                fluid
                                primary
                                disabled={disabled}
                                content='Submit'
                                
                            />
                        </Form.Field>
                    </Form>
                </Fragment>
        );
    }
}


function mapStateToProps ({ authedUser }){
    
    return {
        authedUser
        
    }
}
 
export default connect(mapStateToProps, { handleSaveQuestionAnswer }) (Question);