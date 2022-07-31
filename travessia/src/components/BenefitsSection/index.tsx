import { CardWithImage } from 'components/CardWithImage';
import { Paragraph, Title } from '../../components/Typography';
import Pilates from  '../../assets/img/pilates-vertical.jpg';
import s from './style.module.scss';
import { Button } from 'components/Button';

export function BenefitsSection() {
    return (
        // <div>
            <CardWithImage leftImage={false} cardImage={Pilates}>
                <div className={s.container}>
                    <div className={s.title}>
                        <Title>Descubra com</Title>
                        <Title> a gente os benefícios </Title>
                        <Title>do pilates!</Title>
                    </div>

                    <Paragraph>
                        No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, 
                        but because those who do not know how to pursue pleasure rationally encounter 
                        consequences that are extremely painful.
                    </Paragraph>
                    <Paragraph>
                        No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, 
                        but because those who do not know how to pursue pleasure rationally encounter 
                        consequences that are extremely painful.
                    </Paragraph>
                    <div className={s['benefits-action-button']}>
                        <Button
                            variant="primary"
                            type="button"
                            onClick={() => ('')}
                            id='benefits-action-button'
                        >
                            Comece agora
                        </Button>
                    </div>
                </div>
            </CardWithImage>
        // </div>
    )
}