import React,{Component} from 'react';
import Pictures from './Pictures';
import Card from './Card';

class Fetchpokemon extends Component {
    constructor (){
    	super();
    	this.state = {
    		info:[],
    		loading:true,
        clickcaller:false,
        id:0,
      }
    }
    
    componentDidMount(){
        const urls = this.props.data.url;
        Promise
        .all(urls.map(url=>
          fetch(url).then(resp =>resp.json())
        ))
        .then(array =>{ 
          var info = [];     	
          info.push(array)
          info = info[0]
          this.setState({info,loading:false})	
       })
    }

 
  
    onClickFunction = (event,pokemonkey)=> {
       this.setState({id:pokemonkey})
       this.setState({clickcaller:true});
    }

    render(){
      if (this.state.clickcaller){
        return (
          <Card info = {this.state.info} pokemonkey ={this.state.id}  />
        )
      }
 
      if (!this.state.loading){
        return <Pictures info = {this.state.info} clickFunction={this.onClickFunction}/>;
      }
      else {
	       return <h1>Loading</h1>
      }

    }
}
export default Fetchpokemon;