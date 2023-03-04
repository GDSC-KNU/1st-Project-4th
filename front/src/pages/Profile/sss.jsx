import React, { useState } from 'react';
 // assuming the problem array is exported from handler.jsx

const ExampleComponent = () => {
  const [numOfDays, setNumOfDays] = useState(7);

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

  // create an array of date strings for the selected number of days
  const dates = [];
  for (let i = 0; i < numOfDays; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    dates.push(date.toISOString().substr(0, 10)); // convert date to yyyy-mm-dd format
  }

  return (
    <div>
      {dates.map(date => (
        <div key={date}>
          <h2>{date}</h2>
          {problem.map(p => {
            const problemDate = new Date(p.created_date);
            problemDate.setHours(0, 0, 0, 0); // set time to midnight to compare dates
            if (problemDate.toISOString().substr(0, 10) === date) {
              return <p key={p.problem_id}>{p.name}</p>;
            }
            return null;
          })}
        </div>
      ))}
    </div>
  );
};

export default ExampleComponent;