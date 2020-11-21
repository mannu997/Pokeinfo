import React from 'react';




function Chracterstics({info,pokemonkey}) {
	var pokemoninfo = {}
    info.forEach((pokemon)=>{
    	pokemoninfo[pokemon.id] = pokemon;
    })
    var pokemon = pokemoninfo[pokemonkey];
 
	return (
		<div className="chracterstics">
		    <p>Form : {pokemon.species.name}</p>
		    <p>Type : {pokemon.types[0].type.name}</p>
		    <p>Weight : {pokemon.weight}	</p>	
		    <p>Height : {pokemon.height}	</p> 
        </div>
	)
}
















export default Chracterstics;