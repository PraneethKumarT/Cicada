import React, {Component} from 'react';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Employer from './EmployerComponent';
import Worker from './WorkerComponent';
import Home from './HomeComponent';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import Header from './Header';
import {connect} from 'react-redux';
import {addForm} from '../redux/ActionCreators';
import {actions} from 'react-redux-form';


const mapDispatchToProps = dispatch => ({
    resetFeedbackForm : () => {dispatch(actions.reset('feedback'))},
    addForm: (Id, name, telnum, price, description) => dispatch(addForm(Id, name, telnum, price, description))
  
  });

class Main extends Component{

    render() {
        return (
            <div>
                <Header />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch>
                            <Route path="/home" component={Home} />
                            <Route exact path="/employer" component={() => <Employer resetFeedbackForm={this.props.resetFeedbackForm} addForm = {this.props.addForm} />} />
                            <Route exact path="/worker" component={() => <Worker />} />
                            <Redirect to="/home/" />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        )
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Main));