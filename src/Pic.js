import React from 'react';


function Pic (props){
  
  return <img className ="image" key = {props.pokemonkey} alt='poke' src={`https://pokeres.bastionbot.org/images/pokemon/${props.pokemonkey}.png/`} 
		 onClick = {(e)=>props.clickFunction(e,props.pokemonkey)}  />
    
}

export default Pic;