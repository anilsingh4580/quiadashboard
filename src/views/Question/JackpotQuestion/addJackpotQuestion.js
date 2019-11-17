import React, {useState} from 'react';
import JackpotQForm from './JackpotQuestionForm';
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
  // Declare a new state variable, which we'll call "question,option"
  const [question,
    setQuestion] = useState({ question: '' });

    const [answer,
      setAnswer] = useState([] );
  
  const inputHandler = (value = null) => {
    setQuestion({
      ...question,
      ...value
    })
  }

  const optionHandler = (index,value = null) => {
    let newanswer = [...answer];
    newanswer[index] = value;
    setAnswer(newanswer)    
  }

  const correctOption = (index) => {
    console.log(index);
    
    answer[index] = { ...answer[index], correctAnswer:1 };
    setAnswer(answer) 

  }    
  const formSubmit = async (e) => {
    console.log(answer);
    
    e.preventDefault();
    // const reslt = await addJackpot(state);
    // console.log(reslt)
  }

  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="12" sm="12">
          <Form className="col-sm-12" onSubmit={formSubmit}>
            <JackpotQForm formInput={inputHandler} formOption={optionHandler} answer={setAnswer} question={question} correctOption={correctOption}/>
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
