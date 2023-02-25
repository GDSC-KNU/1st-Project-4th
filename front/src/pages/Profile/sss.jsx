import React, { useState } from 'react';

const App = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [problems, setProblems] = useState([]);

  const handleRadioChange = (event) => {
    const selectedVal = event.target.value;
    setSelectedValue(selectedVal);

    let problemIds = [];
    for (let i = 1; i <= selectedVal; i++) {
      problemIds.push(i);
    }
    setProblems(problemIds);
  };

  return (
    <div>
      <form>
        <div>
          <label>
            <input
              type="radio"
              value="3"
              checked={selectedValue === '3'}
              onChange={handleRadioChange}
            />
            3
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="5"
              checked={selectedValue === '5'}
              onChange={handleRadioChange}
            />
            5
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="7"
              checked={selectedValue === '7'}
              onChange={handleRadioChange}
            />
            7
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="10"
              checked={selectedValue === '10'}
              onChange={handleRadioChange}
            />
            10
          </label>
        </div>
      </form>
      <div>
        {problems.map((problemId) => (
          <div key={problemId}>Problem {problemId}</div>
        ))}
      </div>
    </div>
  );
};

export default App;