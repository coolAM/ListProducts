import React, {Component} from 'react';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';


class Navigation extends Component {

    render() {

        return (
            <div>
                <NavLink activeStyle={{color:"Blue"}} to='Electronics/Computers'>
                    <p>Computers</p>
                </NavLink>
                <NavLink activeStyle={{color:"Red"}} to='Electronics/Phones'>
                    <p>Phones</p>
                </NavLink>
                <NavLink activeStyle={{color:"Green"}} to='Electronics/Tablets'>
                    <p>Tablets</p>
                </NavLink>
            </div>
        )
    }
}

export default Navigation;