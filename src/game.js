import React from 'react';
import Header from './header';
import GameBoard from './gameboard';
import Output from './output';

export default class Game extends React.Component {
constructor(props){
super(props);
this.state ={button:false}
// guesses buttonclicked?
}




render(){
 return(
     <react.fragment>
        <Header/>
        <GameBoard/>
        <Output/>
    </react.fragment>
 )

}


}