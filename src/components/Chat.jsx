import { FrameChat } from './FrameChat';
import { Input } from './Input';
import { styled } from "styled-components";
import { useState } from "react";

const ContainerChat = styled.div`
    width: 60vh;
    height: 99.6vh;
    background-color: rgb(29, 29, 29);
`

export function Chat(){

    const [arrayMensagens, setArrayMensagens] = useState([])

    const getArrayMensagens = (objetoMensagem) => {
        setArrayMensagens(arrayMensagens => [...arrayMensagens, objetoMensagem])
    }

    const apagaMensagem = (indiceMensagem) => {
        const arrayMensagensAtualizado = [...arrayMensagens]
        arrayMensagensAtualizado[indiceMensagem] = {texto: '⦸ Mensagem apagada'}
        setArrayMensagens(arrayMensagensAtualizado)
    }

    return(
        <ContainerChat>
            <FrameChat arrayMensagens={arrayMensagens} apagaMensagem={apagaMensagem}/>
            <Input getArrayMensagens={getArrayMensagens}/>
        </ContainerChat>
    )
}