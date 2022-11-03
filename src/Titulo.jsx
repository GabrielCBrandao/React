import React from "react";

class Titulo extends React.Component{
    constructor (props){
        super(props);

        this.state = {gostei: "estado"}

    }
    

    render(){
        
        const handleClick=(evento)=>alert 
    (evento.target.innerText);
        return( 
            
                <div className="titulo" onClick={handleClick}>
                   Titulo: {this.props.titulo}
                   </div>

                
            
        
        );
    }
    
}

export default Titulo;