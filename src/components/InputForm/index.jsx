import React from 'react'
import './InputForm.css'

function InputForm() {
  return (
    <div className='inputForm'>
     <h3>add fasting details</h3>
     <input className='hoursInput' aria-labelledby='input number of hours fasted' type="number" name="hours" id="hours" />
     <label htmlFor='hours'>number of hours</label>
    </div>
  )
}

export default InputForm