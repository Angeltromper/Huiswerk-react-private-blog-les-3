import React, { useState } from 'react';
import {Route, Switch,Redirect} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import BlogPost from "./pages/BlogPost";
import Login from ' ./pages/Login';
import Navigation from ' ./components/Navigation';
import BlogOverview from ' ./pages/BlogOverview';



function PrivateRoute({children, isAuth , ...rest}) {
    return (
        <Route {...rest}>
            {isAuth ? children : <Redirect to="/login"/>}
        </Route>
    )
}

function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated ] = useState(false);


    return (
        <div>
            <Navigation isAuth={isAuthenticated} toggleAuth={toggleIsAuthenticated} />
            <Switch>
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route path="/login">
                    <Login toggleAuth={toggleIsAuthenticated} />
                </Route>
                <PrivateRoute exact path="/blogposts" isAuth={isAuthenticated}>
                    <BlogOverview />
                </PrivateRoute>
                <PrivateRoute exact path="/blog/:Id" isAuth={isAuthenticated}>
                    <BlogPost />
                </PrivateRoute>
            </Switch>
        </div>
    );
}

export default App;
