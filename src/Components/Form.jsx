import React, { useState } from 'react'

const Form = () => {

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(name.length < 5 || !isValidEmail(email)) {
            setMessage('Por favor verifique su información nuevamente')
        }else{
            setMessage(`Gracias ${name}, te contactaremos cuando antes vía mail`)
        }
    }

    return (
        <form onSubmit={handleSubmit} className='form'>
            <input onChange={e=>setName(e.target.value)} type="text" placeholder='Nombre...' />
            <input onChange={e=>setEmail(e.target.value)} type="email" placeholder='Email...' />
            <button onClick={handleSubmit}>Enviar</button>
            {message && <p className='message'>{message}</p>}
        </form>
    )
}

export default Form