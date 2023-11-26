import React from 'react';
import './App.css';
import ListsUp from './components/TaskList';
import TitleAndLogoUp  from './components/HeaderTask';

function App() {

  return (
    <>
      <div id='app'>
        <TitleAndLogoUp />
        <ListsUp />
      </div>
    </>
  )
}

export default App
