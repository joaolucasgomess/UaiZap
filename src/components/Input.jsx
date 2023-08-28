import React from "react";
import { styled } from "styled-components";
import { useState } from "react";

const ContainerInput = styled.form`
    background-color: #222E35;
    height: 5.8vh;
    display: grid;  
    grid-template-columns: 12vh 1fr 12vh; 
`
const InputMensagem = styled.input`
    margin: 0.6vh;
    border-radius: 10px;
`

export function Input(){

    const [usuario, setUsuario] = useState()
    const [mensagem, setMensagem] = useState()

    const enviaMensagem = (e) => {
        e.preventDefault()
        console.log(`${usuario} envia ${mensagem}`)
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
            <Input type="submit" value="Enviar"/>
        </ContainerInput>
    )
}