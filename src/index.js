import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios'
import './index.css';
import App from './App';

axios.get('https://afternoon-basin-00774.herokuapp.com/api/history').then((response) => {
    const myFasts = response.data
    ReactDOM.createRoot(document.getElementById('root')).render(
        <App myFasts={myFasts} />
    )
})

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <>
//     <App />
//   </>
// );


