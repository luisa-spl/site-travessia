import { useMediaQuery } from '@chakra-ui/react';
import { Button } from '../../components/Button';
import { Span, Subtitle, Title } from '../../components/Typography';
import s from './style.module.scss';

export function ContactsSection() {
    const [RESPONSIVE] = useMediaQuery("(max-width: 680px)");

    return (
        <div className={s.container} id="contacts-section">
            <div className={s.contacts}>
                <div className={s.title}>
                    <Title>CONTATOS</Title>
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
                <div className={s['contacts-action-button']}>
                    <Button
                        variant="primary"
                        type="button"
                        label="agende sua aula experimental"
                        onClick={
                            () => window.open('https://app.tecnofit.com.br/tfRedirect?u=4751B23E025D', '_blank')
                        }
                        id='contacts-action-button'
                    >
                        Agende sua aula experimental gratuita
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