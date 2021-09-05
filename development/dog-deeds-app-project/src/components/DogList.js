import React, {useEffect, useState} from 'react'
import DogDeeds from './DogDeeds'

const DogList = () => {
  const [ dogs, setDogs ] = useState([])




  useEffect(() => {
    fetch(`http://localhost:9393/dogs`)
      .then(res => res.json())
      .then(data => setDogs(data))
    }, [])

    const dogDeeds = dogs.map((dog, index) => <DogDeeds key={index} dog={dog} />)

  return (
    <div>
      <h1>Dingo Deeds</h1>
      {dogDeeds}
    </div>
    
  )
}

export default DogList
