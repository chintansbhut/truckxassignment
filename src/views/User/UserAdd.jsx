import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UserForm } from './UserForm';
import { createUser } from "../../actions/usersAction";
import { Segment } from 'semantic-ui-react';

class AddUser extends Component {
    submitValues = (values) => {
        let newValue = { ...values };
        this.props.createUser(newValue);
    }
    render() {
        return (
            <React.Fragment>
                <Segment>
                    <h1>User Add</h1>
                    <UserForm handleSubmit={this.submitValues}
                        user={{
                            name: "",
                            username: '',
                            phone: '',
                            email: ''
                        }}
                    />
                </Segment>

            </React.Fragment>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersData.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createUser: (user) => dispatch(createUser(user))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);