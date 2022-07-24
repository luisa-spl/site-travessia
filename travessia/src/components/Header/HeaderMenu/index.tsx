import s from './style.module.scss';
import { Button } from 'components/Button';
import {HamburgerIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { MenuButton, MenuItem, MenuList, IconButton, Menu, MenuButtonProps, background} from '@chakra-ui/react';


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
                backgroundColor="#18727D"
                color="#ffff"
                border="none"
                w="350px"
            >
                <MenuItem
                    _hover={{
                        color: '#946702',
                        bgColor: '#E6E8EA'
                    }}
                >
                    <div>
                        <p>Cursos</p>
                        <ArrowForwardIcon />
                    </div>
                </MenuItem>
                <MenuItem>
                    <div>
                        <p>Planos</p>
                        <ArrowForwardIcon />
                    </div>
                </MenuItem>
                <MenuItem>
                    <div>
                        <p>Espaço</p>
                        <ArrowForwardIcon />
                    </div>
                </MenuItem>
                <MenuItem>
                    <div>
                        <p>Sobre Nós</p>
                        <ArrowForwardIcon />
                    </div>
                </MenuItem>
            </MenuList>
        </Menu>
    )
}

export function Header() {
    return (
        <div className={s['header-container']}>
            <div><HamburgerMenu /></div>
            <Button variant="primary" onClick={() => ('')} type="button">Comece agora</Button>
        </div>
    )
}