import React, {useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom'

const EditDirector = () => {
  const [name, setName] = useState("")
  const [director, setDirector] = useState(null)
  const {id} = useParams()
  const history = useHistory()

  useEffect(async () => {
    const resp = await fetch(`http://localhost:9393/directors/${id}`)
    const data = await resp.json()
    setDirector(data)
    setName(data.name)
  }, [])


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
        method: "PATCH",
        headers,
        body: JSON.stringify(body)
      }
      await fetch(`http://localhost:9393/directors/${id}`, options)
      
      history.push(`/directors/${id}`)
     
    }
  

  return (
    <div>
      <h1>Edit Director</h1>
      <form onSubmit={handleSubmit} >
        <div>
          <label htmlFor="name" >Name:</label>
          <input type="text" id="name" value={name} onChange={handleChange} autoFocus={true} />
        </div>
        <br></br>
        <input type="submit" value="Edit Director" />
      </form>
    </div>
  )
}

export default EditDirector