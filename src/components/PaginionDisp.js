import React, { useState } from 'react'
import { Pagination, Row } from 'react-bootstrap';


const PaginionDisp = ({ data, RenderComponent, title, pageLimit, dataLimit }) => {

    const [pages] = useState(Math.round(data.length / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);

    function goToNextPage() {
        setCurrentPage((pages) => pages + 1)
    }

    function goToPreviousPage() {
        setCurrentPage((pages) => pages - 1)
    }

    function changePage(event) {
        const pageNumber = Number(event.target.textContent)
        setCurrentPage(pageNumber);
    }

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
    };

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    };


    return (
        <>

            <div>

                <div className="my-4">
                    <Row>
                        {getPaginatedData().map((d, inx) => (RenderComponent(d,inx)))}
                    </Row>
                </div>


                <div className="pagination">
                    <div className='justify-content-between'>
                        <Pagination >

                            <Pagination.Prev onClick={goToPreviousPage}
                                className={`prev ${currentPage === 1 ? 'disabled' : ''}`} />

                            {getPaginationGroup().map((item, index) => (
                                <Pagination.Item key={index}
                                    onClick={changePage}
                                    className={`paginationItem ${currentPage === item ? 'active' : null}`}
                                >{item}</Pagination.Item>
                            ))}

                            <Pagination.Next onClick={goToNextPage}
                                className={`next ${currentPage === pages ? 'disabled' : ''}`} />

                        </Pagination>
                    </div>
                </div>
                
            </div>

        </>
    )








}

export default PaginionDisp
