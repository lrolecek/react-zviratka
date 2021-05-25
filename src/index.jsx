import React from 'react';
import { render } from 'react-dom';
import './style.css';

import AnimalList from './AnimalList';
import AnimalDetail from './AnimalDetail';

const App = () => (
  <>
    <h1>Zvířátka v ZOO</h1>

    <div class="container">
      <AnimalList />
      <AnimalDetail />
    </div>
  </>
);

render(<App />, document.querySelector('#app'));
