import React, {useState} from "react"; 
import Datepicker from "react-tailwindcss-datepicker"; 

const DatePickerButton = () => {
    
  const [value, setValue] = useState({ startDate:null ,endDate:null}); 
    
    const handleValueChange = (newValue) => {
    console.log("newValue:", newValue); 
    setValue(newValue); 
    } 
  
    return (
      <div className="w-3/4 mt-8 ml-8  border-gray-200 rounded-lg shadow">
      <Datepicker
      primaryColor={"blue"}  
      value={value} 
      onChange={handleValueChange} 
      showShortcuts={true} 
      /> 
      </div>

    );
  };
 
  export default DatePickerButton;