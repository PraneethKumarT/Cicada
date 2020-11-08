import React, { Component, useState, useEffect, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import {
    Card, CardImg, CardText, CardBody, Row, Col,
    ModalBody, Modal, ModalHeader, CardTitle, Breadcrumb, BreadcrumbItem, Button, Label
} from 'reactstrap';
import { 
  MenuItem,
  FormControl,
  Select,
  InputLabel,
} from '@material-ui/core';

import { Control, Form, Errors } from 'react-redux-form';
import dbdata from './data';

const maxLength = (len) => (val) => !(val) || (val.length <= len)
const minLength = (len) => (val) => (val) && (val.length >= len)

class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);

    }


    handleSubmit(values) {
        this.props.addForm( values.name, values.telnum, values.price, values.description);
        console.log("Current state is : "+JSON.stringify(values));
        this.props.resetFeedbackForm()
    }

    render() {
        return (
            <div>

                <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>



                    <Col className="form-group">
                        <Label htmlFor="name" >Your Name</Label>
                        <Control.text model=".name" id="name" name="name"
                            placeholder="Your Name"
                            className="form-control"
                            validators={{
                                minLength: minLength(3), maxLength: maxLength(15)
                            }}
                        />
                        <Errors className="text-danger"
                            model=".name"
                            show="touched"
                            messages={{
                                minLength: 'Must be greater than 2 characters',
                                maxLength: 'Must be 15 characters or less'
                            }}
                        />
                    </Col>
                    <Col className="form-group">
                                <Label htmlFor="telnum">Tel. no</Label>
                                    <Control.text model=".telnum" id="telnum" name="telnum"
                                        placeholder="Tel. no"
                                        className="form-control"
                                         />
                            </Col>
                            <Col className="form-group">
                                <Label htmlFor="price">Price per Month</Label>
                                    <Control.text model=".price" id="price" name="price"
                                        placeholder="Price"
                                        className="form-control"
                                         />
                            </Col>

                    
                    <Col className="form-group">
                        <Label htmlFor="description" >Description</Label>
                        <Control.textarea model=".description" id="description" name="description"
                         placeholder="Enter Job Designation and State"
                            rows="6"
                            className="form-control"
                        />
                    </Col>
                    <Col className="form-group">
                        <Button type="submit" color="primary">
                            Submit
                                    </Button>
                    </Col>
                </Form>

            </div>

        )
    }

}

function Employer(props) {
    const [job, setJob] = useState('');
    const [jobs, setJobs] = useState([]);
    const [jobInfo, setJobInfo] = useState({});
    const [region, setRegion] = useState('KA');
    

    const [regions, setRegions]=useState([]);
    const [regionInfo, setRegionInfo]=useState({});

    useEffect(() => {
        
        const states = dbdata.map((state) => ({
            name: state.stateName,
            value: state.stateID
        }));
        setRegions(states);
        setRegion("KA");
        
        const reg = dbdata.find(reg => reg.stateID === "KA");
        setRegionInfo(reg);

        
        setJob("1");
        const jb = reg.stateData.find(jb => jb.jobID === "1");
        
        const jobs = reg.stateData.map((job) => ({
            name: job.Designation,
            value: job.jobID
        }));
        setJobs(jobs);
        setJobInfo(jb);
        
        }, []); 

    const onRegionChange = async (event) => {
            const stateID = event.target.value;
            setRegion(stateID);

            const reg = dbdata.find(reg => reg.stateID === stateID);
            console.log(stateID,reg);
            
            setRegionInfo(reg);


            const jb = regionInfo.stateData.find(jb => jb.jobID === job);
            console.log(jb);
            setJobInfo(jb);
            


    }
    const onJobChange = async (event) => {
      const jobID = event.target.value;
      setJob(jobID);

      const jb = regionInfo.stateData.find(jb => jb.jobID === jobID);
      setJobInfo(jb);

    }





    return (
        <div className="container">
            <h1></h1>
            <FormControl className="selectRegion" >
                <InputLabel id="regionSelect">State</InputLabel>
                <Select onChange={onRegionChange} value={region} >
                  {
                    regions.map(region => (
                      <MenuItem value={region.value}>{region.name}</MenuItem>
                    ))
                  }
                </Select>
            </FormControl>
                <hr/>
            <FormControl className="selectJob" >
                <InputLabel id="jobSelect">Job</InputLabel>
                <Select onChange={onJobChange} value={job} >
                  {
                    jobs.map(job => (
                      <MenuItem value={job.value}>{job.name}</MenuItem>
                    ))
                  }
                </Select>
            </FormControl>
            <hr/>

            <h1>Minimum Wage per Month : {parseFloat(jobInfo.minWage).toFixed(2)} </h1>
            <h1>Minimum Wage per Day : {parseFloat(jobInfo.minWage/30).toFixed(2)} </h1>
            <hr/>
            <h3>Employer Form: </h3>

            <CommentForm resetFeedbackForm = {props.resetFeedbackForm} addForm = {props.addForm} />
        </div>

    );
}


export default Employer;