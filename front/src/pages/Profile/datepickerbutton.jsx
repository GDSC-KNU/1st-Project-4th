import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const DatePickerButton = () => {
  const [value, setValue] = useState({ startDate: null, endDate: null });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  // Example data to filter
  const data = [
    { id: 1, date: "2022-01-01" },
    { id: 2, date: "2022-01-02" },
    { id: 3, date: "2022-01-03" },
    { id: 4, date: "2022-01-04" },
    { id: 5, date: "2022-01-05" },
    { id: 6, date: "2022-01-06" },
  ];

  // Filter data within the specified date range
  const filteredData = data.filter((item) => {
    const itemDate = new Date(item.date);
    const startDate = value.startDate ? new Date(value.startDate) : null;
    const endDate = value.endDate ? new Date(value.endDate) : null;

    if (startDate && endDate) {
      return itemDate >= startDate && itemDate <= new Date(endDate.getTime() + 86400000);
      } else if (startDate) {
      return itemDate >= startDate;
      } else if (endDate) {
      return itemDate <= new Date(endDate.getTime() + 86400000);
      }
      
    return true;
  });

  return (
    <div className="w-1/2 mt-8 ml-8  border-gray-200 rounded-lg shadow">
      <Datepicker
        primaryColor={"blue"}
        value={value}
        onChange={handleValueChange}
        showShortcuts={true}
      />
      {/* Render the filtered data */}
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>{item.date}</li>
        ))}
      </ul>
    </div>
  );
};

export default DatePickerButton;