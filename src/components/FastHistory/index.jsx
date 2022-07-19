import React from 'react'
import { parseISO } from 'date-fns'
import './fastHistory.css'
function FastHistory({ myFasts }) {
    return (
        <div className="fast">
            <h2 className="historyTitle">my fasting history</h2>
            <div>
                {myFasts.map((fast) => (
                    <div key={fast.id}>
                        {`${parseISO(fast.endDate).toString().slice(0,16)} - ${fast.hours.length - 1} hours`}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FastHistory
