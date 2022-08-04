import s from './style.module.scss';
import Logo from '../../../assets/img/logo.png';
import {HamburgerIcon } from '@chakra-ui/icons'
import { MenuButton, MenuItem, MenuList, IconButton, Menu, useMediaQuery} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';


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
                        <p>Cursos</p>
                </MenuItem>
                <MenuItem
                    _hover={{
                        color: '#946702',
                        bgColor: '#E6E8EA'
                    }}
                >
                        <p>Planos</p>
                </MenuItem>
                <MenuItem
                    _hover={{
                        color: '#946702',
                        bgColor: '#E6E8EA'
                    }}
                >
                        <p>Espaço</p>
                </MenuItem>
                <MenuItem
                    _hover={{
                        color: '#946702',
                        bgColor: '#E6E8EA'
                    }}
                >
                        <p>Sobre Nós</p>
                </MenuItem>
            </MenuList>
        </Menu>
    )
}

export function Header() {
    const [isResponsive] = useMediaQuery('(max-width: 900px)');
    const navigate = useNavigate();

    return (
        <div className={s['header-container']}>
            <div><HamburgerMenu /></div>
            {!isResponsive && (
                <button onClick={() => navigate('/')}>
                <img src={Logo} width="162px" height="64px" />
            </button>
            )}
        </div>
    )
}