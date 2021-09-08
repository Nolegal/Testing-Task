import React from 'react'

const Pagination = ({ namePerPage, totalNames, paginate }) => {
    const pageNumbers = []

    for (let i = 1; 1 <= Math.ceil(totalNames / namePerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <>
            <ul className="pagination">
                {
                    pageNumbers.map(number => (
                        <li className="page-item" key={number}>
                            <a href="!#" className="page-link" onclick={() => paginate(number)}>
                                {number}
                            </a>
                        </li>

                    ))
                }

            </ul>
        </>
    )
}

export default Pagination