import { saveQuestion } from '../utils/api';
import { questionToUser } from './users';


export const GET_QUESTIONS = 'GET_QUESTIONS'
export const ANSWER_TO_QUESTION = 'ANSWER_TO_QUESTION '
export const ADD_QUESTION = 'ADD_QUESTION'


export function getQuestions(questions) {
    
    return{
        type: GET_QUESTIONS,
        questions
    }
}

export function answerToQuestion(authedUser, qid, answer) {
    
    return{
        type: ANSWER_TO_QUESTION ,
        authedUser,
        qid,
        answer
    }
}

function addQuestion(question) {
    return{
        type: ADD_QUESTION,
        question
    }
}

export function handleSaveQuestion(optionOneText, optionTwoText, author) {
    return dispatch => {
        return saveQuestion({optionOneText, optionTwoText, author}).then(
            question => {
                dispatch(addQuestion(question))
                dispatch(questionToUser(question))
            }
        )
    }
}