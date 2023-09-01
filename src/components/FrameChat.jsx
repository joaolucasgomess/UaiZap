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

    const componenteMensagem = <Mensagem dadosMensagem={props.dadosMensagem}/>

    return(
        <ContainerFrameChat>
            {props !== {} ? componenteMensagem : ''}
        </ContainerFrameChat>
    )
}