import { Header } from '../HeaderMenu';
import Logo from '../../../assets/img/logo-sm.png';
import Model from '../../../assets/img/model.png'
import Letters from '../../../assets/img/letters.png';
import s from './style.module.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useMediaQuery } from '@chakra-ui/react';

export function HeaderSection() {
    const [isResponsive] = useMediaQuery('(max-width: 900px)');
    console.log(isResponsive)

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <section className={s['header-section']}>
            <div className={s.menu}>
                <Header />
            </div>

        {isResponsive && (
            <div className={s.logo} id="paragraph">
            <img src={Logo} alt="travessia" width="300px" />
        </div>
        )}
        </section>
    )
}