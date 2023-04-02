import React from 'react'
import { createRoot } from 'react-dom/client';
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../src/redux/store'

import style from './styles/Home.module.css'
import { BrowserRouter as Roter, Routes, Route } from 'react-router-dom'

import Sidebar from './components/Sidebar'
import Content from './components/Content'
import Search from './components/Search'

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>

      <div className={style.home__content}>
          <div className={style.home__left}>
              <Search />
              <Sidebar />
          </div>
          <div className={style.home__right}>
              <Content />
          </div>
      </div>

    </BrowserRouter>
  </Provider>
);
