import React from 'react'

const procesoPesado = (iteraciones) => {
    for (let index = 0; index < iteraciones; index++) {
        console.log(`Proceso pesado`)
    }
    return `${iteraciones} iteraciones realizadas`
}

export default procesoPesado