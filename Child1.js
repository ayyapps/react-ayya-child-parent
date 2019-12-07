import React,{Component} from 'react';

export default class extends Component
{
  constructor(props){
    super(props);
    this.state={};
  }
  onChange = (event) =>
  {
    this.setState({value:event.target.value})
  };
  sendToParent = () =>
  {
    this.props.sendToParent1(this.state.value);

  };
  render(){
    return(
      <div>
      <input value={this.state.value} onChange={this.onChange} />
      <button onClick={this.sendToParent}>Send to Parent</button>
      </div>
    )
  }
}
