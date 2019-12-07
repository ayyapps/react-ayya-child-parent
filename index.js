import React, { Component } from 'react';
import { render } from 'react-dom';
import Child1 from './Child1';
import Child2 from './Child2';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      data: null
    };
  }
  receiveDatafromChild = (data) =>
  {
    this.setState({data});
  }

  render() {
    return (
      <div>
        <Child1 name={this.state.name} sendToParent1={this.receiveDatafromChild} />
        <br/>
        <Child2 name={this.state.name} sendToParent1={this.receiveDatafromChild} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <div>Data from child: {this.state.data}</div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
