import React, {useEffect, useState} from 'react'
import DirectorCard from './DirectorCard'

const DirectorList = () => {
  
    const [ directors, setDirector ] = useState([])
    const [ loading, setLoading ] = useState(true)
  
    useEffect(async () => {
      const resp = await fetch('http://localhost:9393/directors')
      const data = await resp.json()
      setDirector(data)
      setLoading(false)
    }, [])

    const deleteMovie = async id => {

    }

    const directorCards = directors.map((director, index) => <DirectorCard key={index} director={director} />)

  return (
    <div>
      <h1>Directors</h1>
      {directorCards}
    </div>
  )
}

export default DirectorList
