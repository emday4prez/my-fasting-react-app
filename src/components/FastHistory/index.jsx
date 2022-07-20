import React from 'react'
import { parseISO } from 'date-fns'
import { del } from '../../services/myFasts'
import './fastHistory.css'
function FastHistory({ myFasts, setMyFasts }) {

    const handleDelete = (id) => {
            del(id)
            setMyFasts(myFasts.filter((fast) => fast.id !== id))
        
    }
    return (
        <div className="fast">
            <h2 className="historyTitle">my fasting history</h2>
            <div className="historyContainer">
                {myFasts.map((fast) => (
                    <div key={fast.id}>
                        <div className="fast-wrap">
                            {`${parseISO(fast.endDate)
                                .toString()
                                .slice(0, 16)} - ${
                                fast.hours
                            } hours`}
                            <div className="btnWrapper">
                                <button onClick={() => handleDelete(fast.id)}>delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FastHistory
