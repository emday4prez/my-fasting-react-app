import React from 'react'
import { compareAsc } from 'date-fns'
import './fastHistory.css'
function FastHistory({myFasts}) {

  return (
   <div className="fast">
      <h2 className='historyTitle'>my fasting history</h2>
      <div>
        {myFasts.map(fast => (
          <div key={fast.id}>
          {`${fast.endDate} -- ${fast.hours} hours`}
          </div>
         )
          )}
      </div>
        
   </div>
   
  )
}

export default FastHistory