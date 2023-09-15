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

    const cardMensagem = props.arrayMensagens.map(
        (mensagem, index) => <Mensagem objetoMensagem={mensagem} key={index} indice={index}/>
    )

    return(
        <ContainerFrameChat>
            <section style={{ overflowY: "auto"}}>
                {/* {console.log(cardMensagem)} */}
                {cardMensagem}
            </section>
        </ContainerFrameChat>
    )
}