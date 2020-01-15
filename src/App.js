import React from 'react';
import store from './js/store/index';
import {addArticle}  from "./js/actions/index";



function App(){
  window.store = store;
  window.addArticle = addArticle
  return(
    <div>
      <h1>Redux</h1>
    </div>
  )
}

export default App
