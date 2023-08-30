import { FrameChat } from './FrameChat';
import { Input } from './Input';
import { styled } from "styled-components";
import { useState } from "react";

const ContainerChat = styled.div`
    width: 60vh;
    height: 99.6vh;
    border : 0.3vh solid black;
    background-color: rgb(29, 29, 29);
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