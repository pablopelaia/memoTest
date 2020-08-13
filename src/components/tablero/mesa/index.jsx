import React, { useContext, useState } from 'react'
import './Styles.css'
import { Fichero } from '../fichero'

export const Tablero = () => {
    
    // let { fichero, armaJuego } = useContext()
    // let intentos = fichero.intentos
    
    // const [miFichero, setMifichero] = useState(armaJuego())


    const handleClick = () => {
        const res=window.confirm('Desea iniciar una nueva partida')
        
        if(res){
            return alert('armaJuego()')
        }

        return
    }

    return (
        <div className="principal">
            <div className="fichas">
                <Fichero />
            </div>
            <div className="elementos">
                <hr className="separador"/>
                <h1 className="contador">
                    Intentos <span>0</span>
                </h1>
                <button className="reiniciar" onClick={handleClick}>
                    Reiniciar
                </button>
                <h1 className="memo-tablero">MemoTest</h1>
            </div>            
        </div>
    )
}
