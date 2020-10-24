import React, { useState } from 'react';
import './App.css';

import Routing from './components/Routing/Routing';
const App = () => {
  /* User disconnected */
  const [log, setLog] = useState(false);
  return (
    <div>
      <Routing log={log} setLog={setLog} />
    </div>
  );
};

export default App;
