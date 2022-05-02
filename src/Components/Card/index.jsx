import React from "react"


//Components
import { CardPerfil, Perfil, PerfilName, Icon, Txt, Link, Paragrafo, Ajuda, } from './style'

import Jadi from '../../assets/img/Jadi.jpg'
import Nobre from '../../assets/img/Nobre.jpg'
import Briza from '../../assets/img/Brisa luiza.jpg'
import Mary from '../../assets/img/Marry.jpg'
import Republic from '../../assets/img/Republic.jpg'

//Icone
import { FaUserCircle } from 'react-icons/fa'

export function CardRight() {
    return (
        <>
            <CardPerfil>
                <Perfil>
                    <Icon primary>
                        <FaUserCircle />
                    </Icon>
                    <PerfilName>
                        <Txt primary>Gusttavo_Draw</Txt>
                        <Txt >Gustavo Pereira Martins</Txt>
                    </PerfilName>
                    <Link href="#" primary>Mudar</Link>
                </Perfil>

                <Perfil primary>
                    <Paragrafo>Sugestões para você</Paragrafo>
                    <Link href="#" second>Ver tudo</Link>
                </Perfil>

                <Perfil>
                    <Icon>
                        <img src={Briza} alt="Imagem da pessoa" />
                    </Icon>
                    <PerfilName>
                        <Txt primary>brisa.luiza</Txt>
                        <Txt >Sugestões para você</Txt>
                    </PerfilName>
                    <Link href="#">Seguir</Link>
                </Perfil>
                <Perfil>
                    <Icon>
                        <img src={Jadi} alt="Imagem da pessoa" />
                    </Icon>
                    <PerfilName>
                        <Txt primary>jabi_draw</Txt>
                        <Txt >Novo no Instagram</Txt>
                    </PerfilName>
                    <Link href="#">Seguir</Link>
                </Perfil>
                <Perfil>
                    <Icon>
                        <img src={Nobre} alt="Imagem da pessoa" />
                    </Icon>
                    <PerfilName>
                        <Txt primary>nobre7162</Txt>
                        <Txt >Novo no Instagram</Txt>
                    </PerfilName>
                    <Link href="#">Seguir</Link>
                </Perfil>
                <Perfil>
                    <Icon>
                        <img src={Mary} alt="Imagem da pessoa" />
                    </Icon>
                    <PerfilName>
                        <Txt primary>marry_magrela</Txt>
                        <Txt >Novo no Instagram</Txt>
                    </PerfilName>
                    <Link href="#">Seguir</Link>
                </Perfil>
                <Perfil>
                    <Icon>
                        <img src={Republic} alt="Imagem da pessoa" />
                    </Icon>
                    <PerfilName>
                        <Txt primary>republicathefive</Txt>
                        <Txt>Seguido por cauaa.zz </Txt>
                    </PerfilName>
                    <Link href="#">Seguir</Link>
                </Perfil>

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