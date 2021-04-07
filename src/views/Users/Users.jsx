import React, { Component } from 'react';
import { Button, Modal, Label, Segment, Table, Image, Checkbox, Input } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';
import ConfirmButton from "../../components/ConfirmButton";


export default class Users extends Component {
    state = {
        modalState: false,
        searchString: '',
        isSearchMode: false,
        searchResult: []
    }
    componentDidMount() {

        this.props.fetchUsers();


    }
    onDelete = (event, data) => {
        this.props.deleteUser(data.member.id);
    }

    close = () => this.setState({ modalState: false })
    onChangeSearch = (event) => {
        this.setState({ searchString: event.target.value })
    }
    onClickSearch = () => {
        const members = this.props.users;
        const searchString = this.state.searchString;
        const searchResult = members.filter(item => {

            if ((item.first_name || '').indexOf(searchString) !== -1 ||
                (item.username || '').indexOf(searchString) !== -1 ||
                (item.email || '').indexOf(searchString) !== -1 ||
                (item.phone || '').indexOf(searchString) !== -1 ||
                (item.createdAt || '').indexOf(searchString) !== -1) {
                return true;
            } else {
                return false;
            }
        })
        this.setState({ searchResult: searchResult, isSearchMode: true })
    }
    clearSearch = () => {
        this.setState({ isSearchMode: false, searchResult: [], searchString: '' })
    }
    render() {

        const { users } = this.props;


        const listValue = this.state.isSearchMode ? this.state.searchResult : users;
        return (
            <React.Fragment>
                <h1>My customers</h1>
                <Segment st >

                    <div className="ui action input">
                        <input type="text" placeholder="Search..." value={this.state.searchString} onChange={this.onChangeSearch} />
                        <button className="ui icon button" onClick={this.onClickSearch}><i aria-hidden="true" className="search icon"></i></button>
                        {this.state.isSearchMode && <button className="ui icon button negative" onClick={this.clearSearch}><i aria-hidden="true" className="close icon"></i></button>}
                    </div>
                    <Button as={Link} to="/user/new" className="ui button mrl10px" primary>Add User</Button>
                </Segment>
                {
                    listValue.length > 0 ? (
                        <Table striped>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Name</Table.HeaderCell>
                                    <Table.HeaderCell>Username</Table.HeaderCell>
                                    <Table.HeaderCell>E-mail</Table.HeaderCell>
                                    <Table.HeaderCell>Phone</Table.HeaderCell>
                                    <Table.HeaderCell>Created Date</Table.HeaderCell>
                                    <Table.HeaderCell>Action</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {
                                    listValue.map((member) => {
                                        return (
                                            <Table.Row>
                                                <Table.Cell>{member.first_name}</Table.Cell>
                                                <Table.Cell>{member.username}</Table.Cell>
                                                <Table.Cell>{member.email}</Table.Cell>
                                                <Table.Cell>{member.phone}</Table.Cell>
                                                <Table.Cell>{member.createdAt}</Table.Cell>
                                                <Table.Cell>

                                                    <Button icon={"edit outline"} size="small" id={member.id} as={Link} to={`/user/edit/${member.id}`} />
                                                    <ConfirmButton member={member} buttonId={member.id}
                                                        icon={"close"}
                                                        confirmAction={this.onDelete} isButtonBasic={true}
                                                        confirmContent='Are you sure , you  want to  delete this user instance ?'
                                                        confirmHeader='Delete User' />
                                                </Table.Cell>
                                            </Table.Row>
                                        )
                                    })
                                }
                            </Table.Body>
                        </Table>

                    )
                        :
                        <h2> No users found</h2>
                }
            </React.Fragment>
        )

    }

}
