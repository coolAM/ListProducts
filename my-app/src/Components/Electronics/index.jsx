import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from '../Navigation';
import Computers from './Computers';
import Phones from './Phones';
import Tablets from './Tablets';
import App from '../../Container/App'

class Electronics extends Component {

    render() {
        return (

                <div>
                    <p>Products</p>
                    <Navigation/>
                    <hr/>
                    <Switch>
                        {/*<Route path='/index' component={App}/>*/}
                        <Route path='/Electronics/Computers' component={Computers}/>
                        <Route path='/Electronics/Phones' component={Phones}/>
                        <Route path='/Electronics/Tablets' component={Tablets}/>
                    </Switch>

                </div>

        );
    }
}

export default Electronics;