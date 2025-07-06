import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');

  const baseURL =
  window.location.hostname === 'localhost'
    ? 'http://localhost:3000'
    : 'http://api:3000';

  useEffect(() => {
    axios.get(`${baseURL}/users`)
      .then(res => setName(res.data[0].name))
      .catch(err => console.error(err));
  }, []);

  return <h1>Your name is: {name}</h1>;
}

export default App;
