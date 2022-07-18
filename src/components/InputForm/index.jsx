import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import { format} from 'date-fns'
import 'react-datepicker/dist/react-datepicker.css'
import './InputForm.css'

function InputForm({myFasts, setMyFasts}) {
  const [selectedDate, setSelectedDate] = useState(null)
  const [totalHours, setTotalHours] = useState(0)
 

  const handleHourChange = (e) => {
    e.preventDefault()
    setTotalHours(e.target.value)
  }

  const handleSave = () => {
   const date = format(selectedDate, 'MM/dd/yyyy')
   
   const fastObject = {endDate: date, hours: totalHours, id: myFasts.length+1}

   
   setMyFasts(myFasts.concat(fastObject))
   setSelectedDate(null)
   setTotalHours(0)
  }

  return (
    <div className='inputComponent'>
     <h1>add fasting details</h1>
     <h4>what day did my fast end</h4>
     <div className="date-picker">
      <DatePicker 
        selected={selectedDate} 
        onChange={date => setSelectedDate(date)}
        maxDate={new Date()}
        isClearable
       />
     </div>
     <div className="hoursContainer">
      <label htmlFor='hours'><h4>total hours</h4></label>
     <input className='hoursInput' onChange={handleHourChange} aria-labelledby='input number of hours fasted' type="number" name="hours" id="hours" value={totalHours}/>
     </div>
     
     <div className="saveBtn">
      <button onClick={handleSave}>save</button>
     </div>
     
    </div>
  )
}

export default InputForm