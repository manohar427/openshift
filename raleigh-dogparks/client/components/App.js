import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
  
  render() {
    
    return (
      <div>Hi 123:{process.env.REACT_APP_NOT_SECRET_CODE}</div>
    );
  }
}
