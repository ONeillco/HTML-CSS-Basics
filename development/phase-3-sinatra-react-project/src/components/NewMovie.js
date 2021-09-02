import React, {useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'

const NewMovie = () => {
 const [director, setDirector] = useState(null)
 const [state, setState] = useState({
   title: "",
   genre: ""
 })
 const [ loading, setLoading ] = useState(true)
 const {directorId} = useParams()
 const history = useHistory()

 useEffect(async () => {
  const resp = await fetch(`http://localhost:9393/directors/${directorId}`)
  const data = await resp.json()
  setDirector(data)
  setLoading(false)
}, [])

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
   
    const options = {
      method: "POST",
      headers,
      body: JSON.stringify(state)
    }
    await fetch(`http://localhost:9393/directors/${directorId}/movies`, options)

    history.push(`/directors/${directorId}`)
  }

  return (
    <div>
      <h1>Create Movie</h1>
      <form onSubmit={handleSubmit} >
        <div>
          <label htmlFor="title" >Title:</label>
          <input type="text" name="title" id="title" value={state.title} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="genre" value={state.genre} >Genre:</label>
          <input type="text" />
        </div>
        <input type="submit" name="genre" value="Create Movie" />
      </form>
    </div>
  )
}

export default NewMovie
