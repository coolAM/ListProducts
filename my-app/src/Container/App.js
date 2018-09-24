import React, { Component } from 'react';
import { BrowserRouter, Route, Switch ,NavLink} from 'react-router-dom';
import Electronics from '../Components/Electronics';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                        <span>
                            <NavLink to='/index'>
                                <p>Home</p>
                            </NavLink>
                            <NavLink to='/Electronics'>
                                <p>Electronics</p>
                            </NavLink>
                        </span>
                    <hr/>
                    <Switch>
                        {/*<Route path='/index' component={App}/>*/}
                        <Route path='/Electronics' component={Electronics}/>
                    </Switch>

                </div>
            </BrowserRouter>
        );
    }
}

export default App;
