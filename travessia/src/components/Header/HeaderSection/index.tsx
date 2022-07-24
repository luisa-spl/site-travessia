import { Header } from '../HeaderMenu';
import Logo from '../../../assets/img/logo-primary.png';
import s from './style.module.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export function HeaderSection() {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <section className={s['header-section']}>
            <div className={s.menu}>
                <Header />
            </div>
            <div className={s.logo} id="paragraph">
                <img src={Logo} alt="travessia" />
            </div>
            <p className={s.paragraph} >
                O movimento que faltava
            </p>
        </section>
    )
}