import React from "react";
import './App.css';



export default class Cars extends React.Component{
	constructor(){
  	super()
    
    this.state = {
    	limit: 5,
      cars: ["Audi", "Alfa Romeo", "BMW", "Citroen", "Dacia", "Ford", "Mercedes", "Peugeot", "Porsche", "VW","a","b","c","d","e","Audi", "Alfa Romeo", "BMW", "Citroen", "Dacia", "Ford", "Mercedes", "Peugeot", "Porsche",]
    }
    
    
  }
  
  showPreviousCars() {
    this.setState({
    	limit: this.state.limit - 5
    })
  }
  
  showNextCars(){
  	this.setState({
    	limit: this.state.limit + 5
    })
  }
  
  
  render(){
  	let cars = this.state.cars.slice(0,this.state.limit);
  	return(
    	<div className="car-wrapper">
        <ul>
          <li className="btn btn-danger"><a onClick={this.showPreviousCars.bind(this)}>Previous 5</a></li>
       	  {cars.map((car, i) => {
        	return(
          	<div className="border" key={i}><i className="fa fa-heart-o" style={{padding:"10px",backgroundColor:"red",borderRadius: "50%",margin:"15px"}}></i>{car}</div>
          	
          )
        	
        })}
        <li className="btn btn-success"><a onClick={this.showNextCars.bind(this)}>Next 5</a></li>
        </ul>

    	</div>
    )
  }
}




