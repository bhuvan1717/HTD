import axios from 'axios';
import React, { useState } from 'react'
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'

const FormFill = () => {

  const [FormData, setFormData] = useState({

    driveName: "",
    driveOwnerName: "",
    driveScheduledAt: " ",
    lastUpdatedAt: null,
    lastUpdatedBy: null,
    candidateData: [{

      name: "",
      emailId: "",
      contactNumber: "",
      stream: "",
      tenthPercentage: null,
      twelfthPercentage: null,
      degree: "",
      degreePercentage: null,
      jspiderBranch: "",
      masterDegreeAggregate: null,
      yop: null,
      status: "",
      lastUpdatedAt: "",
      lastUpdatedBy: null,
      driveId: null

    }]


  })



  let name, value;

  const FormInput = (e) => {

    if (e.target.name === "driveScheduledAt") {
      let date = e.target.value;
      console.log("date", date);
      name = e.target.name;
      let dateFormate = `${date.slice(0, 10)} ${date.slice(11, 18)}:00`;
      console.log(dateFormate);
      setFormData({ ...FormData, driveScheduledAt: dateFormate });
    } else {

      name = e.target.name;
      value = e.target.value;
      // console.log(value)
      // const coptData = { ...FormData }
      // console.log("FormData:-", coptData);
      // setFormData({ coptData, [name]: value });
      setFormData({ ...FormData, [name]: value });
    }

  }

  const [candidateData, setcandidateData] = useState({

    name: "",
    emailId: "",
    contactNumber: "",
    stream: "",
    tenthPercentage: null,
    twelfthPercentage: null,
    degree: "",
    degreePercentage: null,
    jspiderBranch: "",
    masterDegreeAggregate: null,
    yop: null,
    status: "",
    lastUpdatedAt: "",
    lastUpdatedBy: null,
    driveId: null
  }
  )

  const candid = (e) => {

    // console.log(e.target.value);
    name = e.target.name;
    value = e.target.value;
    // const copyCandid = { ...candidateData }
    // console.log("coptData:-", copyCandid);
    setcandidateData({ ...candidateData, [name]: value })

  }
  const SaveData = () => {
    console.log('data combining');
    console.log('FormData', FormData);
    console.log('candidateData', candidateData);
    const allDate = { ...FormData, candidateData };
    console.log("allDate", allDate);

    axios.post('http://htdportal-app.herokuapp.com/api/adddriveinfo', allDate)
      .then((res) => alert("Successful"))
      .catch((err) => alert("Not successfull", err))

  }

  return (
    <>

      <Container>
        <Form>

          <Row className="g-4 my-2">
            <Col md>

              <FloatingLabel controlId="floatingInput" label="Drive Name">
                <Form.Control type="text" placeholder="Drive Name" name="driveName" value={FormData.driveName} onChange={FormInput} />
              </FloatingLabel>

            </Col>

            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Date">
                <Form.Control type="datetime-local" placeholder="Date" name="driveScheduledAt" value={FormData.driveScheduledAt} onChange={FormInput} />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="g-4 my-2">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Drive Owner">
                <Form.Control type="text" placeholder="Date" name="driveOwnerName" value={FormData.driveOwnerName} onChange={FormInput} />
              </FloatingLabel>
            </Col>

            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Name">
                <Form.Control type="text" placeholder="Name" name="name" value={candidateData.name} onChange={candid} />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="g-4 my-2">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Branch">
                <Form.Control type="text" placeholder="jspiderBranch" name="jspiderBranch" value={candidateData.jspiderBranch} onChange={candid} />
              </FloatingLabel>
            </Col>

            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Contact No">
                <Form.Control type="number" placeholder="Contact No" name="contactNumber" value={candidateData.contactNumber} onChange={candid} />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="g-4 my-2">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Email">
                <Form.Control type="email" placeholder="Email No" name="emailId" value={candidateData.emailId} onChange={candid} />
              </FloatingLabel>
            </Col>

            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Degree">
                <Form.Control type="text" placeholder="Degree" name="degree" value={candidateData.degree} onChange={candid} />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="g-4 my-2">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Stream">
                <Form.Control type="text" placeholder="Stream" name="stream" value={candidateData.stream} onChange={candid} />
              </FloatingLabel>
            </Col>

            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Passed Out">
                <Form.Control type="number" placeholder="yop" name="yop" value={candidateData.yop} onChange={candid} />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="g-4 my-2">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="10th Percentage">
                <Form.Control type="number" placeholder="tenthPercentage" name="tenthPercentage" value={candidateData.tenthPercentage} onChange={candid} />
              </FloatingLabel>
            </Col>

            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="12th Percentage">
                <Form.Control type="number" placeholder="twelfthPercentage" name="twelfthPercentage" value={candidateData.twelfthPercentage} onChange={candid} />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="g-4 my-2">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Degree Percentage">
                <Form.Control type="number" placeholder="degreePercentage" name="degreePercentage" value={candidateData.degreePercentage} onChange={candid} />
              </FloatingLabel>
            </Col>

            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Master's Percentage">
                <Form.Control type="number" placeholder="masterDegreeAggregate" name="masterDegreeAggregate" value={candidateData.masterDegreeAggregate} onChange={candid} />
              </FloatingLabel>
            </Col>
          </Row>

          <div className="d-grid justify-content-md-center gap-2 mt-4">
            <Button variant="secondary" size="lg" onClick={SaveData}>SUBMIT</Button>
          </div>

        </Form>
      </Container>

    </>
  )
}

export default FormFill
