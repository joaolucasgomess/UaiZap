import React from "react";
import { styled } from "styled-components";

const ContainerMensagem = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: ${props => props.usuario.trim() ? "1.5vh 1.5vh 1.5vh 0vh" : "1.5vh 1.5vh 0vh 1.5vh"};
    min-width: min-content;
    max-width: 70%;
    padding: 1.5vh;
    color: white;
    background-color: ${props => props.usuario.trim() ? "#222E35" : "#0c5247"};
`

const P = styled.p`
    padding: 0;
    margin: 0;
    word-break: break-word;
    display: ${props => props.texto === '⦸ Mensagem apagada' ? "none" : "inline"};
`

const AreaMensagem = styled.div`
    display: flex;
    justify-content: ${props => props.usuario.trim() ? "flex-start" : "flex-end"};
    padding: 10px 25px 10px 25px
`

export function Mensagem(props){

    const selecionaMensagemASerApagada = () => {
        props.enviaMensagemAApagarParaFrameChat(props.indice)
    }

    return(
        <AreaMensagem usuario={props.objetoMensagem.usuario}>
            <ContainerMensagem onDoubleClick={selecionaMensagemASerApagada} usuario={props.objetoMensagem.usuario}>
                <P texto={props.objetoMensagem.texto}>
                    <b>{props.objetoMensagem.usuario}</b>
                </P>
                <P>{props.objetoMensagem.texto}</P>
            </ContainerMensagem>
        </AreaMensagem>
    )
}