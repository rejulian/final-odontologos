import React, { useState } from 'react'
import doctor from '../images/doctor.jpg'
import { Link } from 'react-router-dom'

const Card = ({dentist}) => {

  const {id, name, username} = dentist;

  const [isFavourite, setIsFavourite] = useState(false)


  const handleAddFavourite = () => {
    setIsFavourite(!isFavourite);
  }

  return (
    <div className='card'>
      <h4 onClick={handleAddFavourite} className='fav' style={{color: isFavourite ? 'red' : 'white'}}>❤</h4>
      <Link className='card__information' to={`/dentist/${id}`}>
        <p className='id'><b>{id}</b></p>
        <img src={doctor} alt=""/>
        <p><b>{name}</b></p>
        <p>({username})</p>
      </Link>
    </div>
  )
}

export default Card