import React, {useContext, useState} from 'react';
import Card from '../Components/Card';
import { ThemeContext } from '../Contexts/ThemeContext';


const Favs = () => {
  const VALUE_KEY = 'value_dentists';
  const { theme } = useContext(ThemeContext);

  const getStoredDentists = () => {
    const existingData = localStorage.getItem(VALUE_KEY);
    return existingData ? JSON.parse(existingData) : [];
  };

  const [dentistList, setDentistList] = useState(getStoredDentists());

  const handleRemoveCard = (id) => {
    const updatedDentistList = dentistList.filter(
      (dentist) => dentist.id !== id
    );
    setDentistList(updatedDentistList);
    localStorage.setItem(VALUE_KEY, JSON.stringify(updatedDentistList));
  };

  return (
    <main className={theme.color}>
      {dentistList.length > 0 ? 
        <ul className='container'>
          {dentistList.map((dentist) => (
            <li key={dentist.id}><Card key={dentist.id} dentist={dentist}  handleRemoveCard={handleRemoveCard}/></li>
          ))}
        </ul> : <h1>Ups! Parece que no agregaste ningun dentista a favoritos ❤</h1>
      }
    </main>
  );
};

export default Favs;