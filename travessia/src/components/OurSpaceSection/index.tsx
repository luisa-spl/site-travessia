import { Paragraph, Title } from '../Typography';
import s from './style.module.scss';
import { Button } from 'components/Button';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@chakra-ui/react';

export function OurSpaceSection() {
    const [responsive] = useMediaQuery("(max-width: 980px)");
    const navigate = useNavigate();

    return (
        <div className={s['our-space-section']}>
            {!responsive && (
                <img src="https://i.ibb.co/km3Mq0T/FOTO-4.png" alt="imagem de mulher segurando tapete de pilates" />
            )}
            {responsive && (
                <img src="https://i.ibb.co/km3Mq0T/FOTO-4.png" alt="imagem de mulher" />
            )}
            <div className={s.container} id="pilates">
                <div className={s.title}>
                    <Title>PARA TODOS</Title>
                </div>

                <Paragraph>
                    Oferecemos um belo espaço relaxante para fugir do dia agitado, com cada aula focando nos princípios 
                    fundamentais do Pilates aliado a seu propósito específico.
                </Paragraph>
                <Paragraph>
                    Temos uma variedade de opções flexíveis, aulas matinais, vespertinas e noturnas, pacotes de aulas e
                    planos de débito direto.
                </Paragraph>
                <div className={s['benefits-action-button']}>
                    <Button
                        variant="primary"
                        type="button"
                        label="saiba mais"
                        onClick={() => navigate('/beneficios')}
                        id='benefits-action-button-know-more'
                    >
                        Agende sua aula experimental gratuita
                    </Button>
                </div>
            </div>
        </div>
    )
}