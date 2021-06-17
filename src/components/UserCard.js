import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {
    Segment,
    Header,
    Image,
    Grid
} from 'semantic-ui-react'

import Poll from './Poll';


const pollTypes = {
    POLL_TEASER: 'POLL_TEASER',
    POLL_RESULT:'POLL_RESULT',
    POLL_QUESTION:'POLL_QUESTION'
    
}



export class UserCard extends Component {
   
        render() { 
            
            const { author, question, pollType,  noPath, unanswered, user, history  } = this.props
            
            if (noPath === true){
                return <Redirect to= '/questions/no_id' />
            }
            const nameColor = unanswered === true ? 'red' : 'blue'
            const borderTop = `2px solid ${nameColor}`
            return ( 
                <Segment.Inline vertical>
                    <Header
                        as='h5'
                        textAlign='center'
                        block
                        attached='top'
                        style={{
                            borderTop: borderTop
                        }}
                        color = {nameColor }
                    >
                        <Image  inline spaced= 'right' circular src={author.avatarURL}/>
                        {author.name} 
                    </Header>
                    <Grid divided padded >
                        <Grid.Row>
                            
                            <Grid.Column width={17}>
                                <Poll 
                                    pollType={pollType}
                                    question={question}
                                    unanswered={unanswered}
                                    user = {user}
                                    history = {history}
                                    
                                />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment.Inline>
                
            );
        }
    }
    function mapStateToProps({ users, questions, authedUser}, { match, history, question_id}){
        let question, author, pollType, noPath = false
        const user = users[authedUser]
        if(question_id !== undefined) {
            question = questions[question_id]
            author = users[question.author]
            pollType = pollTypes.POLL_TEASER
        }else {
                const { question_id } = match.params
                question = questions[question_id]
                const user = users[authedUser]
                
                if(question === undefined){
                    noPath= true
                }else {
                    author = users[question.author]
                    pollType = pollTypes.POLL_QUESTION
                
                if(Object.keys(user.answers).includes(question.id)) {
                    pollType = pollTypes.POLL_RESULT
                }
            }
        }
       

        return {
            question,
            author,
            pollType,
            noPath,
            user,
            history
            
        }
        
    }
 
export default connect(mapStateToProps)(UserCard);