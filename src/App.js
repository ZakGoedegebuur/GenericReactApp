import { useState } from 'react';
import "./styles/App.css"
import Body from './components/Body.js';
import { sectionContext, subSectionContext, stageContext } from './Context';

function App() {

  const [section, setSection] = useState(0);
  const [subsection, setSubSection] = useState(0);
  const [stage, setStage] = useState("selection");

  return (
    <sectionContext.Provider value={[section, setSection]}>
      <subSectionContext.Provider value={[subsection, setSubSection]}>
        <stageContext.Provider value={[stage, setStage]}>
          <div className="App">
            <Body/>
          </div>
        </stageContext.Provider>
      </subSectionContext.Provider>
    </sectionContext.Provider>
  );
}

export default App;
