import React from 'react'
import { Card, Col, Nav, Pagination, Row } from 'react-bootstrap'
import { Link, Route } from 'react-router-dom'
import Analytics from '../Analytics'
import PaginionDisp from '../PaginionDisp'
import schedulePage from '../schedulePage'



const UpcomingDrives = (props) => {




    const CardDatas = (val) => {

        return (
            <>
                <Col>
                    <Card bg='dark' text={'light'} style={{ width: '17.5rem' }} className="my-2 mx-0 " >
                        <Card.Body>
                            <div className='d-flex justify-content-between'>
                                <Card.Title> {val.driveName} </Card.Title>
                                <div className='d-flex justify-content-evenly '>
                                    <i class="fas fa-plus btn btn-light mx-2"></i>
                                    <i class="fas fa-user-plus  btn btn-light mx-2"></i>
                                </div>
                            </div>

                            <div className='d-flex justify-content-evenly mt-5'>
                                <Card.Text> {val.driveId} </Card.Text>
                                <Card.Text> {val.driveDateTime} </Card.Text>
                            </div>

                        </Card.Body>
                    </Card>
                </Col>
            </>
        )

    }





    return (
        <>
            <Card className='p-4 height'>
                <div className='d-flex justify-content-between'>
                    <h4>Upcoming Drives</h4>
                    <Nav>
                        <i class="fas fa-list-ul btn "></i>
                        <button className='btn btn-dark'><i class="fas fa-plus"></i><Link to='/schedulePage' className='text'> <b>ADD</b> </Link></button>
                        <Route path="/schedulePage" component={schedulePage} />
                    </Nav>

                </div>


                <div className='my-4'>
                    {/* 

                    <Row>
                        {props.UpComing.map((val) => {
                            return (
                                <>
                                    <Col>
                                        <Card bg='dark' text={'light'} style={{ width: '17.5rem' }} className="my-2 mx-0 " >
                                            <Card.Body>
                                                <div className='d-flex justify-content-between'>
                                                    <Card.Title> {val.driveName} </Card.Title>
                                                    <div className='d-flex justify-content-evenly '>
                                                        <i class="fas fa-plus btn btn-light mx-2"></i>
                                                        <i class="fas fa-user-plus  btn btn-light mx-2"></i>
                                                    </div>
                                                </div>

                                                <div className='d-flex justify-content-evenly mt-5'>
                                                    <Card.Text> {val.driveId} </Card.Text>
                                                    <Card.Text> {val.driveDateTime} </Card.Text>
                                                </div>

                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </>
                            )
                        })}

                    </Row>




                */}

                </div>


                <div className='d-flex justify-content-center' style={{ margin: '0px 0px 0px 0px' }}>

                    <PaginionDisp
                        data={props.UpComing}
                        RenderComponent={CardDatas}
                        title="Posts"
                        pageLimit={3}
                        dataLimit={6}
                    />

                </div>


            </Card>

        </>


    )
}

export default UpcomingDrives
