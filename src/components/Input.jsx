import React from "react";
import { styled } from "styled-components";
import { useState } from "react";

const ContainerInput = styled.form`
    background-color: #222E35;
    height: 6.8vh;
    padding-top: 1vh;
    border-radius: 1.5vh 1.5vh 0vh 0vh;
    display: grid; 
    grid-template-columns: 12vh 1fr 12vh; 
`
const InputMensagem = styled.input`
    margin: 0.6vh;
    border-radius: 1.5vh;
    border: none;
`

export function Input(props){

    const [usuario, setUsuario] = useState('')
    const [mensagem, setMensagem] = useState('')

    const enviaMensagem = (e) => {
        e.preventDefault()
        if(usuario !== '' && mensagem !== ''){
            props.getArrayMensagens({usuario: usuario, texto: mensagem})
        }
        setUsuario('')
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
            <InputMensagem type="submit" value="Enviar"/>
        </ContainerInput>
    )
}