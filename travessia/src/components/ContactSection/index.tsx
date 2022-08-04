import { useMediaQuery } from '@chakra-ui/react';
import { Button } from '../../components/Button';
import { Span, Subtitle, Title } from '../../components/Typography';
import s from './style.module.scss';

const PHONE = '5511982123172'

export function ContactsSection() {
    const [RESPONSIVE] = useMediaQuery("(max-width: 680px)");

    return (
        <div className={s.container}>
            <div className={s.contacts}>
                <div className={s.title}>
                    <Title>Contato</Title>
                </div>
                <div className={s.address}>
                    <Subtitle>
                        Endereço
                    </Subtitle>
                    <Span>
                        Rua Professor Indalécio de Melo, 91 
                    </Span>
                    <Span>
                        Residencial Morumbi - São Paulo/SP
                    </Span>
                    <Span>
                        CEP: 05743-230
                    </Span>
                </div>
                <div className={s.address}>
                    <Subtitle>
                        Telefone
                    </Subtitle>
                    <Span>
                        Fixo: (11) 2574-2649
                    </Span>
                    <Span>
                        WhatsApp: (11) 98212-3172
                    </Span>
                </div>
                <div className={s.address}>
                    <Subtitle>
                        E-mail
                    </Subtitle>
                    <Span>
                       contato@travessiapilates.com.br
                    </Span>
                </div>
                <div className={s['benefits-action-button']}>
                    <Button
                        variant="primary"
                        type="button"
                        onClick={
                            () => window.open(
                                `https://wa.me/${PHONE}?text=Olá!%20Visitei%20seu%20site%20e%20gostaria%20de%20saber%20mais%20
                                informações%20sobre%20o%20espaço.%20Meu%20nome%20é`
                            )
                        }
                        id='benefits-action-button'
                    >
                        Agende sua aula experimental
                    </Button>
                </div>
            </div>
            <div className={s['map-container']}>
                <iframe
                    title="mapa"
                    width={RESPONSIVE ? "280" : "480px"}
                    height={RESPONSIVE ? "280" : "480px"}
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=Rua%20Professor%20indalecio%20de%20Melo,%2091&t=&z=17&ie=UTF8&iwloc=&output=embed"
                    scrolling="no"
                />
            </div>
        </div>
       
    );
}