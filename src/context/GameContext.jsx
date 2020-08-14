import React, { useState } from 'react'
import mezclar from 'lodash.shuffle'
import { MiFiguras } from './images'

let GameContext = React.createContext()
let { Provider, Consumer } = GameContext


function GameProvider({ children }) {
    
    let [fichero, setFichero] = useState({})
   
    function armaJuego() {
        const misFichas= armaFichero()
        fichero = {
            memoTest:"Cargando",
            cargar:"Jugar",
            fichas: misFichas,
            fichasSeleccionadas: [],
            estaComprobando: false,
            intentos: 0
        }
        setFichero(fichero)
    }

    function armaFichero(){

        const NUMERO_DE_FICHAS = 30
        let fichas = []
        const MIS_FIGURAS = MiFiguras()

        while (fichas.length < NUMERO_DE_FICHAS) {
            const i = Math.floor(Math.random() * MIS_FIGURAS.length)
            const ficha = {
                figura: MIS_FIGURAS.splice(i, 1)[0],
                fueAdivinada: false,
                estaCliqueda: false
            }
            fichas.push(ficha)
            fichas.push({...ficha})
        }
        return mezclar(fichas)
    }

    function reiniciaJuego() {
        const resetFichero = {
            ...fichero,
            memoTest:"Cargando",
            cargar:"Terminado"
        }
        setFichero(resetFichero)
    }

    function juegoFinalizado() {
        const finPartida = {
            ...fichero,
            memoTest:"Cargando",
            cargar:"Start"
        }
        setFichero(finPartida)
    }

    function cargarPagina(){
        const miRender = {
            ...fichero,
            memoTest: fichero.cargar
        }
        setFichero(miRender)
    }

    return (
        <Provider value={{fichero, armaJuego, reiniciaJuego, juegoFinalizado, cargarPagina}}>
            {children}
        </Provider>
    )
}

export { GameProvider, Consumer as GameConsumer, GameContext }