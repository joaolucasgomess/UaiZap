import React from "react";
import { styled } from "styled-components";
import { useState } from "react";

const ContainerInput = styled.form`
    background-color: #222E35;
    height: 6.8vh;
    padding-top: 0.5vh;
    border-radius: 1.5vh 1.5vh 0vh 0vh;
    display: grid; 
    grid-template-columns: 12vh 1fr 6vh; 
`
const InputMensagem = styled.input`
    margin: 0.6vh;
    border-radius: 1.5vh;
    border: none;
    background-color: #2A3942;
    outline: none;
    color: #FFFFFF;
    padding : 0.5vh;
    font-size: 0.9em;
    word-break: break-word;
`

const InputEnviar = styled.button`
    display: flex;
    background-color: #1bd741;
    border: none;
    border-radius: 50%;
    margin: 0.6vh 0.3vh 0.6vh 0.3vh;
    width: 5vh;
    height: 5vh;
    align-items: center;
    justify-content: center;
`

const Img = styled.img`
    width: 3vw;
    height: 3vh;
`

export function Input(props){

    let imgSendMessage = require('./assets//img/send-message.png')

    const [usuario, setUsuario] = useState('')
    const [mensagem, setMensagem] = useState('')

    const enviaMensagem = (e) => {
        e.preventDefault()
        if((!usuario.trim() && mensagem.trim()) || (usuario.trim() && mensagem.trim())){
            props.enviaParaOPaiArrayMensagens({usuario: usuario, texto: mensagem})
        }      
        setMensagem('')
    }
    
    return(
        <ContainerInput onSubmit={enviaMensagem}>
            <InputMensagem
                type="text"
                placeholder="Usuário"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
            />
            <InputMensagem 
                type="text" 
                placeholder="Mensagem"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
            />
            <InputEnviar type="submit" >
                <Img src={imgSendMessage} alt="Enviar"/>
            </InputEnviar>
        </ContainerInput>
    )
}