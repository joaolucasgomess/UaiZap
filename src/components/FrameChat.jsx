import React from "react";
import { styled } from "styled-components";
import { Mensagem } from "./Mensagem";

const ContainerFrameChat = styled.div`
    background-color: rgb(29, 29, 29);
    height: 92vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

export function FrameChat(props){

    const cardMensagem = props.arrayMensagens.map(mensagem => <Mensagem objetoMensagem={mensagem}/>)

    return(
        <ContainerFrameChat>
            {cardMensagem}
        </ContainerFrameChat>
    )
}