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

  renderSquare(i) {
    // listening to the square state
    return (
      <Square
        value={this.props.squares[i]}
        // adding a onClick event for square to call upon for changing "X" or "O"
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    // // checking winner
    // const winner = calculateWinner(this.state.squares);
    // let status;
    // if (winner) {
    //   // displays the winner
    //   status = 'Winner: ' + winner;
    // } else {
    //   // player current turn is X or O
    //   status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    // }




    return (
      <div>
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
  // setting up a history of all the game moves
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      xIsNext: true,
    };
  }

   // handle click event for X or O
  // it monitors click changes, copies (slice) its contents and passes the values on to Square
  handleClick(i) {
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    // prevents a click on a field which allready has had an input 
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    // if true X else O
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    // flips the output bewteen X or O
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      xIsNext: !this.state.xIsNext,
    });

  }

  

  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);
    let status; if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
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

// declaring the winner based on the outcome
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
