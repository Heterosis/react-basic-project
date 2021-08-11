import React from 'react';
import style from './App.module.css';

const App = (props) => {
  const { name } = props;

  const sayHi = () => 'Hi';

  return (
    <div>
      <h1 className={`${style.H1}`}>Hello, World!!</h1>
      <h2>{sayHi()}</h2>
      <h3>{name}</h3>
    </div>
  );
};

export default App;
