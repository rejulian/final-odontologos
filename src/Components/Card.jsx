import React, { useState, useEffect } from 'react'
import doctor from '../images/doctor.jpg'
import { Link } from 'react-router-dom'

const VALUE_KEY = 'value_dentists'

const Card = ({dentist, handleRemoveCard}) => {

  const {id, name, username} = dentist;

  const [isFavourite, setIsFavourite] = useState(false);

  const handleAddFavourite = () => {
    setIsFavourite(!isFavourite);
    updateFavourites(dentist);
  };

  const updateFavourites = (dentist) => {
    const existingData = localStorage.getItem(VALUE_KEY);
    let favourites = [];

    if (existingData) {
      favourites = JSON.parse(existingData);
    }

    const existingIndex = favourites.findIndex(
      (favourite) => favourite.id === dentist.id
    );

    if (existingIndex !== -1) {
      favourites.splice(existingIndex, 1);
    } else {
      favourites.push(dentist);
    }

    localStorage.setItem(VALUE_KEY, JSON.stringify(favourites));

    if (isFavourite) {
      handleRemoveCard(id);
    }
  };

  useEffect(() => {
    const existingData = localStorage.getItem(VALUE_KEY);

    if (existingData) {
      const favourites = JSON.parse(existingData);
      const isCurrentFavourite = favourites.some(
        (favourite) => favourite.id === id
      );
      setIsFavourite(isCurrentFavourite);
    }
  }, [id]);

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