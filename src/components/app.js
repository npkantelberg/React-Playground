import React from 'react';
import users from '../test-data';
import User from '../components/User';
import Game from './TicTacToe';
import MemoryGame from './MemoryGame';

class App extends React.Component{
  render(){
    return(
      // Tic Tac Toe Game
      // <Game />
      // End Tic Tac Toe Game
      <MemoryGame></MemoryGame>
    )
  }
}
export default App;


