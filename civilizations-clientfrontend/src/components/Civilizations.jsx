import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Civilizations = () => {

  let {id} =useParams()

  return (
    <div className="civilization-grid">
      <h2></h2>
    </div>
  )
}

export default Civilizations
