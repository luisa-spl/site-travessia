import { Span } from '../../components/Typography';
import { ReactComponent as Face } from '../../assets/svg/facebook.svg';
import { ReactComponent as Insta } from '../../assets/svg/instagram.svg';
import { ReactComponent as Youtube } from '../../assets/svg/youtube.svg';
import { ReactComponent as Whats } from '../../assets/svg/whatsapp.svg';
import { useMediaQuery } from '@chakra-ui/react';
import Logo from '../../assets/img/logo.png';
import s from './style.module.scss';
import { useNavigate } from 'react-router-dom';
const PHONE = '5511982123172';

export function Footer() {
    const [RESPONSIVE] = useMediaQuery("(max-width: 680px)")
    const navigate = useNavigate();

    return (
        <div className={s['footer-container']}>
            {!RESPONSIVE && (
                <div className={s['contact-info']}>
                <Span>
                    © TP
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
            <div className={s['footer-container-buttons']}>
                <div className={s['footer-buttons']}>
                    <button
                        className={s['facebook-button']}
                        onClick={() => window.open('https://www.facebook.com/travessiapilates')}
                        aria-label="acesse a página no facebook"
                    >
                        <Face width="24px" height="24px" />
                    </button>
                    <button
                        className={s['youtube-button']}
                        onClick={() => window.open('https://www.youtube.com/c/travessiapilates')}
                        aria-label="acesse o canal no youtube"
                    >
                        <Youtube width="24px" height="24px"/>
                    </button>
                    <button
                        className={s['instagram-button']}
                        onClick={() => window.open('https://instagram.com/travessiapilates')}
                        aria-label="acesse o perfil no instagram"
                    >
                        <Insta width="24px" height="24px"/>
                    </button>
                    <button
                        className={s['whatsapp-button']}
                        aria-label="envie uma mensagem no whatsapp"
                        onClick={
                            () => window.open(
                                `https://wa.me/${PHONE}?text=Olá!%20Visitei%20seu%20site%20e%20gostaria%20de%20saber%20mais%20
                                informações%20sobre%20o%20espaço.%20Meu%20nome%20é`
                            )
                        }>
                        <Whats width="24px" height="24px"/>
                    </button>
                </div>
                <button
                    className={s['privacy-policy-button']} 
                    onClick={() => navigate('/privacidade')}
                    aria-label="Acesse a política de privacidade"
                >
                    Política de Privacidade
                </button>
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