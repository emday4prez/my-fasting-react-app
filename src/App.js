import { useState, useEffect } from 'react'
import { getAll, update, create } from './services/myFasts'
import './App.css'
import FastHistory from './components/FastHistory'
import InputForm from './components/InputForm'


function App() {
    const [myFasts, setMyFasts] = useState([])

    useEffect(() => {
        getAll()
        .then(initialFasts => {
            setMyFasts(initialFasts)
        })
    }, [])
    console.log('render', myFasts.length, 'fasts')

    return (
        <div className="App">
            <InputForm myFasts={myFasts} setMyFasts={setMyFasts} />
            <FastHistory myFasts={myFasts} setMyFasts={setMyFasts} />
        </div>
    )
}

export default App
