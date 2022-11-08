import React from 'react'
import { Spinner } from 'react-bootstrap'
import { Pie, PieChart } from 'recharts';

const BigSpinner = (props) => {

    // console.log('bigChart', props.bigpiechart[0].noOfCandidatesAttendedAddressing);

    const data02 = [
        { "name": "Group A", "fill": "#82ca9d", "value": props.bigpiechart[0].noOfCandidatesAttendedAddressing },
        { "name": "Group B", "fill": "#3D25CF", "value": props.bigpiechart[0].noOfCandidatesNotAttended },
        { "name": "Group C", "fill": "#2ECF25", "value": props.bigpiechart[0].noOfCandidatesRejected },
        { "name": "Group D", "fill": "#B8B474", "value": props.bigpiechart[0].noOfCandidatesTurnedUpForTraing },
        { "name": "Group E", "fill": "#CF253F", "value": props.bigpiechart[0].noOfRegisteredCandidates },
        { "name": "Group F", "fill": "#0A2FEC", "value": props.bigpiechart[0].noOfSelectedCandidates }
    ];



    return (
        <>
        <div >
            <div className='' >
                <PieChart width={300} height={250} style={{ border: '0px solid black' }}>
                    {/* <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="" /> */}
                    <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={30} outerRadius={50}  />
                </PieChart>
            </div>

            <div className='d-flex flex-column mt-5' style={{ margin: '150px 0px' }, { border: '0px solid black' }}>
                <div><Spinner animation="grow" size="sm" variant="success" /> <span> selected </span><br /></div>
                <div><Spinner animation="grow" size="sm" variant="primary" /> <span> Attended Addressing Session</span><br /></div>
                <div><Spinner animation="grow" size="sm" variant="warning" /> <span> Onboarded </span><br /></div>
                <div><Spinner animation="grow" size="sm" variant="danger" /> <span> Rejected </span><br /></div>
                <div><Spinner animation="grow" size="sm" variant="secondary" /> <span> Not Attended </span><br /></div>
            </div>

        </div>
        </>
    )
}

export default BigSpinner
