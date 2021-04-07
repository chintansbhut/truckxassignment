import { connect } from "react-redux";
import { Login } from "./Login";
import { login } from "../../actions/loginAction";

const mapStateToProps = (state) => ({
  isError: state.loginData.isError,
  isSuccess: state.loginData.isSuccess,
  isAuthenticated: state.loginData.isAuthenticated,
  token: state.loginData.token,
  error: state.loginData.error,
});

const mapDispatchToProps = (dispatch) => ({
  login: (data) => dispatch(login(data)),
});

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export { LoginContainer };
