import React from 'react';
import './Style.css';
class classComponen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value1: 0,
      value2: 0,
      hasil: 0,
    };

    this.plusHendler = this.plusHendler.bind(this);
    this.minusHendler = this.minusHendler.bind(this);
    this.plusHendlerDua = this.plusHendlerDua.bind(this);
    this.minusHendlerDua = this.minusHendlerDua.bind(this);
    this.hasil = this.hasil.bind(this);
  }
  plusHendler() {
    this.setState({ value1: this.state.value1 + 1 });
  }
  minusHendler() {
    if (this.state.value1 > 0) {
      this.setState({ value1: this.state.value1 - 1 });
    }
  }
  // value dua
  plusHendlerDua() {
    this.setState({ value2: this.state.value2 + 1 });
  }
  minusHendlerDua() {
    if (this.state.value2 > 0) {
      this.setState({ value2: this.state.value2 - 1 });
    }
  }
  // hasil
  hasil() {
    this.setState({ hasil: this.state.value1 + this.state.value2 });
  }
  render() {
    return (
      <div>
        <div className="nav">
          <h1>{this.props.nama}</h1>
        </div>
        <div className="container">
          <h3>penjumlahan mengunakan state in classComponen</h3>
          <div>
            <div className="dis">
              <p>nilai 1 = </p>
              <button onClick={this.minusHendler}>-</button>
              <h4 style={{ color: 'red' }}>{this.state.value1}</h4>
              <button onClick={this.plusHendler}>+</button>
            </div>
            <br />
            <div className="dis">
              <p>nilai 2 = </p>
              <button onClick={this.minusHendlerDua}>-</button>
              <h4 style={{ color: 'red' }}>{this.state.value2}</h4>
              <button onClick={this.plusHendlerDua}>+</button>
            </div>
            <br />
            <div className="dis">
              <button className="btn" onClick={this.hasil}>
                hasil{' '}
              </button>
              <h4 style={{ color: '#367E18' }}> = {this.state.hasil}</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default classComponen;
