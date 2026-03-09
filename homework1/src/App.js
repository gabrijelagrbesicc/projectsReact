
const currentTime = 22;
let backgr = "white";

if(currentTime >= 21 || currentTime <= 7)
{
  //console.log("TEST");
  backgr = "black";
}

function App()
{
  return(
    <div style={{ backgroundColor: backgr}}>
      <p style={{color: "pink"}}>Hello</p>
    </div>
  )
}

export default App;