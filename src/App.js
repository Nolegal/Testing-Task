import React, { useState } from 'react';
import data from './assets/data'
import './App.css';

function App() {
  const [array, SetArray] = useState(data)
  const [list, SetList] = useState('')
  const NameSort = () => {
    SetArray(array.sort((a, b) => parseInt(a.name) - parseInt(b.name)));

  };
  const Pages = () => {
    SetArray(array.sort((a, b) => parseInt(a.pageviews) - parseInt(b.pageviews)));

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
        <button onClick={NameSort}>Имя</button>
        <button onClick={Pages}>Просмотры </button>
        {array.map((data) => (
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

      </div>


    </>
  );
}

export default App;
