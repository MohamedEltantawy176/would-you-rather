import React from 'react';
import Question from './Question'
import Teaser from './Teaser'
import  Result  from './Result';









const Poll = props => {
    const { pollType, question, unanswered, user, history } = props
    
   
    const pollTypes = {
        POLL_TEASER: 'POLL_TEASER',
        POLL_RESULT:'POLL_RESULT',
        POLL_QUESTION:'POLL_QUESTION'
        
    }
    
    switch (pollType) {
        case pollTypes.POLL_TEASER:
            return <Teaser question={question} unanswered={unanswered}/>
        case pollTypes.POLL_RESULT:
            return <Result question={question} user ={user}  history = { history }/>
        case pollTypes.POLL_QUESTION:
            return <Question question={question} />
        default:
            return;
        
    }
}

export default Poll