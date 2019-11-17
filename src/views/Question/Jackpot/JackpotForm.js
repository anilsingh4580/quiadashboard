import React, { useState } from 'react';


import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Label,
  Row
} from 'reactstrap';
const JackpotForm = props => {

  

  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="12" sm="12">
            <Card>
              <CardHeader>
                <strong>Jackpot</strong>
              </CardHeader>
              <CardBody>
                <FormGroup>
                  <Label htmlFor="title">Title</Label>
                  <Input
                    type="text"
                    id="title"
                    name="title"
                    value={props.title}
                    placeholder="Enter Jackpot Title"
                    onChange={e => props.formInput({title: e.target.value})}/>
                </FormGroup>
                <FormGroup>
                <Label htmlFor="dateTime">Date and Time</Label>
                
                  <Input
                    type="datetime-local"
                    id="dateTime"
                    name="date"
                    value={props.date}
                    placeholder="Date and time"
                    onChange={e => props.formInput({date: e.target.value})}/>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="price">Price</Label>
                  <Input
                    type="number"
                    id="price"
                    placeholder="Price money"
                    value={props.price}
                    onChange={e => props.formInput({price: e.target.value})}/>
                </FormGroup>

              </CardBody>
            </Card>
        </Col>
      </Row>
    </div>
  );
}

export default JackpotForm;
