import s from './style.module.scss';
import Logo from '../../../assets/img/logo.png';
import {HamburgerIcon } from '@chakra-ui/icons'
import { MenuButton, MenuItem, MenuList, IconButton, Menu, useMediaQuery} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Span } from '../../../components/Typography';


function HamburgerMenu() {
    return (
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Opções'
                icon={<HamburgerIcon boxSize="42px" />}
                variant='outline'
                w="24px"
                color="#946702"
                className={s.menu}
            />
            <MenuList
                backgroundColor="#ffff"
                color="#946702"
                border="none"
                w="200px"
            >
                <MenuItem
                    _hover={{
                        color: '#946702',
                        bgColor: '#E6E8EA'
                    }}
                >
                     <a href="#services"><p>Nossos Serviços</p></a>
                </MenuItem>
                <MenuItem
                    _hover={{
                        color: '#946702',
                        bgColor: '#E6E8EA'
                    }}
                >
                    <a href="#pilates"><p>Pilates</p></a>    
                </MenuItem>
                <MenuItem
                    _hover={{
                        color: '#946702',
                        bgColor: '#E6E8EA'
                    }}
                >
                    <a href="#testimonials"><p>Depoimentos</p></a>
                </MenuItem>
                <MenuItem
                    _hover={{
                        color: '#946702',
                        bgColor: '#E6E8EA'
                    }}
                >
                    <a href="#contacts"><p>Contatos</p></a>
                </MenuItem>
            </MenuList>
        </Menu>
    )
}

export function Header({ isHome }: { isHome?: boolean; }) {
    const [isResponsive] = useMediaQuery('(max-width: 900px)');
    const navigate = useNavigate();

    return (
        <div className={s['header-container']}>
            {isHome && <div><HamburgerMenu /></div>}
            {!isHome && (
                <button onClick={() => navigate('/')} className={s.home}>
                    <Span>Voltar</Span>
                </button>
            )}
            {!isResponsive && (
                <button onClick={() => navigate('/')}>
                <img src={Logo} alt="logotipo travessia pilates" width="162px" height="64px" />
            </button>
            )}
        </div>
    )
}