import React from 'react'
import { useSelector } from 'react-redux'

const Card = () => {
    const count = useSelector(state=>state.count)
  return (
    <div>
        <h1>CARD</h1>
        <h3>{count}</h3>
    </div>
  )
}

export default Card