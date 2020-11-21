import React,{Component} from 'react';
import Pic from './Pic';
import App from './App';
import './Card.css';
import Chracterstics from './Chracterstics';




class Card extends Component {

	constructor(){
		super()
		this.state={
			escapeclicked:false,
			powerlength:22
		}
	}

	componentDidMount(){
		document.addEventListener("keydown", this.escFunction, false);
	}

	escFunction=(event)=>{
	    if(event.keyCode === 27 || event.keyCode === 8 || event.type==='click') {
	         this.setState({escapeclicked:true})
	    }
	  }

	doNothing=()=>{
		return ;
	}

	render(){

        if (this.state.escapeclicked){
  	        return <App />
        }
 

        return (
 	        <div className = "pic">
            	<div className="button"><button onClick = {this.escFunction}>X</button></div>
 	            <Chracterstics info = {this.props.info} pokemonkey={this.props.pokemonkey}/>
            	<Pic  pokemonkey={this.props.pokemonkey} clickFunction={this.doNothing}  />
            </div>
        )
    }
}




















export default Card;