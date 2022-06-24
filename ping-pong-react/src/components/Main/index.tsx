import { Routes, Route } from 'react-router-dom';

import PlayerApp from '../../PlayerApp';
import MatchApp from '../../MatchApp';
import AddData from '../../AddDataApp';

const Main = () => {
  return (
    <Routes>
      <Route path='/' element={<PlayerApp />}></Route>
      <Route path='/matches' element={<MatchApp />}></Route>
      <Route path='/addData' element={<AddData />}></Route>
    </Routes>
  );
}

export default Main;