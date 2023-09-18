import React from "react";
import { styled } from "styled-components";

const ContainerMensagem = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: ${props => props.usuario === '' ? "1.5vh 1.5vh 0vh 1.5vh" : "1.5vh 1.5vh 1.5vh 0vh"};
    min-width: min-content;
    max-width: 70%;
    padding: 1.5vh;
    color: white;
    background-color: ${props => props.usuario === '' ? "#0c5247" : "#222E35"};
`

const P = styled.p`
    padding: 0;
    margin: 0;
    word-break: break-all;
`

const AreaMensagem = styled.div`
    display: flex;
    justify-content: ${props => props.usuario === '' ? "flex-end" : "flex-start"};
    padding: 10px 25px 10px 25px
`

export function Mensagem(props){

    const selecionaMensagemASerApagada = () => {
        props.buscaMensagemAApagar(props.indice)
    }

    return(
        //⦸ https://en.ajakteman.com/p/prank.html
        <AreaMensagem usuario={props.objetoMensagem.usuario}>
            <ContainerMensagem onDoubleClick={selecionaMensagemASerApagada} usuario={props.objetoMensagem.usuario}>
                <P><b>{props.objetoMensagem.usuario}</b></P>
                <P>{props.objetoMensagem.texto}</P>
            </ContainerMensagem>
        </AreaMensagem>
    )
}