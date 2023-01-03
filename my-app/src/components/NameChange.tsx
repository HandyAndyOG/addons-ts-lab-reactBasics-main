import React, { useContext } from 'react'
import { UserContext } from '../UserContext';
import './NameChange.css'
import { Props } from '../Types/types'

const NameChange: React.FC<Props> = (props) => {
    const { title, setTitle, first, setFirst, last, setLast } = useContext(UserContext)

  return (
    <form className='form--container' onSubmit={props.onSubmit}>
        <label className='form_label'>Title: </label>
        <input className='form_input' placeholder='e.g. Mrs, Mr etc...' name='titleValue' value={title} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)}/>
        <label className='form_label'>First name: </label>
        <input className='form_input' placeholder='John...' name='firstValue' value={first} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFirst(event.target.value)}/>
        <label className='form_label'>Last name: </label>
        <input className='form_input' placeholder='Smith...' name='lastValue' value={last} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setLast(event.target.value)}/>
        <button className='button' type='submit'>Submit</button>
    </form>
  )
}

export default NameChange