import React from "react";
import { styled } from "styled-components";

const ContainerFrameChat = styled.div`
    background-color: rgb(29, 29, 29);
    height: 94vh;
    padding-left: 4vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

const ContainerMensagem = styled.div`
    border: 5px solid red;
    width: min-content;
    background-color: blue;
    display: flex;
    flex-direction: column;
`

const P = styled.p`
    padding: 0px;
    margin: 0px;
`

export function FrameChat(props){

    return(
        <ContainerFrameChat>
            <ContainerMensagem>
                <P>{props.dadosMensagem.usuario}</P>
                <P>{props.dadosMensagem.texto}</P>
            </ContainerMensagem>
        </ContainerFrameChat>
    )
}