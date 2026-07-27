function App(){
  const username = "Surya";
  let x = 10;
  let y = 30;

  return (
    <>
    <h1>{username}</h1>
    <h1>{10+20+40}</h1>
    <h1>{x+y}</h1>
    
    <button onClick={()=>alert("Hello Surya")}>Click Me!</button>
    </>
  );
}

export default App;