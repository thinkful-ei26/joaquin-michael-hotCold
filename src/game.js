import React from 'react';
import Header from './header';
import GameBoard from './gameboard';
import Output from './output';

export default class Game extends React.Component {
constructor(props){
super(props);
this.state ={
    guesses:[3],
    answer: 50,
    response:''
}
this.handleNewGuess= this.handleNewGuess.bind(this);
this.handleResponder = this.handleResponder.bind(this);
}


handleResponder(guess){
    console.log('guess is', guess);
    if(guess < this.state.answer){
    this.setState({response: 'Cold'});
    }
    else if(guess > this.state.answer){ 
    this.setState({response: 'Hot'});
    }
    else{
    this.setState({response: 'You got it!'});
    }
}


handleNewGuess(guess){
    console.log(this.state.guesses);
    console.log(guess);
    this.setState({guesses: [...this.state.guesses, guess]});
    this.handleResponder(guess);
}

handleNewGame(){
    
}

render(){
 return(
     <React.Fragment>
        <Header/>
        <GameBoard handleNewGuess={this.handleNewGuess}/> 
        <Output guesses={this.state.guesses} response={this.state.response}/>

    </React.Fragment>
 )
}
}

// () => {this.setState({guesses: [...this.state.guesses, guess]})