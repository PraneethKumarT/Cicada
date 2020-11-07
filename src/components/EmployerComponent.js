import React, { Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import {
    Card, CardImg, CardText, CardBody, Row, Col,
    ModalBody, Modal, ModalHeader, CardTitle, Breadcrumb, BreadcrumbItem, Button, Label
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const maxLength = (len) => (val) => !(val) || (val.length <= len)
const minLength = (len) => (val) => (val) && (val.length >= len)

class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        console.log("Current state is : " + JSON.stringify(values))
        alert("Current state is : " + JSON.stringify(values))
    }

    render() {
        return (
            <div>

                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>



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
                                <Label htmlFor="telnum">Price</Label>
                                    <Control.text model=".telnum" id="telnum" name="telnum"
                                        placeholder="Price"
                                        className="form-control"
                                         />
                            </Col>

                    
                    <Col className="form-group">
                        <Label htmlFor="comment" >Description</Label>
                        <Control.textarea model=".comment" id="comment" name="comment"
                            rows="6"
                            className="form-control"
                        />
                    </Col>
                    <Col className="form-group">
                        <Button type="submit" color="primary">
                            Submit
                                    </Button>
                    </Col>
                </LocalForm>

            </div>

        )
    }

}

function Employer() {
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
            <CommentForm />
        </div>

    );
}


export default Employer;