import React from 'react'
import { Switch, Route } from 'react-router-dom';
import SignIn from '../components/authentication/signIn';
import SignUp from '../components/authentication/signUp';
import Blog from '../components/blog';
import Home from '../components/home';
import Profile from '../components/profile';

export default function Navigation() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/blog" component={Blog} />
        </Switch>
    )
}
