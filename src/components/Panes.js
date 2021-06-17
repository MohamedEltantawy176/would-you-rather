import React from 'react';
import { Tab } from 'semantic-ui-react';
import UserCard from './UserCard'





 const Panes = props => {
    const { userQuestionData } = props
    return [
        {
            menuItem: 'Unanswered',
            render: () => (
                <Tab.Pane>
                    {userQuestionData.answered.map(question => (
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
            menuItem: 'Answered',
            render: () => (
                <Tab.Pane>
                    {userQuestionData.unanswered.map(question => (
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



export default Panes