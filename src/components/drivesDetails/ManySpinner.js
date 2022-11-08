import React from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import { Pie, PieChart } from 'recharts';
import PaginionDisp from '../PaginionDisp'





const ManySpinner = (props) => {


    const DispsmallPie = (d, inx) => {

        const data02 = [

            { "name": "Group A", "fill": "#82ca9d", "value": props.data[inx].noOfCandidatesAttendedAddressing },
            { "name": "Group B", "fill": "#3D25CF", "value": props.data[inx].noOfCandidatesNotAttended },
            { "name": "Group C", "fill": "#2ECF25", "value": props.data[inx].noOfCandidatesRejected },
            { "name": "Group D", "fill": "#B8B474", "value": props.data[inx].noOfCandidatesTurnedUpForTraing },
            { "name": "Group E", "fill": "#CF253F", "value": props.data[inx].noOfRegisteredCandidates },
            { "name": "Group F", "fill": "#0A2FEC", "value": props.data[inx].noOfSelectedCandidates }

        ];

        return (
            <Col onClick={() => { props.selectedData(d.driveId) }}>
                <h6>{d.driveName}</h6>
                <p style={{ fontSize: '12px' }}>{d.driveDateTime}</p>
                <PieChart width={100} height={100}  >
                    <Pie data={data02} dataKey="value" nameKey="" cx="50%" cy="50%" innerRadius={15} outerRadius={30} />
                </PieChart>
            </Col>
        )
    }


    return (
        <>
            <div className='justify-content-between fixed'>
                <PaginionDisp
                    data={props.data}
                    RenderComponent={DispsmallPie}
                    title="Posts"
                    pageLimit={3}
                    dataLimit={6}
                />
            </div>
        </>
    )


}

export default ManySpinner
