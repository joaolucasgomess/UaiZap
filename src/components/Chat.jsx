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

    const buscaDoFilhoArrayMensagens = (objetoMensagem) => {
        setArrayMensagens(arrayMensagens => [...arrayMensagens, objetoMensagem])
    }

    const apagaMensagem = (indiceMensagem) => {
        const arrayMensagensAtualizado = [...arrayMensagens]
        arrayMensagensAtualizado[indiceMensagem] = {
            usuario: `${arrayMensagens[indiceMensagem].usuario}`, 
            texto: '⦸ Mensagem apagada'
        }
        setArrayMensagens(arrayMensagensAtualizado)
    }

    return(
        <ContainerChat>
            <FrameChat arrayMensagens={arrayMensagens} enviaMensagemAApagarParaChat={apagaMensagem}/>
            <Input enviaParaOPaiArrayMensagens={buscaDoFilhoArrayMensagens}/>
        </ContainerChat>
    )
}