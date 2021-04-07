import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UserForm } from './UserForm';
import { updateUser } from "../../actions/usersAction";
import { Segment } from 'semantic-ui-react';

class EditUser extends Component {
    submitValues = (values) => {
        let newValue = { ...values };
        this.props.updateUser(newValue);
    }
    render() {

        return (
            <React.Fragment>
                <Segment>
                    <h1>User Update</h1>
                    <UserForm handleSubmit={this.submitValues}
                        user={this.props.user || {}}
                    />
                </Segment>

            </React.Fragment>

        )
    }
}

const mapStateToProps = (state, ownProps) => {

    return {
        users: state.usersData.users,
        user: state.usersData.users.find(item => item.id == ownProps.match.params.id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateUser: (user) => dispatch(updateUser(user))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);