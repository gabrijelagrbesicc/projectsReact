
const currentTime = new Date().getHours;
let backgr = "white";

console.log(currentTime);

if(currentTime >= 21 || currentTime <= 7)
{
  //console.log("TEST");
  backgr = "black";
}

function App()
{
  return(
    <div style={{ backgroundColor: backgr}}>
      <p style={{color: "purple"}}>Hello</p>
    </div>
  )
}

export default App;