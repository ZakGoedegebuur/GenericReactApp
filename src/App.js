import { useState } from 'react';
import "./styles/App.css"
import Body from './components/Body.js';
import { sectionContext, subSectionContext } from './Context';

function App() {

  const [section, setSection] = useState("development");
  const [subsection, setSubSection] = useState(0);

  return (
    <sectionContext.Provider value={[section, setSection]}>
      <subSectionContext.Provider value={[subsection, setSubSection]}>
          <div className="App">
            <Body/>
          </div>
      </subSectionContext.Provider>
    </sectionContext.Provider>
  );
}

export default App;
