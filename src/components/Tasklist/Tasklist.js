import React, {useState} from 'react';
import './tasklist.css';
import propTypes from 'prop-types';

export default function Tasklist({ title }){
  const [count, setCount] = useState(0);

  const increment = ()=> {
    setCount((currentCount) => {
      return currentCount + 1;

    });
    
  };

  return(
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {count}
        <button onClick={increment}>Incrementar</button>
      </div>
    </div>
  );
}

Tasklist.propTypes = {
    title: propTypes.string.isRequired
}