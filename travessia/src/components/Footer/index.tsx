import { Span } from '../../components/Typography';
import { ReactComponent as Face } from '../../assets/svg/facebook.svg';
import { ReactComponent as Insta } from '../../assets/svg/instagram.svg';
import { ReactComponent as Youtube } from '../../assets/svg/youtube.svg';
import { ReactComponent as Whats } from '../../assets/svg/whatsapp.svg';
import { useMediaQuery } from '@chakra-ui/react';
import Logo from '../../assets/img/LOGO_BRANCO.png';
import s from './style.module.scss';
import { useNavigate } from 'react-router-dom';
const PHONE = '5511982123172';

export function Footer() {
    const [RESPONSIVE] = useMediaQuery("(max-width: 800px)")
    const navigate = useNavigate();

    return (
        <div className={s['footer-container']}>
            {!RESPONSIVE && (
                <div className={s['footer-left-component']}>
                    <a href="#course-section"><Span>Nossos serviços</Span></a>
                    <a href="#pilates-section" className={s.size}><Span>Por que fazer pilates?</Span></a>
                    <a href="#testimonials-section"><Span>depoimentos</Span></a>
                    <a href="#contacts-section"><Span>contatos</Span></a>
                </div>
            )}
            <div className={s['footer-middle-component']}>
                <div id="travessia-logo">
                    <img src={Logo} alt="logotipo" width={RESPONSIVE ? "180px" : "200px"} height={RESPONSIVE ? "180px" : "200px"} />
                </div>
               
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
            </div>
            <div className={s['footer-container-buttons']}>
                <div className={s['footer-buttons']}>
                    <div>
                        <button
                            className={s['facebook-button']}
                            onClick={() => window.open('https://www.facebook.com/travessiapilates')}
                            aria-label="acesse a página no facebook"
                        >
                            <Face width="42px" height="42px" />
                        </button>
                        <button
                            className={s['youtube-button']}
                            onClick={() => window.open('https://www.youtube.com/channel/UCTGlHPFE5S3_1QTHXPDezmA')}
                            aria-label="acesse o canal no youtube"
                        >
                            <Youtube width="42px" height="42px"/>
                        </button>
                    </div>
                    <div>
                        <button
                            className={s['instagram-button']}
                            onClick={() => window.open('https://instagram.com/travessiapilates')}
                            aria-label="acesse o perfil no instagram"
                        >
                            <Insta width="42px" height="42px"/>
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
                            <Whats width="42px" height="42px"/>
                        </button>
                    </div>
                </div>
                <button
                    className={s['privacy-policy-button']} 
                    onClick={() => navigate('/privacidade')}
                    aria-label="Acesse a política de privacidade"
                >
                    Política de Privacidade
                </button>
            </div>
        </div>
    );
}