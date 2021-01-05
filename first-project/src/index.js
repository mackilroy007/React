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

// replacing class Square with funciton for simplification purposes
function Square(props) {
    return (
      /*  Calls upon the onClick event handler which runs the onClick
       function which is defined in the parent class Board. 
       The Board redirects to the this.handleClick(i) 
      
      */
        <button 
          className="square" 
         onClick={props.onClick}>
            {/* recieve the value from the Board */}
            {props.value}
        </button>
    );
  }

// Board is the parent container from Square
class Board extends React.Component {

  // initiating a listener on parent level and storing the information within the Board class
  constructor(props){
    super(props);
    this.state ={
      // here all 9 square fields are tracked
      squares: Array(9).fill(null),
    }
  };

// handle click event for X or O
// it monitors click changes, copies (slice) its contents and passes the values on to Square
handleClick(i){
  const squares = this.state.squares.slice();
  squares[i] = 'X';
  this.setState({squares: squares});
}

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
