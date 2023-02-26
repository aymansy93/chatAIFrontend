import React from 'react';
import './App.css';
import Header  from './component/header/Header';
import Content from './component/content/Content';


function App() {
  return (
    <div className="container-fluid">

        <Header />
        <Content/>
    </div>
  );
}

export default App;
