import './style.css'
import Products from './Components/Products'

function App()
{
  return (
    <>
      <Products tax ="20" />
      <Products tax ="25" />
      <Products tax ="55" />
    </>
    
  );
}

export default App;