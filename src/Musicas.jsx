import React from "react";
import Artista from "./Artista";
import Titulo from "./Titulo";
import Gostei from "./Gostei";


class Musicas extends React.Component{

    render(){
        const card ={display:"flex", margin:"10px", border:"1px solid #fff",borderRadius:"4px"};
        const info ={display:"flex", flexDirection:"column", flex:1};
        const musica=this.props.item;
       
        return(<section style= {card}>
            <div style ={info}>
            <Artista nome={this.props.item.artista}/>
            <Titulo titulo={this.props.item.titulo}/>
            <Gostei/>
           
            </div>
            <div>
                <img src= {musica.foto} alt="Capa do álbum" style={{display : "block",width:"100px", 
                height:"100px", padding:"1px"}}/>
            </div>

        </section>)
    }
   
}
export default Musicas;
