import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

class Square extends React.Component {
  // initializing state and defining default value null
  constructor(props){
    super(props);
    this.state ={
      value: null,
    };
  }

  render() {
    return (
      // adding a click event that displays "click"
      // <button className="square" onClick={() => alert('click')}>
        /* {this.props.value} */

        // onClick displays X
        <button 
        className="square" 
        onClick={() => this.setState({value:'X'})}>
        {/* listens to the state value */}
        {this.state.value}
     </button>
    );
  }
}

// Board is the parent container from Square
class Board extends React.Component {
  // initiating a listener on parent level
  constructor(props){
    super(props);
    this.state ={
      // here all 9 square fields are tracked
      squares: Array(9).fill(null),
    }
  };
  renderSquare(i) {
    // return <Square value={i} />;

    // listening to the square state
    return <Square 
    value={this.state.squares[i]} 
    // adding a onClick event for square to call upon for changing "X" or "O"
    onClick={() => this.handleClick(i)}
    />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {/* content can be "characters" or numbers which are diplayed within the renderSquare(#) */}
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
