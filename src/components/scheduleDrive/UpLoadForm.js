import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Button, Container, FloatingLabel, Form } from 'react-bootstrap'
import * as XLSX from "xlsx";

const UpLoadForm = () => {

    let name, value;

    const [drive, setdrive] = useState({
        driveName: "",
        driveOwnerName: "",
        driveScheduledAt: "",
    });



const handleData=(e)=>{

    if (e.target.name === "driveScheduledAt") {
        let date = e.target.value;
        console.log("date", date);
        name = e.target.name;
        let dateFormate = `${date.slice(0, 10)} ${date.slice(11, 18)}:00`;
        console.log(dateFormate);
        setdrive({...drive, driveScheduledAt: dateFormate });
    }else{
        console.log(e);
        name = e.target.name;
        value = e.target.value;
        setdrive({ ...drive, [name]: value });
    }
}

    const [candidateData, setcandidateData] = useState();


    const readExcel = (file) => {
        const promise = new Promise((resolve, reject) => {

            const fileReader = new FileReader();
            // console.log(fileReader);
            fileReader.readAsArrayBuffer(file);

            fileReader.onload = (e) => {
                const bufferArray = e.target.result;
                // console.log(bufferArray);
                const wb = XLSX.read(bufferArray, { type: "buffer" });
                const wsname = wb.SheetNames[0];
                const ws = wb.Sheets[wsname];
                const data = XLSX.utils.sheet_to_json(ws);
                resolve(data);
                console.log("Data converted >>", data);
                setcandidateData(data)

            };

            fileReader.onerror = (err) => {
                reject(err);
            };
        });

    };

    // console.log("data:-", candidateData);

    const UpLoadData = () => {
        console.log('submit');
        console.log("usehh", candidateData);
        console.log("useuser", drive);

        const allData = { ...drive, candidateData };
        console.log("all data", allData);

        axios.post('http://htdportal-app.herokuapp.com/api/adddriveinfo', allData)
            .then((res) => alert("Successful"))
            .catch((err) => alert("Not successfull", err))

    }


    return (
        <>
            <Container className='my-5' >
                <Form >

                    <FloatingLabel controlId="floatingInput" label="Drive Name" className="mb-3">
                        <Form.Control type="text" placeholder="Drive Name" name="driveName" value={drive.driveName} onChange={handleData} />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingPassword" label="Drive Date" className="mb-3">
                        <Form.Control type="datetime-local" name="driveScheduledAt" value={drive.driveScheduledAt} onChange={handleData} />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingPassword" label="Drive Owner" className="mb-3">
                        <Form.Control placeholder="Drive Owner" name="driveOwnerName" value={drive.driveOwnerName} onChange={handleData} />
                    </FloatingLabel>


                    <FloatingLabel className="d-flex justify-content-md-center gap-2">

                        {/* <Button variant="primary" type='file' size="lg">Upload Excel Sheet <i class="fas fa-upload "></i>  </Button> */}

                        <Form.Control type="file" size="lg" className='btn' label='upload files' onChange={(e) => {
                            const file = e.target.files[0];
                            readExcel(file);
                        }} />

                        <Button variant="outline-primary" size="" type='button' onClick={UpLoadData}> Submit</Button>


                    </FloatingLabel>

                </Form>
            </Container>

        </>
    )
}

export default UpLoadForm

