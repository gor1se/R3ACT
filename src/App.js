import Heading from './components/Heading'
import Description from './components/Description';
import Button from './components/Button';
import Colorbox from './components/Colorbox';

function App() {
  return (
<div>
  <Heading text="R34CT"/>
  <Description text="Drücken Sie den Start-Button um den Test zu starten. Daraufhin erscheint ein grünes Quadrat. Klicken Sie auf das Quadrat sobald dieses seine Farbe verändert!"/>
  <Button />
  <Colorbox/>
</div>
  );
}

export default App;
