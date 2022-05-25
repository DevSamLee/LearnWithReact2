import {useState, useEffect} from "react";

function MyName() {
  useEffect(() => {
    console.log("Created");
    // clean up function
    return () => console.log("destroyed");
  }, []);
  return <h1>Hello, my name is Sam.</h1>;
}

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);
  const onClick = () => setValue((prev) => prev + 1);
  const onClick2 = () => setShowing((prev) => !prev);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("I run all the time.");
  useEffect(() => {
    console.log("CALL THE API.");
  }, []);
  useEffect(() => {
  console.log("Search for", keyword);
  }, [keyword]);
  
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here" />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
      {showing ? <MyName /> : null}
      <button onClick={onClick2}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
