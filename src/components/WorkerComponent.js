import React, { Component, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import {  Stagger } from 'react-animation-components';
import { Card, CardTitle, CardBody} from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';
import dbdata from './data';
import { 
    MenuItem,
    FormControl,
    Select,
    InputLabel,
  } from '@material-ui/core';


function RenderContractor({item}){
    return(
        <div className="col-md-12 mt-5">
            <Card>
                 <CardBody className="ml-5">
                    <CardTitle>Name : {item.name}</CardTitle>
                    <p>Phone Number : {item.telnum}</p>
                    <p>Price offered : {item.price}</p>
                    <p>Job and State required : {item.description}</p>
                 </CardBody>
            </Card>  


        </div>
    );
}


function Worker(props) {
    const contractors = props.contractors.map((contractor) => {
        return (
            <div className = "col-12 col-md-12 m-1">
                <Stagger in>
                <RenderContractor item = {contractor} />
                </Stagger>
            </div>
        );
    });


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

            <div>
            <hr/>
                <h3>Available Employers: </h3>
                {contractors}
            </div>
        </div>
 


    );
}

export default Worker;
