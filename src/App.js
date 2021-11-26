import React, {useState} from 'react';
import Heading from './components/Heading'
import Description from './components/Description';
import Button from './components/Button';
import Colorbox from './components/Colorbox';

function App() {
  const [isStarted, setIsStarted] = useState(false);

  let time = 0;

  function start(){
    setIsStarted(true);
    setInterval(() => {
      time++;
    }, 1);
    console.log(time);
  }

  return (
<div>
  <Heading text="R34CT"/>
  <Description text="Drücken Sie den Start-Button um den Test zu starten. Daraufhin erscheint ein grünes Quadrat. Klicken Sie auf das Quadrat sobald dieses seine Farbe verändert!"/>
  <Button appStart={start}/>
  {isStarted && <Colorbox/>}
</div>
  );
}

export default App;
