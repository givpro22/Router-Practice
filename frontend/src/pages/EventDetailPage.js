import React from 'react'
import { useParams } from 'react-router-dom'

function EventDetailPage() {
  const params = useParams()

  return (
    <>
      <div>EventDetailPage</div>
      <p>{params.eventId}</p>
    </>
  )
}

export default EventDetailPage