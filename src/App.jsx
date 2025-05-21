import { useState } from 'react';
import './App.css';
import Button from './components/Button.jsx';
import logo from './assets/react.svg'; 
import './index.css';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <img 
        src={logo} 
        alt="React Logo" 
        className="logo" 
        width="150"
      />
      
      <h1>React Buttons</h1>
      <Button 
        text={`Clicked ${count} times`} 
        onClick={handleClick} 
      />
      <Button 
        text="Submit Form Button" 
        type="submit" 
        onClick={() => alert('Form submitted!')} 
      />
    </div>
  );
}

export default App;
