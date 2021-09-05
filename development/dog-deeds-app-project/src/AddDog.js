import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

const AddDog = () => {
  const [name, setName] = useState("")
  const history = useHistory()

  const handleChange = e => {
    setName(e.target.value)
    }

    const handleSubmit = async e => {
      e.preventDefault()
      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
      const body = {name: name}
      const options = {
        method: "POST",
        headers,
        body: JSON.stringify(body)
      }
      await fetch('http://localhost:9393/dogs', options)
      
      history.push("/dogs")
     
    }
  

  return (
    <div>
      <h1>Sign Up Your Pup Today!</h1>
      <form onSubmit={handleSubmit} >
        <div>
          <label >Pups Name:</label>
          <input type="text" id="name" value={name} onChange={handleChange} autoFocus={true} />
        </div>
        <br></br>
        <input type="submit" value="Pup Sign Up" />
      </form>
    </div>
  )
}

export default AddDog