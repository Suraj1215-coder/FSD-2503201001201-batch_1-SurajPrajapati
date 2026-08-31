import {useState} from 'react';

function App() {
  const [name, setName] = useState("Surya");
  const [age, setAge] = useState(20);

  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>
      <button onClick={() => setName("Suraj")}>Change Name</button>
      <button onClick={() => setAge(age + 1)}>Increase Age</button>
    </div>
  )
};

export default App;
