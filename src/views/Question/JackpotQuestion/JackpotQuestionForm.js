import React from 'react';

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
const JackpotQuestionForm = props => {
  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="12" sm="12">
          <Card>
            <CardHeader>
              <strong>Jackpot Question</strong>
            </CardHeader>
            <CardBody>
              <FormGroup>
                <Label htmlFor="title">Question</Label>
                <Input
                  type="text"
                  id="question"
                  name="question"
                  value={props.question.question}
                  placeholder="Enter Jackpot Question"
                  onChange={e => props.formInput({question: e.target.value})}/>
              </FormGroup>
              <Row>
                <Col xs="12" sm="12">
                  <FormGroup>
                    <Label htmlFor="dateTime">Option 1</Label>    
                    <Input
                      type="text"
                      id="option1"
                      name="option1"
                      // value={props.option1}
                      placeholder="option1"
                      onChange={e => props.formOption(0,{option: e.target.value,correctAnswer:0})}/>
                  </FormGroup>
                </Col>
                
              </Row>

              <Row>
                <Col xs="12" sm="12">
                  <FormGroup>
                    <Label htmlFor="dateTime">Option 2</Label>    
                    <Input
                      type="text"
                      id="option2"
                      name="option2"
                      // value={props.option2}
                      placeholder="option2"
                      onChange={e => props.formOption(1,{option: e.target.value,correctAnswer:0})}/>
                  </FormGroup>
                </Col>
                
              </Row>

              <Row>
                <Col xs="12" sm="12">
                  <FormGroup>
                    <Label htmlFor="dateTime">Option 3</Label>    
                    <Input
                      type="text"
                      id="option3"
                      name="option3"
                      // value={props.option3}
                      placeholder="option3"
                      onChange={e => props.formOption(2,{option: e.target.value,correctAnswer:0})}/>
                  </FormGroup>
                </Col>
                
              </Row>

              <Row>
                <Col xs="12" sm="12">
                  <FormGroup>
                    <Label htmlFor="dateTime">Option 4</Label>    
                    <Input
                      type="text"
                      id="option4"
                      name="option4"
                      // value={props.option4}
                      placeholder="option4"
                      onChange={e => props.formOption(3,{option: e.target.value,correctAnswer:0})}/>
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="correct">Correct Answer</Label>
                      <Input type="select" name="correct" id="correct"  onChange={e => props.correctOption(e.target.value)}>
                        <option value="0"> Option 1</option>
                        <option value="1">Option 2</option>
                        <option value="2">Option 3</option>
                        <option value="3">Option 4</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  
                </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default JackpotQuestionForm;
