import Header from './components/Header.js';
import Page from './components/Page.js';
import { useState } from 'react';

function App() {
  const [page, setPage] = useState(0);

  console.log(page);
  return (
    <div className="App">
      <Header setPage={setPage} page={page}/>
      <Page page={page}/>
    </div>
  );
}

export default App;
