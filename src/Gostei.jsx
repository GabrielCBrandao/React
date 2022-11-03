import React from "react";



class Gostei extends React.Component{
    constructor(props){
        super(props);
        this.state ={valor:"👍"}
    }
    render(){
       return <div> 
       <button>🎧</button> 
    {this.state.valor}</div>
}
}
export default Gostei;
           
    
