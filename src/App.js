import React, { useEffect, useState } from 'react';
import './App.css';
import Top from './Componets/top';
import Bottom from './Componets/bottom';


function App() {

  const getLocalData = () => {
    const lists = localStorage.getItem("mytodolist");
    return lists ? JSON.parse(lists) : [];
  }

  const [tasklist, settaskState] = useState(getLocalData());
  useEffect(() => {
    localStorage.setItem("mytodolist", JSON.stringify(tasklist));
  }, [tasklist]);

  return (
    <div className="container">
      <Top Task={tasklist} changeState={settaskState}></Top>
      <Bottom Task={tasklist} changeState={settaskState}></Bottom>
    </div>

  );
}

export default App;
