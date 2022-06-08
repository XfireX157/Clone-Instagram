import React from "react";

//styled componentes
import { PrincipalCard } from "./style";
import { BoxCard } from './style'
import { HeaderCard } from './style'
import { ImgCard } from './style'
import { InfoTxtCard } from './style'
import { CompartilharBtn } from './style'
import { Txt } from "./style";
import { Section } from "./style"
import { ImgConteudo } from "./style"
import { IconesCard } from "./style";
import { Icon } from "./style";
import { CardSocialMidia } from "./style";
import { Grid } from "./style";
import { CardComent } from "./style";
import { TextoHora } from './style'
import { FormComent } from './style'
import { Curtidas } from './style'

//icones
import { IoIosMore } from 'react-icons/io'
import { BsHeart } from 'react-icons/bs'
import { BsChat } from 'react-icons/bs'
import { ImCompass } from 'react-icons/im'
import { BsBookmark } from 'react-icons/bs'
import { HiOutlineEmojiHappy } from 'react-icons/hi'

export function Feed(props) {
    return (
        <>
            <PrincipalCard>
                <Section>
                    <BoxCard>
                        <HeaderCard>
                            <div>
                                <ImgCard src={props.perfil} alt="Perfil do usuario" />
                            </div>
                            <InfoTxtCard>
                                <Txt primary >{props.username}</Txt>
                            </InfoTxtCard>

                        </HeaderCard>
                        <CompartilharBtn><IoIosMore /></CompartilharBtn>
                    </BoxCard>

                    <ImgConteudo>
                        <img src={props.img} alt="Foto" />
                    </ImgConteudo>

                    <CardSocialMidia>
                        <Grid>
                            <IconesCard>
                                <div>
                                    <Icon><BsHeart /></Icon>
                                    <Icon><BsChat /></Icon>
                                    <Icon><ImCompass /></Icon>
                                </div>
                                <div>
                                    <Icon><BsBookmark /></Icon>
                                </div>
                            </IconesCard>



                            <TextoHora>
                                <Curtidas>
                                    <p>Curtido por</p>
                                    <span>{props.curtidoPor}</span>
                                    <p>e</p>
                                    <span>outras pessoas</span>
                                </Curtidas>
                                <p>HÁ 2 HORAS</p>
                            </TextoHora>

                            <CardComent>
                                <div>
                                    <FormComent method="post">
                                        <Icon primary><HiOutlineEmojiHappy /></Icon>
                                        <textarea aria-label="Adicione um comentário..." data-testid="post-comment-text-area" placeholder="Adicione um comentário..." autoComplete="off"></textarea>
                                        <a href="#">Publicar</a>
                                    </FormComent>
                                </div>
                            </CardComent>
                        </Grid>
                    </CardSocialMidia>
                </Section>
            </PrincipalCard>
        </>
    )
}