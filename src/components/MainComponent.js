import React, {Component} from 'react';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Employer from './EmployerComponent';
import Worker from './WorkerComponent';
import Home from './HomeComponent';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import Header from './Header';


class Main extends Component{

    render() {
        return (
            <div>
                <Header />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch>
                            <Route path="/home" component={Home} />
                            <Route exact path="/employer" component={() => <Employer />} />
                            <Route exact path="/worker" component={() => <Worker />} />
                            <Redirect to="/home/" />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        )
    }
}

export default withRouter(Main);