import { useState } from 'react'
import './App.css';
import FastHistory from './components/FastHistory';
import InputForm from './components/InputForm';

function App(props) {
const [history, setHistory] = useState(props.history)
let fastingHistory = [
 {
  id:1,
  endDate: "06/14/2022",
  hours: 14,
  userName:"emday4prez"
 }, 
 {
  id:2,
  endDate: "07/12/2022",
  hours: 15,
  userName:"emday4prez"
 }
]

  return (
    <div className="App">
      <InputForm/>
      <FastHistory fastingHistory={fastingHistory}/>
    </div>
  );
}

export default App;
