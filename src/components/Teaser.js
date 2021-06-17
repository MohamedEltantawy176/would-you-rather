import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { Header, Button } from 'semantic-ui-react'
import { colors } from '../utils/helper'


export class Teaser extends Component {
    state = { 
        pollView: false
     }
    
    handleClick = (e) => {
        this.setState(prevState => ({
            pollView: !prevState.pollView
        }))
    }

    render() { 
        const { question, unanswered } = this.props
        const colorButton = unanswered === true ? colors.green : colors.blue
        const contentButton = unanswered === true ? 'Answer' : 'Results'

        if (this.state.pollView === true) {
            return <Redirect push to= {`/questions/${question.id}`}/>
        }
        return ( 
            <Fragment>
                <Header
                    as='h5'
                    textAlign='centered'
                >
                    Would you rather
                </Header>
                <p style={{ textAlign: 'center '}}>
                    {question.optionOne.text}
                    <br/>
                    or....
                </p>
                <Button
                    color={colorButton.name}
                    size='tiny'
                    fluid
                    onClick={this.handleClick}
                    content={contentButton}
                />    
            </Fragment>
         );
    }
}
 
export default Teaser;