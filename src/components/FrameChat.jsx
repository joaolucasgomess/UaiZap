import React from "react";
import { styled } from "styled-components";
import { Mensagem } from "./Mensagem";
import { useEffect, useRef } from "react";

let wallPaper = require('./assets/img/wallpaper-default.jpg');

const ContainerFrameChat = styled.div`
    background-image: url(${wallPaper});
    background-repeat: no-repeat;
    background-size: cover;
    height: 92.3vh;
    display: flex;
    flex-direction: column;
`

export function FrameChat(props){

    const scrollRef = useRef(null)

    const buscaMensagemAApagar = (indiceMensagem) => {
        props.enviaMensagemAApagarParaChat(indiceMensagem)
    }

    const cardMensagem = props.arrayMensagens.map(
        (mensagem, index) => 
            <Mensagem 
                objetoMensagem={mensagem} 
                key={index} 
                indice={index}
                enviaMensagemAApagarParaFrameChat={buscaMensagemAApagar}
            />
    )

    useEffect(() => {

        const alturaSectionFrameChat = scrollRef.current.scrollHeight
        const posicaoAtualScroll = scrollRef.current.scrollTop
        const alturaMaxima = scrollRef.current.clientHeight
        const redefineScroll = alturaSectionFrameChat - posicaoAtualScroll === alturaMaxima

        if(!redefineScroll){
            scrollRef.current.scrollTop = alturaSectionFrameChat
        }
    }, [props.arrayMensagens])

    return(
        <ContainerFrameChat>
            <section style={{ overflowY: "auto"}} ref={scrollRef}>
                {cardMensagem}
            </section>
        </ContainerFrameChat>
    )
}