import React from 'react';
import { Provider } from 'react-redux';
import {Routes, Route} from 'react-router-dom';
//component
import Header from './component/Header';
import AddList from './component/AddList';
import ShowResult from './Pages/ShowResult';
//redux
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Header/>
      <Routes>
        <Route path='/' element={<AddList/>}/>
        <Route path='/view' element={<ShowResult/>}/>
      </Routes>
    </Provider>
  );
};

export default App;