import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKey] = useState("");
  
  const onClick = () => {
    setValue((prev)=> prev+1);
  }
  const onChange = (event) => {
    setKey(event.target.value);
    //console.log(event.target.value);  
  }

  console.log("I run all the time.");
  const oo = () => {
    console.log("i run only once");
  };
  
  useEffect(oo, []); //run only once

  useEffect(()=> {
    console.log("button clicked");
  }, [counter]); // run only when counter state is changed

  useEffect(()=>{
    // if (keyword !== "" && keyword.length >5) {
    //   console.log("Search for...", keyword);
    // 
    console.log("keyword changed");
  }, [keyword]); // run only when keyword state is changed
  
  useEffect(()=>{
    console.log("counter, keyword changed");
  }, [keyword, counter]);
  return (
    <div>
      <h1 className={styles.title}>Hi welcome back</h1>
      <h2>{counter}</h2>
      <button onClick={onClick}>Click me!</button>
      <br></br>
      <input 
        onChange={onChange} 
        value={keyword}
        type="text"
        placeholder="Search here..."/>
    </div>    
  );
}

export default App;
