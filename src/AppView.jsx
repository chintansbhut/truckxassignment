import React from "react";
import { Router, Switch, Route, Link } from "react-router-dom";
import history from "./history";
import { LoginContainer } from "./views/Login/index.js";
import UsersContainer from "./views/Users";
import UserAdd from "./views/User/UserAdd";
import UserEdit from "./views/User/UserEdit";


const routes = [
    {
        path: "/",
        exact: true,
        Component: LoginContainer
    },
    {
        path: "/login",
        exact: true,
        Component: LoginContainer
    },
    {
        path: "/users",
        exact: true,
        Component: UsersContainer
    },
    {
        path: "/user/new",
        exact: true,
        Component: UserAdd
    },
    {
        path: "/user/edit/:id",
        exact: true,
        Component: UserEdit
    }

];

export default class AppView extends React.Component {
    render() {
        return (
            <Router history={history}>

                <Switch>
                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.Component}
                        />
                    ))}
                </Switch>

            </Router>
        )
    }
}