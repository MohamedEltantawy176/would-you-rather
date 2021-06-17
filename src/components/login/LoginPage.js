import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react'
import TheHeader from './TheHeader'
import Layout from './Layout';
import Logo from './Logo';
import TheMenu from './TheMenu';


class LoginPage extends Component {
    
     
    render() { 
        return ( 
            
            <React.Fragment>
                
                <Segment.Group>
                       
                    <TheHeader/>
                    <Layout
                        image={<Logo/>}
                        form={<TheMenu />}
                        
                        
                    />
                </Segment.Group>
                
            </React.Fragment>

         );
    }
}


  

export default LoginPage;