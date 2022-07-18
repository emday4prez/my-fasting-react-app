import React from 'react'
import './fastStats.css'
function FastStats({fastingHistory}) {
  return (
   <div className="fast">
      <h2 className='historyTitle'>my fasting history</h2>
      <div>
        {fastingHistory.map(fast => (
          <div key={fast.id}>
          {`${fast.endDate} -- ${fast.hours} hours`}
          </div>
         )
          )}
      </div>
        
   </div>
   
  )
}

export default FastStats