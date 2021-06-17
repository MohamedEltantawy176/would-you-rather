import React from 'react';
import {
     Grid,
     Dimmer,
     Loader
 } from 'semantic-ui-react';


const Layout = ({ image, form, loading}) => (
    <div>
        <Grid padded textAlign='center'>
            <Grid.Row className='login'>
                <Grid.Column width={12}>
                    {loading === true && (
                        <Dimmer active inverted>
                            <Loader inverted content='Loading'/>
                        </Dimmer>
                    )}
                    {image}
                    <br/>
                    {form}
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </div>
)







export default Layout

