import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import FastHistory from './components/FastHistory'
import InputForm from './components/InputForm'
import subtractTimeFromDate from './utils/subtractTimeFromDate'

function App() {
    const [myFasts, setMyFasts] = useState([])

    useEffect(() => {
        console.log('effect')
        axios.get('http://localhost:3001/myFasts').then((response) => {
            console.log('promise fulfilled')
            setMyFasts(response.data)
        })
    }, [])
    console.log('render', myFasts.length, 'fasts')

    return (
        <div className="App">
            <InputForm myFasts={myFasts} setMyFasts={setMyFasts} />
            <FastHistory myFasts={myFasts} />
        </div>
    )
}

export default App
