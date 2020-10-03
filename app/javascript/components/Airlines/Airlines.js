import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

const Airlines = () => {
  const [airlines, setAirlines] = useState([]);

  useEffect(()=>{
    // Get all airlines from API
    // Update airlines in our state

    axios.get('/api/v1/airlines.json')
    .then(resp => {
      setAirlines(resp.data.data);
    })
    .catch(error => console.log(error))
  }, [airlines.length])

  const list = airlines.map(item => {
    return(<li key={item.attributes.name}>{item.attributes.name}</li>)
  })
  return(
    <Fragment>
      <div>This is Airlines#index view of our App</div>
      <ul>{list}</ul>
    </Fragment>
    
  )
}

export default Airlines;