import React, { useState } from 'react';

const problems = [
  { id: 1, description: 'Problem 1' },
  { id: 2, description: 'Problem 2' },
  { id: 3, description: 'Problem 3' },
  { id: 4, description: 'Problem 4' },
  { id: 5, description: 'Problem 5' },
  { id: 6, description: 'Problem 6' },
  { id: 7, description: 'Problem 7' },
  { id: 8, description: 'Problem 8' },
  { id: 9, description: 'Problem 9' },
  { id: 10, description: 'Problem 10' },
];

function Spo() {
  const [selectedProblems, setSelectedProblems] = useState([]);

  const handleRadioChange = (e) => {
    const numProblems = parseInt(e.target.value);
    setSelectedProblems(problems.slice(0, numProblems));
  };

  return (
    <div>
      <label>
        <input type="radio" name="numProblems" value="3" onChange={handleRadioChange} />
        3 problems
      </label>
      <label>
        <input type="radio" name="numProblems" value="5" onChange={handleRadioChange} />
        5 problems
      </label>
      <label>
        <input type="radio" name="numProblems" value="7" onChange={handleRadioChange} />
        7 problems
      </label>
      <label>
        <input type="radio" name="numProblems" value="10" onChange={handleRadioChange} />
        10 problems
      </label>
      <ul>
        {selectedProblems.map(problem => (
          <li key={problem.id}>{problem.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default Spo;