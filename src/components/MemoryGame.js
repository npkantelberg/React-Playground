import React from 'react';



class MemoryGame extends React.Component{
  render(){
    return(
      <div className="">
        <h1>Memory Game</h1>
        <div class="board">{cards.map(card => (<div matchType={card.MatchType} className="memory-square" key={card.name}>{card.name}</div>))} </div>
      </div>
    )
  }
}

export default MemoryGame;

let cards = [
  {
    "name": "Square One",
    "MatchType": "square",
    "status": "active"
  },
  {
    "name": "Square two",
    "MatchType": "square",
    "status": "active"
  },
  {
    "name": "Circle One",
    "MatchType": "circle",
    "status": "active"
  },
  {
    "name": "Circle Two",
    "MatchType": "circle",
    "status": "active"
  },
  {
    "name": "Triangle One",
    "MatchType": "triangle",
    "status": "active"
  },
  {
    "name": "Triangle Two",
    "MatchType": "triangle",
    "status": "active"
  }
]