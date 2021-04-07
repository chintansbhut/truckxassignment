import { connect } from "react-redux";
import Users from "./Users";
import { fetchUsers, deleteUser } from "../../actions/usersAction";

const mapStateToProps = (state) => ({
  users: state.usersData.users,
  isAuthenticated: state.loginData.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
  deleteUser: (id) => dispatch(deleteUser(id)),
});

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export { UsersContainer };
