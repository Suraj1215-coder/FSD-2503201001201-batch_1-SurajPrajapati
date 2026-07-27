// Simple function
function add(a, b) {
  return a + b;
}

// React Component
function Welcome() {
  return <h2>Welcome to My First React Component</h2>;
}

// Another Component
function Info() {
  return (
    <div>
      <h3>What is component?</h3>
      <p>Component is a reusable piece of UI.</p>
    </div>
  );
}

// Main App Component
function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <Welcome />
      <Info />
      <p>Normal function result: {add(10, 50)}</p>
    </div>
  );
}

export default App;