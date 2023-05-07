import { useState } from 'react';
import "./styles/App.css"
import Body from './components/Body.js';

function App() {
  const [page, setPage] = useState(0);

  console.log(page);
  return (
    <div className="App">
      <Body setPage={setPage} page={page}/>
    </div>
  );
}

export default App;
