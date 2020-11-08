import React, {Component} from 'react';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Employer from './EmployerComponent';
import Worker from './WorkerComponent';
import Home from './HomeComponent';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import Header from './Header';
import {connect} from 'react-redux';
import {addForm, fetchContractors } from '../redux/ActionCreators';
import {actions} from 'react-redux-form';

const mapStateToProps = state =>{
    return{
        contractors : state.contractors
    }
}

const mapDispatchToProps = dispatch => ({
    resetFeedbackForm : () => {dispatch(actions.reset('feedback'))},
    addForm: (Id, name, telnum, price, description) => dispatch(addForm(Id, name, telnum, price, description)),
    fetchContractors: () => {dispatch(fetchContractors())}
  });

class Main extends Component{
    componentDidMount(){
        this.props.fetchContractors();
    }

    render() {
        return (
            <div>
                <Header />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch>
                            <Route path="/home" component={Home} />
                            <Route exact path="/employer" component={() => <Employer resetFeedbackForm={this.props.resetFeedbackForm} addForm = {this.props.addForm} />} />
                            <Route exact path="/worker" component={() => <Worker contractors = {this.props.contractors.contractors}
                                                            isLoading = {this.props.contractors.isLoading}
                                                           />} />
                            <Redirect to="/home/" />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));