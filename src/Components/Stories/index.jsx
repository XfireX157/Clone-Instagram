
//Components
import React, { useState, useRef } from "react";

import {
    Principal, Cards, Card,
    ImgCard, Paragrafo
} from './style'

import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

import { Cardes } from "../../mock/Cards";

export function Stories() {

    const carousel = useRef(null)

    const leftClick = (e) => {
        e.preventDefault()

        carousel.current.scrollLeft -= carousel.current.offsetWidth
    }

    const rightClick = (e) => {
        e.preventDefault()

        carousel.current.scrollLeft += carousel.current.offsetWidth
    }

    return (
        <Principal >

            <Cards ref={carousel}>

                {Cardes.map((obj) => (
                    <Card key={obj.id}>
                        <ImgCard src={obj.img} alt="Foto de perfil" />
                        <Paragrafo>{obj.title}</Paragrafo>
                    </Card>
                ))}
            </Cards>
            <BsArrowLeftCircleFill className="left-arrow" onClick={leftClick} />
            <BsArrowRightCircleFill className="right-arrow" onClick={rightClick} />
        </Principal>
    )
}   