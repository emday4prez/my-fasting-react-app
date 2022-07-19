import React, { useState } from 'react'
import axios from 'axios'
import DateTimePicker from 'react-datetime-picker'
import parseJSON from 'date-fns/parseJSON'
import subtractTimeFromDate from '../../utils/subtractTimeFromDate'
import { getDuration } from '../../utils/getDuration'
import 'react-datepicker/dist/react-datepicker.css'
import './InputForm.css'
import { eachHourOfInterval, isSameDay } from 'date-fns/esm'

function InputForm({ myFasts, setMyFasts }) {
    const twentyHoursAgo = subtractTimeFromDate(new Date(), 20)
    const [startValue, startOnChange] = useState(twentyHoursAgo)
    const [endValue, endOnChange] = useState(new Date())

   
    const handleSave = () => {
        
        let existingDate = false;
        myFasts.forEach(fast =>{
            if(isSameDay(parseJSON(fast.endDate), endValue)){
                console.log(fast.endDate)
                existingDate = true
            }
        })
        if (existingDate){
            alert(`you have already recorded a fast for that date`)
            return
        }
        const hours = eachHourOfInterval({
            start: startValue,
            end: endValue
        })

        const fastObject = {
            id: Math.floor((Math.random() * 999) * 33333333),
            startDate: startValue.toISOString(),
            endDate: endValue.toISOString(),
            duration: getDuration(startValue, endValue),
            hours: hours,
            
            
        }

        axios
            .post('http://localhost:3001/myFasts', fastObject)
            .then((response) => {
                const newHistory = [...myFasts, fastObject]
                setMyFasts(newHistory)
                startOnChange(twentyHoursAgo)
                endOnChange(new Date())
            })

        
        
       
        
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
