import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ThemeContext } from '../Contexts/ThemeContext';
const Detail = () => {

  const { id } = useParams()
  const { theme } = useContext(ThemeContext);

  const [dentist, setDentist] = useState({})


  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(response => setDentist(response))
  }, []);

  return (
    <main className={`detail ${theme.color}`}>
      <div className='detail'>
        <h1>Informacion de dentista N° {id}</h1>
        <p><b>Name:</b> {dentist.name}</p>
        <p><b>Phone:</b> {dentist.phone}</p>
        <p><b>Email:</b> {dentist.email}</p>
        <p><b>Website:</b> {dentist.website}</p>
      </div>
    </main>
  )
}

export default Detail