import { useEffect, useState } from 'react'
import { createCalendar } from './helpers';
import Hatch from './Componentes/Hatch/Hatch';
import { createGlobalStyle } from 'styled-components';
import './App.css'

const GlobalStyle = createGlobalStyle`
 body {
  background: center/ cover url("./img/background.jpg");
  margin: 0;
}`;

function App() {
  const [hatches, setHatches] = useState([]);

  useEffect (()=>{
    const calendar = localStorage.calendar
    ? JSON.parse(localStorage.calendar)
    : createCalendar();

    setHatches(calendar)
  }, [])

  useEffect(()=>{
    hatches.length && localStorage.setItem('calendar', JSON.stringify(hatches));
  },[hatches])
  //console.log (hatches);

  const handleFlipHatch = id => {
    //console.log (id)
    const updateHatches = hatches.map(hatch =>
      hatch.id === id ? { ...hatch, open: !hatch.open } : hatch
    );
    setHatches(updateHatches);
  }

  return (
    <>
    <GlobalStyle />
    
      {hatches.map (hatch => (
        <Hatch 
          key= {hatch.id}
          hatchData = {hatch}
          handleClick={handleFlipHatch}
          />
      ))}
    
    </>
  )
}

export default App
