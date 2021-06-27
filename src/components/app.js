import React from 'react';
import users from '../test-data';
import User from '../components/User';
import Game from './TicTacToe';

class App extends React.Component{
  render(){
    return(
      <Game />
    )
  }
}
export default App;


