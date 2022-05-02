//Components
import React from "react";
import { Principal, Cards, Card, ImgCard, Paragrafo } from './style'

//imgs
import Proa from '../../assets/img/Proa.jpg'
import FeFotos from '../../assets/img/Feh fotos.jpg'
import Mariana from '../../assets/img/Mariana.jpg'
import AnaClara from '../../assets/img/AnaClara.jpg'
import AdegaDosAmigos from '../../assets/img/AdegaDosAmigos.jpg'
import Wesley from '../../assets/img/Wesley.jpg'
import Luma from '../../assets/img/Luma.jpg'
import Gustavo from '../../assets/img/Gustavo.jpg'
import Kaue from '../../assets/img/Kaue.jpg'

export function Stories() {
    return (
        <>
            <Principal>
                <Cards>
                    <Card>
                        <ImgCard src={FeFotos} alt="Foto de perfil" />
                        <Paragrafo>feh.fotos</Paragrafo>
                    </Card>
                    <Card>
                        <ImgCard src={Kaue} alt="Foto de perfil" />
                        <Paragrafo>_likeguzma</Paragrafo>
                    </Card>
                    <Card>
                        <ImgCard src={Proa} alt="Foto de perfil" />
                        <Paragrafo>instituto.proa</Paragrafo>
                    </Card>
                    <Card>
                        <ImgCard src={Mariana} alt="Foto de perfil" />
                        <Paragrafo>mariana_po...</Paragrafo>
                    </Card>
                    <Card>
                        <ImgCard src={AnaClara} alt="Foto de perfil" />
                        <Paragrafo>anyllop_19</Paragrafo>
                    </Card>
                    <Card>
                        <ImgCard src={AdegaDosAmigos} alt="Foto de perfil" />
                        <Paragrafo>adegadosa...</Paragrafo>
                    </Card>
                    <Card>
                        <ImgCard src={Wesley} alt="Foto de perfil" />
                        <Paragrafo>lieleann</Paragrafo>
                    </Card>
                    <Card>
                        <ImgCard src={Luma} alt="Foto de perfil" />
                        <Paragrafo>lumavs1</Paragrafo>
                    </Card>
                    <Card>
                        <ImgCard src={Gustavo} alt="Foto de perfil" />
                        <Paragrafo>gustavoque...</Paragrafo>
                    </Card>
                </Cards>
            </Principal>
        </>
    )
}