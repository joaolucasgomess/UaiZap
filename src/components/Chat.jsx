import { FrameChat } from './FrameChat';
import { Input } from './Input';
import { styled } from "styled-components";

const ContainerChat = styled.div`
    width: 60vh;
    height: 99.6vh;
    border : 2px solid black;
`

export function Chat(){

    return(
        <ContainerChat>
            <FrameChat/>
            <Input/>
        </ContainerChat>
    )
}