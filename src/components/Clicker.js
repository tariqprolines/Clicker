import React from 'react';
import './Clicker.css'
class Clicker extends React.Component{
	constructor(props){
	 super(props);	
	 this.state={
	 	counter:0
	 };	
	 this.increment=this.increment.bind(this);
	 this.decrement=this.decrement.bind(this);
	 this.reload=this.reload.bind(this);
	}
	increment(){
	this.setState({counter:this.state.counter+1})
	}
	decrement(){
	this.setState({counter:this.state.counter-1})	
	}
	reload(){
	this.setState({counter:0})	
	}
	render(){
		return(
			<div className="container mt-5">
				<div className="box border border-secondary rounded">
				 <div className="clicker-display d-flex align-items-center bg-light text-secondary">
				  <div className="mx-auto display-1">{this.state.counter}</div></div>
				  <div className="clicker-button-panel d-flex flex-row">
				  <button className="btn btn-success w-100" onClick={this.increment}><i className="fa fa-plus fa-2x"></i>
				  </button>
				  <button className="btn btn-warning w-100" onClick={this.reload}><i className="fa fa-refresh fa-2x"></i>
				  </button>
				  <button className="btn btn-danger w-100" onClick={this.decrement}><i className="fa fa-minus fa-2x"></i>
				  </button>
				  </div>
				  </div>
			</div>
			);
	}
}
export default Clicker;