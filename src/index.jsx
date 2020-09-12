import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';

class App extends React.Component {
  static sayHi() {
    return 'Hi';
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name } = this.props;
    return (
      <div>
        <h1>Hello, World!!</h1>
        <h2>{this.constructor.sayHi()}</h2>
        <h3>{name}</h3>
      </div>
    );
  }
}

ReactDOM.render(<App name="react" />, document.getElementById('root'));
