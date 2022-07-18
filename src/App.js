import './App.css';
import FastStats from './components/FastStats';

function App() {

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
      <FastStats fastingHistory={fastingHistory}/>
    </div>
  );
}

export default App;
