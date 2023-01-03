// import React, { useState } from 'react'
import React, { useContext } from 'react'
import fetch from 'isomorphic-fetch';
import NameChange from './NameChange'
import { UserContext } from '../UserContext';
import { Data } from '../Types/types'
import './RandomUser.css'

const RandomUser: React.FC = () => {
    const { setTitle, setFirst, setLast } = useContext(UserContext)
    const [user, setUser] = React.useState<Data | null>(null);
    const [newTitle, setNewTitle] = React.useState<string | null>(null);
    const [newFirst, setNewFirst] = React.useState<string | null>(null);
    const [newLast, setNewLast] = React.useState<string | null>(null);
    const [error, setError] = React.useState<string | null>(null)

    React.useEffect(() => {
        fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => setUser(data.results[0]))
        .catch(error => {
            setError(error.message)
        })
    }, [])

    const fetchUser = () => {
        fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(data => setUser(data.results[0]))
            .catch(error => {
                setError(error.message)
            })
        setNewTitle('')
        setNewFirst('')
        setNewLast('')
    }

    const changeName = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formTitle = event.currentTarget.elements.namedItem('titleValue') as HTMLInputElement;
        const formFirst = event.currentTarget.elements.namedItem('firstValue') as HTMLInputElement;
        const formLast = event.currentTarget.elements.namedItem('lastValue') as HTMLInputElement;
        setNewTitle(formTitle.value)
        setNewFirst(formFirst.value)
        setNewLast(formLast.value)
        setTitle('')
        setFirst('')
        setLast('')
    }

    if(user) {
        return (
            <section className='section--container'>
                {error ? <h2>{error}</h2> : 
                <>
                <article className='profile'>
                    <div>
                        <img className='profile_img' src={user.picture.large} alt={`${newTitle? newTitle : user.name.title} ${newFirst ? newFirst : user.name.first} ${newLast ? newLast : user.name.last}`}/>
                    </div>
                    <h2 className='profile_h2'>{newTitle? newTitle : user.name.title} {newFirst ? newFirst : user.name.first} {newLast ? newLast : user.name.last}</h2>
                    <p className='profile_p'>Age: {user.dob.age}</p>
                    <h3 className='profile_h3'>Address: </h3>
                    <div>
                        <p className='profile_p'>{user.location.country}, {user.location.state}</p>
                        <p className='profile_p'>{user.location.city}</p>
                        <p className='profile_p'>{user.location.street.name} {user.location.street.number}, {user.location.postcode}</p>
                    </div>
                    <button className='button' onClick={fetchUser}>New User</button>
                </article>
                <NameChange onSubmit={changeName}/>
                </>
                }
            </section>
        );
    }
    return <div>Loading...</div>;
}

export default RandomUser