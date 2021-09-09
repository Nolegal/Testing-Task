import React, { useState } from 'react';
import data from './assets/data'
import './App.css';
import ReactPaginate from 'react-paginate';

function App() {
  const [arrs, SetArrs] = useState(data)
  const [arrays, SetArrays] = useState(data)

  const [array, SetArray] = useState(data)
  const [list, SetList] = useState('')


  const [currentPage, SetCurrentPage] = useState(1)
  const namePerPage = 10
  const lastNameIndex = currentPage * namePerPage
  const pageCount = Math.ceil(array.length / namePerPage)
  const changePage = ({ selected }) => {
    SetCurrentPage(selected)
  }

  const NameSort2 = () => {
    const NameSort = arrs.sort((a, b) => { return a.name > b.name ? 1 : -1 }
    )
    SetArrs(NameSort)
  }

  const Pages2 = () => {
    const Pages = arrays.sort((a, b) => { return b.pageviews > a.pageviews ? 1 : -1 }
    )
    SetArrays(Pages)

  };

  return (
    <>
      <div className="row">

        <input
          type="text"
          placeholder="Поиск авторов по имени"
          value={list}
          onChange={(e) => {
            const Searchlist = array.filter(data => {
              return data.name.includes(e.target.value)
            });

            SetArray(Searchlist);
            SetList(e.target.value);
          }}
        />
        <button onClick={NameSort2}>Имя</button>
        <button onClick={Pages2}>Просмотры </button>
        {array.slice(lastNameIndex, lastNameIndex + namePerPage).map((data) => (
          <div className="block" key={data.name}>
            <div> {data.name}



              <p>{data.count_pub}публ.</p>


            </div>
            <img alt="" />
            <div>
              {data.pageviews}

            </div>


          </div>

        )

        )}
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nexiBttn"}
        />
      </div>


    </>
  );
}

export default App;

