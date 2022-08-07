import { CardWithImage } from 'components/CardWithImage';
import { Paragraph, Title } from '../../components/Typography';
import Pilates from  '../../assets/img/benefits6.jpg';
import s from './style.module.scss';
import { Button } from 'components/Button';
import { useNavigate } from 'react-router-dom';

export function BenefitsSection() {
    const navigate = useNavigate();
    return (
        <CardWithImage leftImage={false} cardImage={Pilates}>
            <div className={s.container} id="pilates">
                <div className={s.title}>
                    <Title>Por que fazer pilates?</Title>
                </div>

                <Paragraph>
                    Seja para melhorar a qualidade de vida, sair do sedentarismo ou para aliviar dores 
                    no corpo, o pilates costuma ser a primeira opção a ser indicada pelos especialistas.
                </Paragraph>
                <Paragraph>
                Por ser uma atividade física sem impacto e com amplas possibilidades de adaptação dos exercícios,
                    o pilates pode ser praticado por públicos muito variados e para alcançar diferentes objetivos.
                </Paragraph>
                <div className={s['benefits-action-button']}>
                    <Button
                        variant="primary"
                        type="button"
                        label="saiba mais"
                        onClick={() => navigate('/beneficios')}
                        id='benefits-action-button-know-more'
                    >
                        Saiba mais
                    </Button>
                </div>
            </div>
        </CardWithImage>
    )
}