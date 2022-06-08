import React from "react"

//Components
import { CardPerfil, Perfil, PerfilName, Icon, Txt, Link, Paragrafo, Ajuda, } from './style'

import { CardsPerfil } from "../../mock/CardsPerfis"

//Icone
import { FaUserCircle } from 'react-icons/fa'

export function CardRight() {
    return (
        <>
            <CardPerfil>
                <Perfil>
                    <Icon primary>
                        <i><FaUserCircle /></i>
                        <PerfilName>
                            <Txt primary>Gusttavo_Draw</Txt>
                            <Txt >Gustavo Pereira Martins</Txt>
                        </PerfilName>
                    </Icon>
                    <Link href="#" primary>Mudar</Link>
                </Perfil>

                <Perfil primary>
                    <Paragrafo>Sugestões para você</Paragrafo>
                    <Link href="#" second>Ver tudo</Link>
                </Perfil>


                {CardsPerfil.map((item) => (
                    <Perfil key={item.id}>
                        <Icon>
                            <img src={item.img} alt="Imagem da pessoa" />
                            <PerfilName>
                                <Txt primary>{item.apelido}</Txt>
                                <Txt >{item.info}</Txt>
                            </PerfilName>
                        </Icon>
                        <Link href="#">Seguir</Link>
                    </Perfil>
                ))}

                <Ajuda>
                    <div>
                        <a href="#">Sobre</a>
                        <a href="#">Ajuda</a>
                        <a href="#">Imprensa</a>
                        <a href="#">API</a>
                        <a href="#">Carreiras</a>
                        <a href="#">Privacidade</a>
                        <a href="#">Termos</a>
                        <a href="#">Localização</a>
                        <a href="#">Principais contas</a>
                        <a href="#">Hashtags</a>
                        <a href="#">Idioma</a>
                    </div>
                </Ajuda>
            </CardPerfil>
        </>
    )
}