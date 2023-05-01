import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import DatePickerButton from './datepickerbutton';
import Pagination from '../../components/Pagination';


export default function Profile() {

  // const params = useParams();
  // console.log(params);


  const [selectedValue, setSelectedValue] = useState('1');
  const [data, setData] = useState(null);
  const [problem, setProblem] = useState(null);

  

  useEffect(() => {

    async function fetchData() {
      try {
        const response = await fetch('https://msw.com/api/serviceUser');
        const jsonData = await response.json();
        setData(jsonData); // update the state with the received data
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchProblem() {
      try {
        const response = await fetch('https://msw.com/api/problem');
        const jsonData = await response.json();
        setProblem(jsonData); // update the state with the received data
      } catch (error) {
        console.error(error);
      }
    }
    fetchProblem();
  }, []);

  const items = [
    { value: '3', label: '3' },
    { value: '5', label: '5' },
    { value: '7', label: '7' },
    { value: '10', label: '10' },
  ];

  const filteredItems = items.filter((item) => item.value !== selectedValue);

  let numCols = 0;
  if (selectedValue === '3') {
    numCols = 3;
  } else if (selectedValue === '5') {
    numCols = 5;
  } else if (selectedValue === '7') {
    numCols = 7;
  }
  else if (selectedValue === '10') {
    numCols = 10;
  }

  const uniquePairs = [];
if (problem) {
  problem.forEach((pro) => {
    const pair = { name: pro.name, url: pro.url };
    if (!uniquePairs.some((p) => p.name === pair.name && p.url === pair.url)) {
      uniquePairs.push(pair);
    }
  });
}

const rows = uniquePairs.slice(0, numCols).map((pair, i) => (
  <li
    key={i}
    className={`w-full px-4 py-2 border-b border-gray-200 transition-colors duration-300 hover:bg-gray-100`}
  >
    <a href={pair.url} target="_blank" rel="noopener noreferrer">{pair.name}</a>
  </li>
));

const cols = [];
for (let i = 0; i < numCols; i++) {
  const start = i * Math.ceil(rows.length / numCols);
  const end = Math.min((i + 1) * Math.ceil(rows.length / numCols), rows.length);
  const col = (
    <div className="flex justify-center">
      <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {rows.slice(start, end)}
      </ul>
    </div>
  );
  cols.push(col);
}
  


  

  return(

    <>




<a  className="w-full m-8 rounded-lg shadow px-4 py-3 sm:px-6  ">

    <div className="flex flex-row">
      
      <div className='w-full'>
            {data ? (
        <div className="flex flex-row justify-center">
          {data
            .filter((item) => item.serviceUser_id === 2)
            .map((item) => (
              <div key={item.id} className="w-1/2 max-w-sm justify-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-8 mb-4">
                <div className="mt-8 items-center r space-x-4">
                  <div className="font-medium dark:text-white flex flex-col items-center pb-10">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1CvVWfyeNhk-5RPUuO8dXUOFXAz7LyLSVZA&usqp=CAU" alt=""/>
                    <div className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{item.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">시작일자 {item.launchdate}</div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      ) : (
        <p>Loading data...</p>
      )}

        <div className="flex-row mt-8 mb-8 ">
          <div className="w-1/2 flex items-center justify-center">
            <h3 className="w-full mb-4 font-bold text-gray-900 dark:text-white text-center">하루에 받을 문제 수</h3>
          </div>
            <div className="flex w-full">
              <ul className="w-3/4 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                {items.map((item) => (
                  <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600" key={item.value}>
                    <div className="flex items-center pl-3">
                      <input
                        id="list-radio-license" 
                        type="radio"
                        name="list-radio"
                        value={item.value}
                        checked={selectedValue === item.value}
                        onChange={(event) => setSelectedValue(event.target.value)}
                        className=" text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label htmlFor="list-radio-license" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        {item.label}
                      </label>
                    </div>
                  </li>
                  ))}
              </ul>
              <div className="flex justify-end w-full">
              <DatePickerButton className="" />
              </div> 
          </div>
          
          </div>
          </div>
        </div>

                

                <div className="flex justify-center">
                  <h3 className="mt-10 font-semibold text-gray-900 dark:text-white">오늘의 문제</h3>
                </div>
                
                <div className="flex justify-center">
                <ul className="w-1/2 text-sm font-medium mt-5 text-gray-900 bg-white border border-gray-200 rounded-lg  dark:bg-gray-200 dark:text-white">
                {cols}
                </ul>
                </div>
                
                <div className="flex justify-center">
                  <div className="m-8 items-center">
                    <Pagination />
                  </div>
                </div>
               
                
                <div className="flex justify-end">
                    <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-8 mb-6 place-items-end">
                    적용
                    </button>
                    <button type="button" className="text-white bg-gradient-to-r from-purple-400 via-purple-400 to-purple-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-8 mb-6 place-items-end">
                    취소
                    </button>
                </div>

       
    
        </a>
   
    </>
  ) 
}