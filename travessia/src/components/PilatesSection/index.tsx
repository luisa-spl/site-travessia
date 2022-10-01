import { Button } from 'components/Button';
import s from './style.module.scss';

export function PilatesSection() {
    return (
        <div className={s['pilates-section']}>
            <div className={s['pilates-section-texts']}>
                <div className={s['pilates-section-text-left']}>
                    <p>PORQUE</p>
                    <p>FAZER</p>
                    <p>PILATES</p>
                </div>
                <div className={s['pilates-section-text-right']}>
                    <p>
                        Seja para melhorar a qualidade de vida, sair do sedentarismo ou para aliviar dores no corpo,
                        o pilates costuma ser a primeira opção a ser indicada pelos especialistas. 
                    </p>
                    <p>
                        Por ser uma atividade física sem impacto e com amplas possibilidades de adaptação dos exercícios, 
                        o pilates pode ser praticado por públicos muito variados e para alcançar diferentes objetivos.
                    </p>
                </div>
            </div>
            <div className={s['pilates-section-button']} id="pilates-section-experimental-class-btn">
                <Button
                    onClick={() => ('')}
                    variant="tertiary"
                    type="button"
                    label='agende sua aula experimental'
                >
                    Agende sua aula experimental gratuita
                </Button>
            </div>
        </div>
    );
}