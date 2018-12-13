import React from 'react';


export default function GameBoard(props){
const onSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.target);
    return props.handleNewGuess(data.get('value')) ;
}

return (
<form onSubmit={onSubmit}>
        <label htmlFor="guessField">Guess a number</label>
        <input name='value' type="text"/>
        <button type='submit' >make a guess</button>
    </form>

)


}