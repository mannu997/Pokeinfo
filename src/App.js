import React, {Component}from 'react';
import Fetchpokemon from './Fetchpokemon';


class App extends Component {
    constructor(){
    	super();
    	this.state = {
        loading:true,
        pokemon : [],
        url: [],
        
        }
    }

    componentDidMount() {
	   fetch("https://pokeapi.co/api/v2/pokemon/")
	   .then(resp => resp.json())
	   .then(items =>{
            const pokemon = [];
            const url =[];
            items.results.forEach( item => {
                pokemon.push(item.name)
                url.push(item.url)
 
            })
                this.setState({pokemon,url,loading:false})   
        })
    }



 
    render (){
        if (!this.state.loading){
	        return (
                <div>
                    <Fetchpokemon data={this.state}/>
                </div>
        	)
        }
        else {
            return <h1>Loading</h1>
        }
    }
}


export default App; 

