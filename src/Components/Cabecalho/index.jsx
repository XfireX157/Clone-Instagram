import React from "react"

//img
import LogoInstar from '../../assets/img/Logo-instagram.png'

//componentes 
import { Header } from "./style"
import { Search } from "./style"
import { List } from "./style"
import { ImgLogo } from "./style"
import { Link } from "./style"

//icones
import { FaUserCircle } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsCompass } from 'react-icons/bs'
import { CgAddR } from 'react-icons/cg'
import { AiFillHome } from 'react-icons/ai'
import { ImCompass } from 'react-icons/im'
import { AiOutlineSearch } from 'react-icons/ai'

export function Cabecalho() {
    return (
        <>
            <Header>
                <ImgLogo>
                    <img src={LogoInstar} alt="Fonte da logo Instagram" />
                </ImgLogo>

                <Search>
                    <label for="Pesquisar">
                        <span><AiOutlineSearch /></span>
                        <input type="search" id="Pesquisar" name="Pesquisar" placeholder="Pesquisar" />
                    </label>
                </Search>

                <div>
                    <List>
                        <Link href="#">
                            <li><AiFillHome /></li>
                        </Link>
                        <Link href="#">
                            <li><ImCompass /></li>
                        </Link>
                        <Link href="#">
                            <li><CgAddR /></li>
                        </Link>
                        <Link href="#">
                            <li><BsCompass /></li>
                        </Link>
                        <Link href="#">
                            <li><AiOutlineHeart /></li>
                        </Link>
                        <Link ColorGray={"#DBDBDB"} href="#" >
                            <li><FaUserCircle /></li>
                        </Link>
                    </List>
                </div>
            </Header>
        </>
    )
}