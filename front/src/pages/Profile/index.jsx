import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import DatePickerButton from './datepickerbutton';
import Pagination from '../../components/Pagination';
import Spo from './sss';

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
    {`${pair.name}: ${pair.url}`}
  </li>
));


  const cols = (
    <div className="flex justify-center">
      <ul className="w-full text-sm font-medium mt-5 text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {rows}
      </ul>
    </div>
  );
  


  

  return(

    <>


<a href="#" className="w-full m-10 bg-white border border-gray-200 rounded-lg shadow">

        <div className="flex flex-row">

            <div className='w-1/2'>

            {data ? (
              data
                .filter((item) => item.serviceUser_id === 2) // Filter the array to only show items with serviceUser_id of 1
                .map((item) => (
                  <div className="m-8 w-1/2 border-gray-200 rounded-lg shadow">
                    <div className="flex items-center space-x-4">
                      <div key={item.id} className="font-medium dark:text-white">
                        <div>{item.name}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{item.launchdate}</div>
                      </div>
                    </div>
                  </div>
                ))
            ) : (
              <p>Loading data...</p>
            )}

            
                <div className="flex-auto ml-8">
                <h3 className="w-1/2 mb-4 font-semibold text-gray-900 dark:text-white">하루에 받을 문제 수</h3>
        <ul className="w-1/2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            {items.map((item) => (
            
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                <div className="flex items-center pl-3">
                <input
                    id="list-radio-license" 
                    type="radio"
                    name="list-radio"
                    value={item.value}
                    checked={selectedValue === item.value}
                    onChange={(event) => setSelectedValue(event.target.value)}
                    
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label key={item.value} htmlFor="list-radio-license" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                
                {item.label}
                </label>
                </div>
                </li>

            ))}
        </ul>

    
                    
                </div>

                </div>

                 {/* <a href="#" className="w-3/4 m-10 bg-white border border-gray-200 rounded-lg shadow">
                나의 실력은 어느정도?
                </a>  */}
                
                </div>

                <DatePickerButton />

                <div className="flex justify-center">
                  <h3 className="mt-10 font-semibold text-gray-900 dark:text-white">오늘의 문제</h3>
                </div>
                
                <div className="flex justify-center">
                <ul className="w-1/2 text-sm font-medium mt-5 text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                {cols}
                </ul>
                </div>
                
                <div className="flex justify-center">
                  <div className="m-8 items-center">
                    <Pagination />
                    <Spo />
                  
                  </div>
                </div>
               
                
                <div className="flex justify-end">
                    <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 place-items-end">
                    저장
                    </button>
                </div>

       
    
        </a>
   
    </>
  ) 
}
