
import React ,{useState}from "react";
import './../styles/App.css';


const App = () => {

  
  const [button,setButton] = useState(0);

  function Increase (){
    setButton(button +1);
  }


  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Button clicked {button} times</h1>
        <button onClick={Increase}>Click me</button>


    </div>
  )
}

export default App
