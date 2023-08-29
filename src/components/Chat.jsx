import { FrameChat } from './FrameChat';
import { Input } from './Input';
import { styled } from "styled-components";
import { useState } from "react";

const ContainerChat = styled.div`
    width: 60vh;
    height: 99.6vh;
    border : 2px solid black;
`

export function Chat(){

    const [dadosMensagem, setDadosMensagem] = useState({})

    function getDadosMensagem(dadosMensagem){
        setDadosMensagem(dadosMensagem)
    }

    return(
        <ContainerChat>
            <FrameChat dadosMensagem={dadosMensagem}/>
            <Input getDadosMensagem={getDadosMensagem}/>
        </ContainerChat>
    )
}