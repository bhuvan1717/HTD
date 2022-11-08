import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import DrivesConducted from './drivesDetails/DrivesConducted '
import UpcomingDrives from './drivesDetails/UpcomingDrives'

const Analytics = () => {

    const [DriveData, setDriveData] = useState([]);
    const [UpComing, setUpComing] = useState([]);
    // const [smallpiedata, setsmallpiedata] = useState([])
    const [fromDate, setfromDate] = useState()
    const [toDate, settoDate] = useState()

    // const start;
    // const end;


    useEffect(() => {
        fetchdata();
    }, [])



    const fetchdata = async () => {

        // const fetch = await axios.get(`http://htdportal-app.herokuapp.com/api/getdrivesconductedinfo?fromDate=2020-12-01 00:00:00&toDate=2021-12-13 20:00:00`);


        const fetch = await axios.get('http://htdportal-app.herokuapp.com/api/getdrivesconductedinfo?', { params: { 'fromDate': fromDate, 'toDate': toDate } })



        console.log('data', fetch);
        console.log(fetch.data.data.drivesConducted);
        setDriveData(fetch.data.data.drivesConducted);
        // setsmallpiedata(fetch.data.data.drivesConducted);
        // console.log(fetch.data.data.upcomingDrives);
        setUpComing(fetch.data.data.upcomingDrives);

    }


    const fatchedMonthData = (formatteddate1, toFormattedDate1) => {
        settoDate(formatteddate1);
        setfromDate(toFormattedDate1);
        console.log("ToDate", toDate);
        console.log("fromdate", fromDate);
        fetchdata();
    }


    return (
        <Container className='my-5'>
            <h3>ANALYTICS </h3>

            <Row>
                <Col> <DrivesConducted DriveData={DriveData} fatchedMonthData={fatchedMonthData} />  </Col>
                <Col> <UpcomingDrives UpComing={UpComing} /> </Col>
            </Row>

        </Container>
    )
}

export default Analytics
