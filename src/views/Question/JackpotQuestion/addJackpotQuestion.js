import React, { useState } from "react"
import JackpotQForm from "./JackpotQuestionForm"
import { withRouter } from "react-router"
import { addJackpot, addJackpotQn } from "../../Service/index"

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
} from "reactstrap"

const Jackpot = props => {
  // Declare a new state variable, which we'll call "question,option"
  const [question, setQuestion] = useState({ question: "" })

  const [answer, setAnswer] = useState([])

  const inputHandler = (value = null) => {
    setQuestion({
      ...question,
      ...value
    })
  }

  const optionHandler = (index, value = null) => {
    let newanswer = [...answer]
    newanswer[index] = value
    setAnswer(newanswer)
  }

  const correctOption = index => {
    console.log(index)
    let x = [...answer]
    let newA = x.map((item, i) => {
      if (index === i.toString()) {
        console.log("Matched")

        return { ...item, correct: 1 }
      } else {
        console.log("unmatched")

        return { ...item, correct: 0 }
      }
    })
    console.log(newA)

    // answer[index] = { ...answer[index], correctAnswer:1 };
    setAnswer(newA)
  }
  const formSubmit = async e => {
    e.preventDefault()
    let data = {
      jackpot: props.location.state.id,
      question: question.question,
      options: answer
    }
    let res = await addJackpotQn(data)
    console.log(res)
  }

  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="12" sm="12">
          <Form className="col-sm-12" onSubmit={formSubmit}>
            <JackpotQForm
              formInput={inputHandler}
              formOption={optionHandler}
              answer={setAnswer}
              question={question}
              correctOption={correctOption}
            />
            <Button
              style={{
                borderRadius: 20
              }}
              type="submit"
              size="md"
              color="primary"
              className="mr-2"
            >
              <i className="fa fa-dot-circle-o" />
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default withRouter(Jackpot)
