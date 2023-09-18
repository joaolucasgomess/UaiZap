import React from "react";
import { styled } from "styled-components";
import { Mensagem } from "./Mensagem";

let wallPaper = require('./img/wallpaper-default.jpg');

const ContainerFrameChat = styled.div`
    background-image: url(${wallPaper});
    background-repeat: no-repeat;
    background-size: cover;
    height: 92.3vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

export function FrameChat(props){

    const buscaMensagemAApagar = (indiceMensagem) => {
        props.apagaMensagem(indiceMensagem)
    }

    const cardMensagem = props.arrayMensagens.map(
        (mensagem, index) => 
            <Mensagem 
                objetoMensagem={mensagem} 
                key={index} 
                indice={index}
                buscaMensagemAApagar={buscaMensagemAApagar}
            />
    )

    return(
        <ContainerFrameChat>
            <section style={{ overflowY: "auto"}}>
                {cardMensagem}
            </section>
        </ContainerFrameChat>
    )
}