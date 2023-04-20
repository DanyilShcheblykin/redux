import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FavoritePage from './pages/favourite/favourite';
import HomePage from './pages/home/home';
import Navigation from './components/navigation/navigation';
import './styles/global.scss'
import ReduxVanila from './pages/redux-test/redux-test';
import ReduxToolkit from './pages/redux-test-toolkit/redux-toolkit';

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/fav' element={<FavoritePage></FavoritePage>}></Route>
        <Route path='/redux' element={<ReduxVanila></ReduxVanila>}></Route>
        <Route path='/redux-toolkit' element={<ReduxToolkit></ReduxToolkit>}></Route>
      </Routes>
    </>

  );
}

export default App;
