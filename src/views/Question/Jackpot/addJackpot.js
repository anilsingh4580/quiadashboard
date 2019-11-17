import React, {useState} from 'react';
import JackpotForm from './JackpotForm';
import {addJackpot } from '../../Service/index';

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


const Jackpot = props => {
  // Declare a new state variable, which we'll call "state"
  const [state,
    setState] = useState({title: '', date: new Date(), price: 0});

  const inputHandler = (value = null) => {
    setState({
      ...state,
      ...value
    })
  }
    
  const formSubmit = async(e) => {
    e.preventDefault();
    const reslt = await addJackpot(state);
    console.log(reslt)
  }

  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="12" sm="12">
          <Form className="col-sm-12" onSubmit={formSubmit}>
            <JackpotForm formInput={inputHandler} formData={state}/>
            <Button
              style={{
              borderRadius: 20
            }}
              type="submit"
              size="md"
              color="primary"
              className="mr-2">
              <i className="fa fa-dot-circle-o"/>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Jackpot;
