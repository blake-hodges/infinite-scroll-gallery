import React, { useEffect } from 'react';
const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;

function App() {
    useEffect(() => {
           fetch(`https://api.unsplash.com/search/photos?query=dogs&client_id=${ACCESS_KEY}`)
           .then(res => res.json())
           .then(data => {
               console.log(data)
           });
    })
    return (
        <div>
            <h1>Infinite Image Gallery</h1>
        </div>
  );
}

export default App;
