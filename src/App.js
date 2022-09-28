import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [drills, setDrills] = useState([]);

  useEffect(()=>{
    fetch ('swim.json')
    .then(res => res.json())
    .then(data => setDrills(data))
  },[])

  return (
    <div className="App">
        {
          drills.map(drill => <img src ={drill.picture}></img>)
        }
    </div>
  );
}

export default App;
