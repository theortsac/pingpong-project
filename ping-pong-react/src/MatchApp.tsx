import * as React from 'react';
import MatchList from './components/MatchList';
import MatchProfile from './components/MatchProfile';

import './MatchApp.css';

const MatchApp = () => {
  const [id, setId] = React.useState(1);
  const handleIdChange = React.useCallback((newId: React.SetStateAction<number>) => {
    setId(newId);
  }, []);

  return (
    <div className="App">
      <MatchList handleIdChange={handleIdChange} />
      <MatchProfile _id={id} />
    </div>
  );
};

export default MatchApp;