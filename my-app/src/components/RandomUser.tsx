// import React, { useState } from 'react'
import * as React from 'react';
import fetch from 'isomorphic-fetch';

interface Data {
    name: {
        title: string;
        first: string;
        last: string;
    }
    location: {
        street: {
            number: number;
            name: string;
        }
        city: string;
        state: string;
        country: string;
        postcode: number;
        coordinates: {
            latitude: string;
            longitude: string;
        }
        timezone: {
            offset: string;
            description: string;
        }
    }
    email: string;
    picture: {
        thumbnail: string
    }
    dob: {
        date: string;
        age: number;
    }
}

const RandomUser: React.FC = () => {
    const [user, setUser] = React.useState<Data | null>(null);
    const [error, setError] = React.useState<string | null>(null)

    React.useEffect(() => {
        fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => setUser(data.results[0]))
        .catch(error => {
            setError(error.message)
        })
    }, [])

    if(user) {
        return (
            <article>
                <div>
                    <img src={user.picture.thumbnail} />
                </div>
                <div>{user.name.title} {user.name.first} {user.name.last}</div>
            </article>
        );
    }
    return <div>Loading...</div>;
}

export default RandomUser