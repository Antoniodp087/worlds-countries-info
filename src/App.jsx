import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

import Filter from './components/Filter'



function App() {
  const [cList, setCList]=useState({})

  useEffect(() => {
      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
        .then((response) => {
          setCList(response.data)
        })
  }, [])

  return (
    
      <div>
        <Filter cList={cList}/> 
      </div>

    )

}

export default App
