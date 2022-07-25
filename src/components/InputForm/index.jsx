import React, { useState } from 'react'
import axios from 'axios'
import { update } from '../../services/myFasts'
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
    const [notification, setNotification] = useState(null)

    const notify = (message, type = 'info') => {
        setNotification({ message, type })
        setTimeout(() => {
            setNotification(null)
        }, 3001)
    }
    const handleSave = () => {
        const hours = eachHourOfInterval({
            start: startValue,
            end: endValue,
        })
        const fastObject = {
            id: Math.floor(Math.random() * 999 * 33333333),
            startDate: startValue.toISOString(),
            endDate: endValue.toISOString(),
            duration: getDuration(startValue, endValue),
            hours: hours.length - 1,
        }

        let existingDate
        myFasts.forEach((fast) => {
            if (isSameDay(parseJSON(fast.endDate), endValue)) {
                console.log(fast.endDate)
                existingDate = fast
            }
        })
        console.log('exitistingDate: ', existingDate)

        if (existingDate) {
            const ok = window.confirm(
                `This day is already stored, would you like to overwrite the current information for this day?`
            )
            if (ok) {
                update(existingDate.id, {
                    ...existingDate,
                    startDate: startValue,
                    endDate: endValue,
                    duration: getDuration(startValue, endValue),
                    hours: hours.length - 1,
                })
                    .then((savedFast) => {
                        console.log('savedFast:', savedFast)
                        notify(`updated info of ${savedFast.endDate}`)
                    })
                    .catch((error) => {
                        console.error('error updating', error)
                        notify(
                            `the ${existingDate.endDate} had already been removed`,
                            'alert'
                        )
                        setMyFasts(
                            myFasts.filter((p) => p.id !== existingDate.id)
                        )
                    })
                return
            }
        }

        axios
            .post('http://localhost:3001/api/history', fastObject)
            .then((response) => {
                const newHistory = [...myFasts, fastObject]
                setMyFasts(newHistory)
                notify('added to list')
                startOnChange(twentyHoursAgo)
                endOnChange(new Date())
            })
            .catch((e) => console.error(e))
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
