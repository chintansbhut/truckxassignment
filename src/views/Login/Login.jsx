import React, { useState } from 'react'
import { Button, Form, Grid, Header, Segment, Message } from 'semantic-ui-react'

const Login = (props) => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const submitLoginDetails = () => {
        const loginData = {};
        loginData.email = userEmail;
        loginData.password = userPassword;
        props.login(loginData);
    }
    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                    Log-in to your account
                </Header>
                {props.isError && <Message negative>
                    <Message.Header>{props.error}</Message.Header>

                </Message>}
                <Form size='large' onSubmit={submitLoginDetails}>
                    <Segment stacked>
                        <Form.Input fluid icon='user' value={userEmail} iconPosition='left' placeholder='E-mail address' onChange={(event) => setUserEmail(event.target.value)} />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                            value={userPassword}
                            onChange={(event) => setUserPassword(event.target.value)}
                        />

                        <Button color='teal' fluid size='large' type='submit'>
                            Login
          </Button>
                    </Segment>
                </Form>
            </Grid.Column>
        </Grid>
    )
}



export { Login }
