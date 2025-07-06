// src/Home.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
    const [name, setName] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3000/users')
        .then(res => {
            setName(res.data[0]?.name || 'No user');
        });
    }, []);

    return <h1>Your name is: {name}</h1>;
}

export default Home;
