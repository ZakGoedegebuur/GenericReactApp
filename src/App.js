import Sidebar from './components/Sidebar.js';
import { useState } from 'react';
import "./styles/App.css"
import Body from './components/Body.js';

function App() {
  const [page, setPage] = useState(0);

  console.log(page);
  return (
    <div className="App">
      <Sidebar setPage={setPage} page={page}/>
      <Body setPage={setPage} page={page}/>
    </div>
  );
}

export default App;
