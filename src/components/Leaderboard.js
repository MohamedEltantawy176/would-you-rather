import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {
    Segment,
    Label,
    Image,
    Header,
    Grid
} from 'semantic-ui-react'

const prizeColor = ['yellow', 'white', 'orange']

export class Leaderboard extends Component {
            
            render() { 
                const { data }= this.props
                
                return ( 
                    <Fragment>
                        {data.map((user, idx)=>(
                            <Segment.Group key={user.id}>
                                <Label circular size='massive' attached='top' image ='https://i.postimg.cc/SKfcs4TR/trophy.png' color={prizeColor[idx]}/>
                                <Grid divided padded>
                                    <Grid.Column>
                                        <Grid.Column width={4} verticalAlign='middle'>
                                            <Image circular src={user.avatarURL} size = 'small' centered/>
                                        </Grid.Column>
                                        <br/>
                                        <Grid.Column width={8}>
                                            <Header as='h3' textAlign='centered' color = 'blue'>
                                                {user.name}
                                            </Header>
                                            <Segment.Group>
                                                <Header as='h5' block attached='top' content='Created Questions' color = 'black' textAlign='left' />
                                                <Segment>
                                                    <Label circular color='green' size='big'  attached = 'top' >
                                                        {user.qCount}
                                                    </Label>
                                                </Segment>
                                            </Segment.Group>
                                        </Grid.Column>
                                        <Grid.Column width= {4} >
                                            <br/>
                                            <Segment.Group>
                                                <Header as='h5' block attached='top' content='Total Questions' color = 'black' textAlign='left' />
                                                <Segment>
                                                    <Label circular color='blue' size='big'  attached = 'top' >
                                                        {user.qCount + user.aCount}
                                                    </Label>
                                                </Segment>
                                            </Segment.Group>
                                        </Grid.Column>
                                    </Grid.Column>
                                </Grid>
                                <br/>
                            </Segment.Group>
                        ))}
                        <br style={{ line:50 }}/>
                        <Image src ='https://i.postimg.cc/7ZPPgyXj/leaderboard.png' 
                                 size = 'medium' centered>
                        
                        </Image>
                    </Fragment>
                )
            }
        }


function mapStateToProps({ users }){
    const data = Object.values(users)
    .map(user => ({
        id: user.id,
        name: user.name,
        avatarURL: user.avatarURL,
        aCount: Object.values(user.answers).length,
        qCount: user.questions.length,
        total: Object.values(user.answers).length + user.questions.length
    }))
    .sort((a, b) => a.total -b.total)
    .reverse()
    .slice(0, 3)
    return {
        
        data
    }
}
 
export default connect(mapStateToProps) (Leaderboard);