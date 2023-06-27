import React, { useContext, useEffect, useState } from 'react'
import Card from '../Components/Card'
import { ThemeContext } from '../Contexts/ThemeContext';

const Home = () => {

    const [dentists, setDentist] = useState([])

    const { theme } = useContext(ThemeContext);

    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=>response.json())
      .then(data=>setDentist(data))
    },[])

  return (
    <main className={theme.color}>
        <ul className='container'>
            {dentists.map(dentist=>(
                <li key={dentist.id}><Card dentist={dentist}/></li>
            ))}
        </ul>
    </main>
  )
}

export default Home