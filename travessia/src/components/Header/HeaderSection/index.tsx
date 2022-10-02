import { Header } from '../HeaderMenu';
import Logo from '../../../assets/img/logo-sm.png';
import s from './style.module.scss';
import 'aos/dist/aos.css';
import { useMediaQuery } from '@chakra-ui/react';

export function HeaderSection() {
    const [isResponsive] = useMediaQuery('(max-width: 900px)');

    return (
        <section className={s['header-section']}>
            <div className={s.menu}>
                <Header isHome />
            </div>
        
        {!isResponsive && (
            <img src="https://i.ibb.co/Cw4S65v/CAPA.png" alt="capa" />
        )}

        {isResponsive && (
            <div className={s.logo} id="paragraph">
                <img src={Logo} alt="travessia" width="300px" />
            </div>
        )}
        </section>
    )
}