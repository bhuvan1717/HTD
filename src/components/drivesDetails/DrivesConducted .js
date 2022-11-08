import React, { useState } from 'react'
import moment from 'moment'
import { Card, Col, Dropdown, DropdownButton, FloatingLabel, Form, Pagination, Row } from 'react-bootstrap'
import BigSpinner from './BigSpinner'
import ManySpinner from './ManySpinner'


const DrivesConducted = (props) => {

    // console.log('drivedata recived', props.DriveData);

    const [bigpiechart, setbigpiechart] = useState([{
        noOfCandidatesAttendedAddressing: 1,
        noOfCandidatesNotAttended: 1,
        noOfCandidatesRejected: 1,
        noOfCandidatesTurnedUpForTraing: 1,
        noOfRegisteredCandidates: 1,
        noOfSelectedCandidates: 1,
    }])

    const selectedData = (val) => {
        const copy = [...props.DriveData];
        const MatchData = copy.filter((ele) => { return ele.driveId == val });
        setbigpiechart(MatchData);
    }




    const filterDate = (event) => {
        const formatteddate = moment(date).format('YYYY-MM-DD h:mm:ss');
        console.log("================================");
        let fromData = new Date().getMonth();
        let fD = new Date();
        fD.setMonth(fromData - event.target.value);
        const toFormattedDate = moment(fD).format('YYYY-MM-DD h:mm:ss');
        props.fatchedMonthData(formatteddate, toFormattedDate);
    }
    const date = new Date()

    return (
        <>
            <Card className='p-4 height' >

                <div className='d-flex justify-content-between '>
                    <h4>Drives Conducted</h4>
                    <FloatingLabel controlId="floatingSelect" label="" onChange={(event) => { filterDate(event) }}>
                        <Form.Select aria-label="Floating label select example" className=" btn-dark mb-5">
                            <option value="01">1 Month</option>
                            <option value="02">2 Month</option>
                            <option value="03">3 Month</option>
                            <option value="06">6 Month</option>
                            <option value="12">1 Year</option>
                            <option value="24">Manual</option>
                        </Form.Select>
                    </FloatingLabel>
                </div>

                <div>
                    <Row>
                        <Col >  <BigSpinner bigpiechart={bigpiechart} /> </Col>
                        <Col > <ManySpinner selectedData={selectedData} data={props.DriveData} /> </Col>
                    </Row>
                </div>


            </Card>
        </>
    )
}

export default DrivesConducted
