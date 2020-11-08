import React, { Component } from 'react';
import{NavLink} from 'react-router-dom';
import {NavItem} from 'reactstrap';

class Home extends Component {
    render() {
        return (
            <div className="container">
                <br />
                <p margin = "%10">The pandemic caused by the coronavirus has caused massive disruption to the lives of many individuals. 
                    Almost 4.1 million people have lost their jobs due to the circumstances. 
                    It becomes obvious and imperative that a platform connecting the employer to the various unskilled labourers is necessary. 
                    But since we live in the age of data we would like to enable the unskilled workers to choose the appropriate employer and not be taken advantage of. 
                    Therefore we make all the available information transparent and show the prices for the given job in the state from different employers, but also the minimum wage for that job in that state.The following are the instructions to use the site.
                <br/><br/>
If you are an worker go to the Worker tab and give State and Job.
<br/><br/>
<button>
                                <NavLink className = "nav-link" to="/Worker">
                                    <span className = "fa fa-home fa-lg"></span>Worker
                                </NavLink>
                             </button>

<br></br>
<br/>
If you are an Employer go to Employer tab select state and job sector and submit form.
<br/>
</p>

<button>
                                <NavLink className = "nav-link" to="/Employer">
                                    <span className = "fa fa-home fa-lg"></span>Employer
                                </NavLink>
                             </button>

<br></br>
<br/>
            </div>
        )
    }
}

export default Home;