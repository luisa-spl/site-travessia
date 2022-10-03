import s from './style.module.scss';
import Logo from '../../../assets/img/logo-terracota.png';
import { HamburgerIcon } from '@chakra-ui/icons'
import { MenuButton, MenuItem, MenuList, IconButton, Menu, useMediaQuery} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Span } from '../../../components/Typography';


function HamburgerMenu() {
    const [RESPONSIVE] = useMediaQuery("(max-width: 680px)")

    return (
        <Menu size="64px">
            <MenuButton
                as={IconButton}
                aria-label='Opções'
                icon={<HamburgerIcon boxSize={RESPONSIVE ? "54px" : "64px"} />}
                variant='outline'
                w={RESPONSIVE ? "54px" : "64px"}
                h={RESPONSIVE ? "54px" : "64px"}
                color="#946702"
                className={s.menu}
                border="none"
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
                     <a href="#course-section"><p>Nossos Serviços</p></a>
                </MenuItem>
                <MenuItem
                    _hover={{
                        color: '#946702',
                        bgColor: '#E6E8EA'
                    }}
                >
                    <a href="#pilates-section"><p>Pilates</p></a>    
                </MenuItem>
                <MenuItem
                    _hover={{
                        color: '#946702',
                        bgColor: '#E6E8EA'
                    }}
                >
                    <a href="#testimonials-section"><p>Depoimentos</p></a>
                </MenuItem>
                <MenuItem
                    _hover={{
                        color: '#946702',
                        bgColor: '#E6E8EA'
                    }}
                >
                    <a href="#contacts-section"><p>Contatos</p></a>
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
            {/* {(isHome && !isResponsive) && (
                <a href="#space" className={s.span}>
                    <Span>
                        Nosso espaço
                    </Span>
                </a>
            )} */}
            {!isHome && (
                <button onClick={() => navigate('/')} className={s.home}>
                    <Span>Voltar</Span>
                </button>
            )}
            {!isResponsive && (
                <button onClick={() => navigate('/')} className={s.button}>
                    <img src={Logo} alt="logotipo travessia pilates" width="172px" height="74px" />
                </button>
            )}
        </div>
    )
}