import React from 'react'
import { Link } from 'react-router-dom'

const DUMMY_EVENTS = [{
  id: 'e1',
  title: 'AAA'
},
{
  id: 'e2',
  title: 'BBB'
}
]

function EventsPage() {
  return (
    <>
      <h1>EventsPage</h1>
      <ul>
        {DUMMY_EVENTS.map((events) => 
          <li key={events.id}>
            <Link to={events.id}>{events.title}</Link>
            </li>
        
        )}

      </ul>
    </>
  )
}

export default EventsPage