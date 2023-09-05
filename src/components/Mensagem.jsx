import React from "react";
import { styled } from "styled-components";

const ContainerMensagem = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 1.5vh;
    min-width: min-content;
    max-width: max-content;
    padding: 1.5vh;
    color: white;
    background-color: #222E35;
    margin-left: 4vh;
    margin-bottom: 4vw;
`

const P = styled.p`
    padding: 0;
    margin: 0;
`

export function Mensagem(props){
    return(
    <ContainerMensagem>
        <P><b>{props.objetoMensagem.usuario}</b></P>
        <P>{props.objetoMensagem.texto}</P>
    </ContainerMensagem>
    )
}