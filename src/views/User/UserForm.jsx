import React, { useState } from "react";
import {
    Button,
    Form,
    Input,
} from "semantic-ui-react";
import { Link } from "react-router-dom";


const UserForm = (props) => {
    const [name, setName] = useState(props.user.name || '');
    const [username, setUserName] = useState(props.user.username || '');
    const [email, setEmail] = useState(props.user.email || '');
    const [phone, setPhone] = useState(props.user.phone || '');

    const submitHandle = () => {
        const user = {};
        user.name = name;
        user.email = email;
        user.username = username;
        user.phone = phone;
        if (props.user)
            user.id = props.user.id
        props.handleSubmit(user)
    }
    return (
        <Form onSubmit={submitHandle}>
            <Form.Field
                control={Input}
                label=" Name"
                name="name"
                placeholder="Name"
                onChange={(event) => setName(event.target.value)}
                value={name}
            />
            <Form.Field
                control={Input}
                label="User Name"
                name="username"
                placeholder="User Name"
                onChange={(event) => setUserName(event.target.value)}
                value={username}
            />
            <Form.Field
                fluid
                control={Input}
                label="Email"
                name="email"
                placeholder="Email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
            />
            <Form.Field
                fluid
                label="Phone"
                placeholder="Phone"
                control={Input}
                name="phone"
                onChange={(event) => setPhone(event.target.value)}
                value={phone}
            />
            <Form.Group inline>
                <Form.Field control={Button} color="teal" size="small" type="submit">
                    Submit
            </Form.Field>
                <Form.Button as={Link} to="/users" className="ui button">Cancel</Form.Button>
            </Form.Group>

        </Form>
    )
}

export { UserForm }