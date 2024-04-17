import React, {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0);
  const [placeholderText, setPlaceholderText] = useState ("");
  
  function setEnteredValue() {
    return Number(inputRef.current.value)
  };

  function plus(e) { 
    e.preventDefault();   
    setResult((result) => result + setEnteredValue());
    setPlaceholderText("");    
  }; 
 
  function minus(e) { 
  	// Add the code for the minus function 
    e.preventDefault();
    setResult((result) => result - setEnteredValue());
    setPlaceholderText(""); 
  };
 
  function times(e) { 
    // Add the code for the plus function 
    e.preventDefault();
    if(result === 0) {
      setResult((result) => result + setEnteredValue())
    } else {
      setResult((result) => result * setEnteredValue())
    }
    setPlaceholderText(""); 
  }; 
 
  function divide(e) { 
    // Add the code for the divide function
    e.preventDefault();    

    if(setEnteredValue() === 0) {
      if(result !== 0) {
        setResult((result) => result);        
      } else {
        setResult((result) => "Operation with 0 not possible Reset Result");
      }
    } else {
      setResult((result) => result / setEnteredValue())
    }
  };
 
  function resetInput(e) {
    e.preventDefault();
    setPlaceholderText("");
    // Add the code for the resetInput function 
  }; 
 
  function resetResult(e) { 
    setResult((result) => 0)
  	// Add the code for the resetResult function 
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          Current total: {result}         
        </p>
        <input
          pattern="[0-9]" 
          ref={inputRef}          
          type="number" 
          placeholder="Type a number"
          value={placeholderText} 
          onChange={(e) => setPlaceholderText(e.target.value)}
        /> 
        <button onClick={plus}>add</button> 
        <button onClick={minus}>subtract</button>
        <button onClick={times}>multiply</button> 
        <button onClick={divide}>divide</button>        
        <button onClick={resetInput}>reset input</button>
        <button onClick={resetResult}>reset result</button>
      </form> 
    </div> 
  ); 
} 
 
export default App; 
