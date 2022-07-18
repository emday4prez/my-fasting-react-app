import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './InputForm.css'

function InputForm({fastingHistory}) {
  const [selectedDate, setSelectedDate] = useState(null)
  const [totalHours, setTotalHours] = useState(0)
  const [newFast, setNewFast] = useState({
   endDate: '01/01/2000',
   hours: 14
  })

  const handleHourChange = (e) => {
    e.preventDefault()
    setTotalHours(e.target.value)
  }

  const handleSave = () => {
   const fastObject = {endDate: selectedDate, hours: totalHours, id: fastingHistory.length+1}

   setNewFast(fastObject)
   console.log('saved:', newFast)
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
     <input className='hoursInput' onChange={handleHourChange} aria-labelledby='input number of hours fasted' type="number" name="hours" id="hours" />
     </div>
     
     <div className="saveBtn">
      <button onClick={handleSave}>save</button>
     </div>
     
    </div>
  )
}

export default InputForm