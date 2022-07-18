import React, { useState } from 'react'
import DateTimePicker from 'react-datetime-picker'
import subtractTimeFromDate from '../../utils/subtractTimeFromDate'
import { getDuration } from '../../utils/getDuration'
import 'react-datepicker/dist/react-datepicker.css'
import './InputForm.css'

function InputForm({ myFasts, setMyFasts }) {
    const twentyHoursAgo = subtractTimeFromDate(new Date(), 20)
    const [startValue, startOnChange] = useState(twentyHoursAgo)
    const [endValue, endOnChange] = useState(new Date())

   
    const handleSave = () => {
        const fastObject = {
            id: Math.floor((Math.random() * 999) * 33333333),
            startDate: startValue,
            endDate: endValue,
            duration: getDuration(startValue, endValue),
            
        }
        const newHistory = [...myFasts, fastObject]

        setMyFasts(newHistory)
        console.log('new history: ', newHistory)
    }

    return (
        <div className="inputComponent">
            <h1>add fasting details</h1>
            <h4>When did I start myFast</h4>
            <div className="date-picker">
                <DateTimePicker
                    disableClock
                    hourPlaceholder={'07'}
                    onChange={startOnChange}
                    value={startValue}
                    maxDate={new Date()}
                    isClearable
                />
            </div>
            <h4>When did I end myFast</h4>
            <div className="date-picker">
                <DateTimePicker
                    onChange={endOnChange}
                    value={endValue}
                    maxDate={new Date()}
                    isClearable
                />
            </div>
            <div className="hoursContainer">
                <label htmlFor="hours">
                    <h4>total hours</h4>
                </label>

                {/* <input
                    className="hoursInput"
                    onChange={handleHourChange}
                    aria-labelledby="input number of hours fasted"
                    type="number"
                    name="hours"
                    id="hours"
                    value={totalHours}
                /> */}
            </div>

            <div className="saveBtn">
                <button onClick={handleSave}>save</button>
            </div>
        </div>
    )
}

export default InputForm
