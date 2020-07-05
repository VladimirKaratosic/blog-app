import React from 'react';
import { Provider } from "react-redux";
import Blog from './app/components/Blog';
import { Store } from './app/redux/Store';
import "./App.scss";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Blog/>
      </div>
    </Provider>
  );
}

export default App;
