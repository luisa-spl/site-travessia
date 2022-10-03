import { Header } from '../HeaderMenu';
import Logo from '../../../assets/img/logo-sm.png';
import Cover from '../../../assets/img/CAPA.png';
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
            <img src={Cover} alt="capa" />
        )}

        {isResponsive && (
            <div className={s.logo} id="paragraph">
                <img src={Logo} alt="travessia"  />
            </div>
        )}
        </section>
    )
}