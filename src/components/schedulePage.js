import React, { useState } from 'react'
import { Container, FloatingLabel, Form } from 'react-bootstrap'
import FormFill from './scheduleDrive/FormFill'
import UpLoadForm from './scheduleDrive/UpLoadForm'


const schedulePage = () => {

    const [set, setset] = useState("1")


    const selectFormType = (event) => {
        console.log("Form Selected");
        setset(event.target.value);
    }

    return (

        <>
            <div className='my-5'>
                <Container md>
                    <h3>Schedual Drive </h3>
                    <FloatingLabel controlId="" label="" onChange={(event) => { selectFormType(event) }}>
                        <Form.Select aria-label="Floating label select example">
                            <option value="1"> Upload File</option>
                            <option value="2">Form</option>
                        </Form.Select>
                    </FloatingLabel>
                    {(set === "1") ? <UpLoadForm /> : <FormFill />}
                </Container>
            </div>





        </>

    )
}

export default schedulePage
