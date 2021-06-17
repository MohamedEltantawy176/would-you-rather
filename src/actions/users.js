import { answerToQuestion } from './questions'
import { saveQuestionAnswer } from '../utils/api';
export const GET_USERS = 'GET_USERS'
export const ANSWER_TO_USER = 'ANSWER_TO_USER'
export const QUESTION_TO_USER = 'QUESTION_TO_USER'


export function getUsers(users) {

    return{
        type: GET_USERS,
        users
    }
}

function answerToUser(authedUser, qid, answer){
    return{
        type: ANSWER_TO_USER,
        authedUser,
        qid,
        answer
    }
}

export function handleSaveQuestionAnswer(authedUser, qid, answer) {
    return dispatch => {
        dispatch(answerToUser(authedUser, qid, answer))
        dispatch(answerToQuestion(authedUser, qid, answer))


        return saveQuestionAnswer(authedUser, qid, answer)
        .catch((e) => {
            console.warn('something not right in handleSaveQuestionAnswer', e);
        })
    }

}
export function questionToUser({ id, author}) {
    return {
        type: QUESTION_TO_USER,
        id,
        author
    }
}