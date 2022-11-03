import React from "react";
function Artista(props){
    const estilo={
        fontSize:"!.5rem",
        fontWeight:"400",
        lineHeight:"1.334",
        letterSpacing:"0cm",
    };
    return <span style={estilo}>Artista:  {props.nome}</span>;
}
export default Artista;