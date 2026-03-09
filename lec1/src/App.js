import './style.css'
import siteLogo from './logo.svg' //const siteLogo = "logo.svg"

console.log(siteLogo)

const name = "Marta";
const paragraphColor = "pink";
function App()
{
  return (
    <div>
      <p className='nekiParag'>Pozdrav ja se zovem { name }</p>
      <img src={ siteLogo }></img>
      <p style={{ color: paragraphColor }}>Ovo je moj prvi react projekt</p>
    </div>
    
  );
}

export default App;