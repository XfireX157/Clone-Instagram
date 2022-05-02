import React, { useState } from 'react'

import { Stories } from '../Stories'
import { Feed } from '../Feeds/index'
import { CardRight } from '../Card/index'
import { ContainerGlobal, ContainerPrincipal, ContainerConfigPerfil } from './style'

import { ThemeProvider } from 'styled-components'
import { TemaClaro, TemaEscuro } from '../Temas/index'

import Arte from '../../assets/img/Arte.jpg'
import Bernado from '../../assets/img/Bernado.jpg'
import ProaImg from '../../assets/img/ProaImg.jpg'
import Academy from '../../assets/img/Academy.jpg'
import BernadoPerfil from '../../assets/img/BernadoPerfil.jpg'
import ProaPerfil from '../../assets/img/Proa.jpg'

export function Container() {

    const [tema, setTema] = useState(true)

    const toggleTema = () => {
        setTema((tema) => !tema)
    }

    return (
        <>
            <ThemeProvider theme={tema ? TemaClaro : TemaEscuro}>
                <ContainerGlobal>
                    <ContainerPrincipal>
                        <Stories />
                        <Feed img={Arte} perfil={Academy} username={'academy_of.art'} />
                        <Feed img={Bernado} perfil={BernadoPerfil} username={'bernardobarroso_'} />
                        <Feed img={ProaImg} perfil={ProaPerfil} username={'instituto.proa'} />
                    </ContainerPrincipal>
                    <ContainerConfigPerfil>
                        <CardRight />
                        <div>
                            <button onClick={toggleTema}>Muda cor</button>
                        </div>
                    </ContainerConfigPerfil>
                </ContainerGlobal>
            </ThemeProvider>
        </>
    )
}