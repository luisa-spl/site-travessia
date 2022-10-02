import { Span } from 'components/Typography';
import Imagem1 from '../../assets/img/ILUSTRA_1.png';
import Imagem2 from '../../assets/img/ILUSTRA_2.png';
import Imagem3 from '../../assets/img/ILUSTRA_3.png';
import s from './style.module.scss';

export function BenefitsSection() {
    return(
        <div className={s['benefits-section']}>
            <div className={`${s['benefits-section-items']} ${s.size}`}>
                <img src={Imagem1} alt=""/>
                <Span>
                    Um treino dinâmico que ajudará a fortalecer e alongar o corpo.
                </Span>
            </div>
            <div className={s['benefits-section-items']}>
                <img src={Imagem2} alt=""/>
                <Span>
                    Pilates ajuda a melhorar a postura, flexibilidade e equilíbrio.
                </Span>
            </div>
            <div className={s['benefits-section-items']}>
                <img src={Imagem3} alt=""/>
                <Span>
                    Aprenda técnicas de consciência corporal e respiração para se adaptar à vida cotidiana.
                </Span>
            </div>
        </div>
    );
}