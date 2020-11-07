import React, { Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

function Worker() {
    const [Job, setJob] = useState('');
    const [Region, setRegion] = useState('');
    const handleSelect = (e) => {
        console.log(e);
        setJob(e)
    }
    const handleSelect2 = (e) => {
        console.log(e);
        setRegion(e)
    }
    return (
        <div className="container">
            <h1></h1>
            <DropdownButton
                alignRight
                title="Job"
                id="dropdown-menu-align-right"
                onSelect={handleSelect}
            >
                <Dropdown.Item eventKey="Carpenter">Carpenter</Dropdown.Item>
                <Dropdown.Item eventKey="Mechanic">Mechanic</Dropdown.Item>
                <Dropdown.Item eventKey="Goldsmith">Goldsmith</Dropdown.Item>
            </DropdownButton>
            <h4>You selected {Job}</h4>


            <DropdownButton
                alignRight
                title="State"
                id="dropdown-menu-align-right"
                onSelect={handleSelect2}
            >
                <Dropdown.Item eventKey="Carpenter">Carpenter</Dropdown.Item>
                <Dropdown.Item eventKey="Mechanic">Mechanic</Dropdown.Item>
                <Dropdown.Item eventKey="Goldsmith">Goldsmith</Dropdown.Item>
            </DropdownButton>
            <h4>You selected {Region}</h4>

            <h1>Market Price : </h1>
        </div>

    );
}

export default Worker;
