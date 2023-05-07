import { useContext, useState } from 'react';
import "./styles/App.css"
import Body from './components/Body.js';
import { sectionContext, subSectionContext } from './Context';

function App() {
  const [page, setPage] = useState(0);

  const [section, setSection] = useState(0);
  const [subsection, setSubSection] = useState(0);

  //console.log(section, subsection);
  return (
    <sectionContext.Provider value={[section, setSection]}>
      <subSectionContext.Provider value={[subsection, setSubSection]}>
        <div className="App">
          <Body setPage={setPage} page={page}/>
        </div>
      </subSectionContext.Provider>
    </sectionContext.Provider>
  );
}

export default App;
