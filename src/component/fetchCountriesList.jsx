import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
function CountriesList() {
    return (
        <div className='country-List'>
            <h3>Country List</h3>
            <PaginatedItems itemsPerPage={10} />
        </div>
    )
}
function Table({ currentItems }) {
    return (
        <>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Countries</th>
                            <th>Population</th>
                            <th>Rank</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((item, index) => <tr>
                            <td>{item.id}</td>
                            <td>{item.country}</td>
                            <td>{item.population}</td>
                            <td>{item.Rank}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </>
    );
}

function PaginatedItems({ itemsPerPage }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchList = () => {
        fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries')
            .then(res => res.json())
            .then(result => {
                setData(result.data);
                setTimeout(() => { setLoading(false); }, 1000)

            })
    }
    useEffect(() => {
        fetchList();
    }, [])
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = data.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(data.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };

    return (
        <>   {loading ? <h1>Loading...</h1> : (<><Table currentItems={currentItems} />
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                className={'pagination'}
            />
            <h4>Total Count</h4>
            <div className='total-count'>{data.length}</div></>)}
        </>
    );
}

export default CountriesList;