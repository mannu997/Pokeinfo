import React from 'react';
import Pic from './Pic.js';


const Pictures = (props) => {
    var keys = [] 
    var pokemoninfo = {}
    props.info.forEach((pokemon)=>{
    	pokemoninfo[pokemon.id] = pokemon;
    	keys.push(pokemon.id)
    })
    console.log(pokemoninfo)
	return (
        <div className="pokemons">
       {keys.map((pokemonkey,i)=>{
        return <div key={i+1}><Pic key = {i+1} pokemonkey={pokemonkey}  
        clickFunction={props.clickFunction} /></div>
        })}
        </div>
    )
}



export default Pictures;