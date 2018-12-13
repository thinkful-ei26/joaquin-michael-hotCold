import React from 'react';
import './output.css';

export default function Output(props){

    console.log(props.guesses);
    const showGuesses = props.guesses.map((guess,index) => {
        return <li key={index} className='guess-item'>{guess}</li>
    })
   

    return(
    <section className='output-area'>
        <span className='hot-cold'>Hot</span>
        <br></br>
        <ul className='guess-history'>{showGuesses}</ul>
     </section>
    )
}