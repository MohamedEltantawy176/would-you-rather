import React, { Component } from 'react';
import { connect } from 'react-redux'
import  UserCard  from './UserCard';
import { Tab } from 'semantic-ui-react'


export class HomePage extends Component {
    
    render() { 
        const { userDataQuestions  } =this.props
        return <Tab panes= {panes({ userDataQuestions })}  className='tab'/>
         
    }
}

const panes = props => {
    const { userDataQuestions } = props
    return [
        
        {   
            menuItem: { key: 'unanswered', icon: 'envelope', content: 'unanswered', color :'red' },
            render: () => (
                
                <Tab.Pane attached={false} vertical >
                    {userDataQuestions.answeredQuestions.map(question => (
                        <UserCard
                            key={question.id}
                            question_id={question.id}
                            unanswered={true}
                        />
                    ))}
                </Tab.Pane>
            )
        },
        {
            menuItem: { key: 'answered', icon: 'envelope open', content: 'answered', color: 'blue' },
            render: () => (
                
                <Tab.Pane attached={false} vertical>
                    {userDataQuestions.unansweredQuestions.map(question => (
                        <UserCard
                            key={question.id}
                            question_id={question.id}
                            unanswered={false}
                        />
                    ))}
                </Tab.Pane>
               
            )
        }
    ]
}


function mapStateToProps({ authedUser, users, questions}) {
    const answerIds = Object.keys(users[authedUser].answers)

    const answeredQuestions = Object.values(questions)
    .filter(question => !answerIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp)

    const unansweredQuestions = Object.values(questions)
    .filter(question => answerIds.includes(question.id))
    .sort((a,b) => b.timestamp - a.timestamp)


    return {
        userDataQuestions: {
            answeredQuestions,
            unansweredQuestions
        }
    }
}
 
export default connect(mapStateToProps)(HomePage);