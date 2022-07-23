import { useState, useEffect } from 'react'
import { getAll, update, create } from './services/myFasts'
import './App.css'
import FastHistory from './components/FastHistory'
import InputForm from './components/InputForm'
import Notification from './components/Notification'


function App() {
    const [myFasts, setMyFasts] = useState([])
    
  const [notification, setNotification] = useState(null)

    useEffect(() => {
        getAll()
        .then(initialFasts => {
            setMyFasts(initialFasts)
        }).catch(err => {
            notify(`error: ${err.message}`, "alert")
        })
    }, [])

    const notify = (message, type = 'info') => {
        setNotification({ message, type })
        setTimeout(() => {
            setNotification(null)
        }, 3001)
    }
    console.log('render', myFasts.length, 'fasts')

    return (
        <div className="App">
        <Notification notification={notification}/>
            <InputForm myFasts={myFasts} setMyFasts={setMyFasts} />
            <FastHistory myFasts={myFasts} setMyFasts={setMyFasts} />
        </div>
    )
}

export default App
