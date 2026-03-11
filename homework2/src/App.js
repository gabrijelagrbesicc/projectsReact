import Products from './Components/Products'
import './App.css';

function App() {
  return (
    <>
      <Products discount="10" currency="KM"/>
      <Products discount="20" currency="EUR"/>
      <Products discount="30" currency="$"/>
    </>
  );
}

export default App;
