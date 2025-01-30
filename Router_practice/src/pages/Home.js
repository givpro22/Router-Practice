import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {

  const navigate = useNavigate()

  function navigateHandler() {
    navigate('/products')
  }

  return (
    <>
      <h1>홈임</h1>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  )
}

export default Home