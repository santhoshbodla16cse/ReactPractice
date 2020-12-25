import logo from './logo.svg';
import './App.css';
import Par from './Components/Parent'
import ConditionalRendering from './Components/ConditionalRendering';
import ListRendering from './Components/ListRendering';
import Form from './Components/Form';

function App() {
  return (
    <div className="App">
     { /* <Par />
     <ConditionalRendering />
      <ListRendering />*/}
      <Form />
    </div>
  );
}

export default App;
