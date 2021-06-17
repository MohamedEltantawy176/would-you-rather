import React, { Component } from 'react';
import { Redirect, BrowserRouter as Router, Route , Switch} from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import HomePage from './HomePage'
import Login from './login/LoginPage'
import NavBar from './NavBar'
import UserCard from './UserCard'
import NoMatch from './NoMatch'
import Leaderboard  from './Leaderboard'
import NewPost from './NewPost'
import { Fragment } from 'react';
import LoadingBar from 'react-redux-loading'


class App extends Component {
  componentDidMount(){
    this.props.handleInitialData()
  }
  
  render() { 
    
    const { authedUser } =  this.props
    return (  
      <div>
      <LoadingBar/>
      <Router>
          <div className='App'>
          {authedUser === null ? (
            <Fragment>
             
            <Route render={() => ( 
              <ContentGrid>
                <Login/>
              </ContentGrid>
             
            )}
            />
            </Fragment>
          ):(
            <div>
            <NavBar/>
            <ContentGrid>
            <Switch>
                  <Route exact path='/' component={HomePage} />
                  <Route exact path='/questions/no_id' component={NoMatch} />
                  <Route exact path='/questions/:question_id' component={UserCard}/>
                  <Route exact path='/add' component={NewPost}/>
                  <Route exact path='/leaderboard' component={Leaderboard}/>
                  <Route  component={NoMatch}/>
                  
                  
                  
                </Switch>
            </ContentGrid>
            </div>
          )}
          </div>
          
      </Router> 
      </div>
    );
  }
}

const ContentGrid = ({ children }) => (
  <Grid padded='vertically' columns={1} centered>
    <Grid.Row>
      <Grid.Column style={{ maxWidth: 600}}>{children}</Grid.Column>
    </Grid.Row>
  </Grid>
);

function mapStateToProps({authedUser}) {
  
  return {
    authedUser
  }
}
 
export default connect(mapStateToProps, { handleInitialData })(App);