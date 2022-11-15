import React from 'react';
import { Provider } from 'react-redux';
import {Routes, Route} from 'react-router-dom';

//pages
import Home from './Pages/Home'
import ShowResult from './Pages/ShowResult';

//components
import Header from './Component/Header';
import Footer from './Component/Footer';
//redux
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/show-result' element={<ShowResult/>}/>
        </Routes>
      </main>
      <Footer/>
    </Provider>
  );
};

export default App;