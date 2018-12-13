import React from 'react';
import Header from './header';
import GameBoard from './gameboard';
import Output from './output';

export default class Game extends React.Component {
constructor(props){
super(props);
this.state ={
    guesses:[3],
    answer: 50
}

this.handleNewGuess= this.handleNewGuess.bind(this);
}

handleNewGuess(guess){
    console.log(this.state.guesses);
    console.log(guess);
    this.setState({guesses: [...this.state.guesses, guess]});
}


render(){
 return(
     <React.Fragment>
        <Header/>
        <GameBoard handleNewGuess={this.handleNewGuess}/> 
        <Output guesses={this.state.guesses}/>
    </React.Fragment>
 )
}
}

// () => {this.setState({guesses: [...this.state.guesses, guess]})