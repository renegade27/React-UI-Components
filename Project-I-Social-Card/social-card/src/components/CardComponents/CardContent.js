import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
      <div className="content-bottom">
        <p className="content-header">Get started with React</p>
        <p className="content-block">
          React makes it painless to make interactive UI's. Design simple views
          for each state in your application.
        </p>
        <a
          href="http://reactjs.org"
          className="content-link"
        >
          reactjs.org
        </a>
      </div>
    );
  };
  export default CardContent;
