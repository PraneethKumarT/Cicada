import React, { Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import {
    Card, CardImg, CardText, CardBody, Row, Col,
    ModalBody, Modal, ModalHeader, CardTitle, Breadcrumb, BreadcrumbItem, Button, Label
} from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';

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
                                <Label htmlFor="price">Price</Label>
                                    <Control.text model=".price" id="price" name="price"
                                        placeholder="Price"
                                        className="form-control"
                                         />
                            </Col>

                    
                    <Col className="form-group">
                        <Label htmlFor="description" >Description</Label>
                        <Control.textarea model=".description" id="description" name="description"
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
            <CommentForm resetFeedbackForm = {props.resetFeedbackForm} addForm = {props.addForm} />
        </div>

    );
}


export default Employer;