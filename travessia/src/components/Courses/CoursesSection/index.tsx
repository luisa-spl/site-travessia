import { CourseCarousel } from 'components/Carousel';
import { CourseCard } from 'components/CourseCard';
import { Section } from '../../Section';
import PilatesEmpresa from '../../../assets/img/pilates-grupo.jpg';
import PilatesIndividual from '../../../assets/img/benefits6.jpg';
import PilatesGrupo from '../../../assets/img/benefits7.jpg';
import Pilates from '../../../assets/img/benefits9.jpg';
import s from './style.module.scss';

export function CoursesSection() {
    return (
        <Section background='#18727D'>
            <div className={s['section-container-texts']} id="services">
                <h1 className={s['course-section-title']}>Nossos Serviços</h1>
                <p className={s['course-section-description']}>
                    Oferecemos modalidades que se adequam à diferentes necessidades, para você ou sua empresa.
                </p>
            </div>
            
            <CourseCarousel name="courses" marginLeft='32px'>
                <CourseCard
                    cardDescription="Aulas individuais em estúdio com aparelhos e acessórios do pilates."
                    cardTitle='Pilates Personal'
                    duration=" Duração: 50 minutos"
                    cardImage={Pilates}
                />
                <CourseCard
                    cardDescription="Aulas em estudio com uso de aparelhos e de acessórios do pilates."
                    cardTitle='Pilates em grupo'
                    duration=" Duração: 50 minutos"
                    cardImage={PilatesIndividual}
                />
                <CourseCard
                    cardDescription="Aulas de solo (mat pilates) com uso de acessórios. Aulas individuais ou em grupo."
                    cardTitle='Pilates online'
                    duration=" Duração: 50 minutos"
                    cardImage={PilatesGrupo}
                />
                <CourseCard
                    cardDescription="Aulas de pilates em  solo (mat pilates), em grupo, com ou sem uso de acessórios."
                    cardTitle='Aulas em Condomínios'
                    cardSubtitle='comodidade para condôminos'
                    duration='Consulte disponibilidade para o seu condomínio'
                    cardImage={PilatesEmpresa}
                />
                <CourseCard
                    cardTitle='Aulas para Empresas'
                    cardSubtitle='benefício para colaboradores'
                    cardDescription="Aulas de pilates em  solo (mat pilates), em grupo, com ou sem uso de acessórios."
                    duration='Consulte disponibilidade para sua empresa'
                    cardImage={PilatesEmpresa}
                />
            </CourseCarousel>
        </Section>
    )
   
}