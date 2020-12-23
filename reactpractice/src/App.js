import logo from './logo.svg';
import './App.css';
import Par from './Components/Parent'
import ConditionalRendering from './Components/ConditionalRendering';
import ListRendering from './Components/ListRendering';

function App() {
  return (
    <div className="App">
     { /* <Par />
     <ConditionalRendering />*/}
      <ListRendering />
    </div>
  );
}

export default App;
