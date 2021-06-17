import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { styles } from '../utils/helper'
import {
    Segment,
    Header,
    Progress,
    Icon,
    Button,
    Label,
    Image
} from 'semantic-ui-react'


const VoteLabel = () => (
    <Label color='blue' corner='right' className='vote'>
        <Icon
            name='check circle outline'
            size='big' 
            className='compact'
        />
        
    </Label>
)


export  class Result extends Component {
    
    handleClick = () => {
        this.props.history.push('/')
    }

    render() { 

        const { question, user} = this.props
        const optionOneVotes = question.optionOne.votes.length
        const optionTwoVotes = question.optionTwo.votes.length
        const allVotes = optionOneVotes + optionTwoVotes
        const userVote = user.answers[question.id]
        
        

        let option1 = styles.secondary
        let option2 = styles.secondary

        if (optionOneVotes > optionTwoVotes) {
            option1 = styles.primary;
          } else if (optionTwoVotes > optionOneVotes) {
            option2 = styles.primary;
          }
        
        return ( 
            <Fragment>
                <Header  textAlign='centered' as='h3'>
                    Results
                </Header>
                <Segment
                    color={option1.color}
                    style={{ backgroundColor: `${option1.bgColor}`}}
                >
                    {userVote === 'optionOne' && <VoteLabel/>}
                    <p style ={{ fontWeight: 'bold'}}>
                        {question.optionOne.text}
                    </p>
                    <Progress
                        percent={((optionOneVotes/ allVotes)* 100).toFixed(2)}
                        progress
                        color={option1.color}
                    >
                        {optionOneVotes} out of {allVotes} votes
                    </Progress>
                </Segment>
                <Segment
                    color={option2.color}
                    style={{ backgroundColor: `${option2.bgColor}`}}
                >
                    {userVote === 'optionTwo' && <VoteLabel/>}
                    <p style={{ fontWeight: 'bold'}}>
                        {question.optionTwo.text}
                    </p>
                    <Progress
                        percent={((optionTwoVotes / allVotes) * 100).toFixed(2)}
                        progress
                        color={option2.color}
                    >
                        {optionTwoVotes} out of {allVotes} votes
                    </Progress>
                </Segment>
                <Button 
                    size='tiny'
                    floated='right'
                    onClick={this.handleClick}
                >
                    Back
                </Button>
                <br/>
                <Image src ='https://i.postimg.cc/MTFyVDyj/Chart-Color-series-1-52.png' 
                    size = 'big' centered>
                        
                    </Image>
            </Fragment>
         );
    }
}



 
export default withRouter(Result);