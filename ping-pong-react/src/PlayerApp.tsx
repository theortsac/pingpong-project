import * as React from 'react';
import PlayerList from './components/PlayerList/index';
import PlayerProfile from './components/PlayerProfile/index';

import './PlayerApp.css';

const PlayerApp = () => {
  const [id, setId] = React.useState(1);
  const handleIdChange = React.useCallback((newId: React.SetStateAction<number>) => {
    setId(newId);
  }, []);

  return (
    <div className="App">
      <PlayerList handleIdChange={handleIdChange} />
      <PlayerProfile _id={id} />
    </div>
  );
};

export default PlayerApp;