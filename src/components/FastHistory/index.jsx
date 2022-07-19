import React from 'react'
import { getDuration } from '../../utils/getDuration'
import './fastHistory.css'
function FastHistory({ myFasts }) {
    
    return (
    
        <div className="fast">
            <h2 className="historyTitle">my fasting history</h2>
            <div>
                {myFasts.map((fast) => (
                 
                    <div key={fast.id}>
                   
                        {`${fast.endDate} - ${fast.hours.length-1} hours`}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FastHistory
