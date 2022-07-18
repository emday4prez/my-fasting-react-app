import { useState } from 'react'
import './App.css'
import FastHistory from './components/FastHistory'
import InputForm from './components/InputForm'
import subtractTimeFromDate from './utils/subtractTimeFromDate'

function App() {
    const [myFasts, setMyFasts] = useState([
        {
            id: Math.floor(Math.random() * 1000000000),
            startDate: subtractTimeFromDate(new Date(), 515),
            endDate: subtractTimeFromDate(new Date(), 500),
            duration: {
                years: 0,
                months: 0,
                days: 0,
                hours: 15,
                minutes: 0,
                seconds: 0,
            },
        },
        {
            id: Math.floor(Math.random() * 1000000000),

            startDate: subtractTimeFromDate(new Date(), 5425),
            endDate: subtractTimeFromDate(new Date(), 5400),
            duration: {
                years: 0,
                months: 0,
                days: 1,
                hours: 1,
                minutes: 0,
                seconds: 0,
            },
        },
    ])

    return (
        <div className="App">
            <InputForm myFasts={myFasts} setMyFasts={setMyFasts} />
            <FastHistory myFasts={myFasts} />
        </div>
    )
}

export default App
