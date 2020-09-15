import React from 'react';
import { RecoilRoot } from 'recoil';

import { Provider } from 'react-redux';

import RecoilContainer from './components/recoil';
import ReduxContainer from './components/redux';
import { reduxStore } from './state/redux/store';


import './App.css';


function App() {
  return (
    <div className="App">
      <div>
        <RecoilRoot>
            <h1 className="recoil">Recoil</h1>
            <RecoilContainer />
        </RecoilRoot>
      </div>
      <div>
        <Provider store={reduxStore}>
          <h1 className="redux">Redux</h1>
          <ReduxContainer />
        </Provider>
      </div>
    </div>
  );
}

export default App;
