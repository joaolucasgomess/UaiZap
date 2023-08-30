import React from "react";
import { styled } from "styled-components";

const ContainerFrameChat = styled.div`
    background-color: rgb(29, 29, 29);
    height: 92vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

const ContainerMensagem = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 1.5vh;
    min-width: min-content;
    max-width: max-content;
    padding: 1.5vh;
    color: white;
    background-color: #222E35;
    margin: 4vh;
`

const P = styled.p`
    padding: 0;
    margin: 0;
`

export function FrameChat(props){

    return(
        <ContainerFrameChat>
            <ContainerMensagem>
                <P><b>{props.dadosMensagem.usuario}</b></P>
                <P>{props.dadosMensagem.texto}</P>
            </ContainerMensagem>
        </ContainerFrameChat>
    )
}