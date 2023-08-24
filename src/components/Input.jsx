import React from "react";

export function Input(){
    return(
        <>
            <div>
                <input type="text" placeholder="Usuário"/>
                <input type="text" placeholder="Mensagem"/>
                <button type="submit">Enviar</button>
            </div>
        </>
    )
}