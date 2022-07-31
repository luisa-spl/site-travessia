import { Span } from '../../components/Typography';
import { ReactComponent as Face } from '../../assets/svg/facebook.svg';
import { ReactComponent as Insta } from '../../assets/svg/instagram.svg';
import { ReactComponent as Youtube } from '../../assets/svg/youtube.svg';
import { ReactComponent as Whats } from '../../assets/svg/whatsapp.svg';
import { useMediaQuery } from '@chakra-ui/react';
import Logo from '../../assets/img/5_brown.png';
import s from './style.module.scss';

export function Footer() {
    const [RESPONSIVE] = useMediaQuery("(max-width: 680px)")

    return (
        <div className={s['footer-container']}>
            {!RESPONSIVE && (
                <div className={s['contact-info']}>
                <Span>
                    © Travessia Pilates
                </Span>
                <Span>
                    Rua Professor Indalécio de Melo, 91
                </Span>
                <Span>
                    Residencial Morumbi - São Paulo/SP
                </Span>
                <Span>
                    cnpj: 35.273.674/0001-44
                </Span>
            </div>
            )}
            
            <div id="travessia-logo">
                <img src={Logo} alt="logotipo" width={RESPONSIVE ? "180px" : "250px"} height={RESPONSIVE ? "180px" : "250px"} />
            </div>
            {/* <div>
                <iframe
                    title="mapa"
                    width="290"
                    height="220" 
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=Rua%20Professor%20indalecio%20de%20Melo,%2091&t=&z=17&ie=UTF8&iwloc=&output=embed"
                    scrolling="no"
                />
            </div> */}
            <div className={s['footer-container-buttons']}>
                <div className={s['footer-buttons']}>
                    <button className={s['facebook-button']}>
                        <Face width="24px" height="24px" />
                    </button>
                    <button className={s['youtube-button']}>
                        <Youtube width="24px" height="24px"/>
                    </button>
                    <button className={s['instagram-button']}>
                        <Insta width="24px" height="24px"/>
                    </button>
                    <button className={s['whatsapp-button']}>
                        <Whats width="24px" height="24px"/>
                    </button>
                </div>
                <div className={s['privacy-policy-button']}>
                    <a href="">Política de Privacidade</a>
                </div>
            </div>

            {RESPONSIVE && (
                <div className={s['contact-info']}>
                    <Span>
                        © Travessia Pilates
                    </Span>
                    <Span>
                        Rua Professor Indalécio de Melo, 91
                    </Span>
                    <Span>
                        Residencial Morumbi - São Paulo/SP
                    </Span>
                    <Span>
                        cnpj: 35.273.674/0001-44
                    </Span>
                </div>
            )}
        </div>
    );
}