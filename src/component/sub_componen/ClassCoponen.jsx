import React from 'react';
import './Style.css';
class classComponen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number1: '',
      number2: '',
      total: '',
    };
  }
  handlenumber1 = (event) => {
    this.setState({ number1: event.target.value });
  };
  handlenumber2 = (event) => {
    this.setState({ number2: event.target.value });
  };

  exe = (e) => {
    e.preventDefault();
    this.setState({ total: parseInt(this.state.number1) + parseInt(this.state.number2) });
  };
  render() {
    return (
      <div>
        <div className="nav">
          <h1>{this.props.nama}</h1>
        </div>
        <div>
          <h1>Simple Calculator</h1>
          <form onSubmit={this.exe}>
            <div>
              Number 1:
              <input type="text" value={this.state.number1} onChange={this.handlenumber1} />
            </div>
            <div>
              Number 2:
              <input type="text" value={this.state.number2} onChange={this.handlenumber2} />
            </div>
            <div>
              <button type="submit"> Add </button>
            </div>
          </form>
          <input type="text" name="name" value={this.state.total} />
        </div>
      </div>
    );
  }
}
export default classComponen;
