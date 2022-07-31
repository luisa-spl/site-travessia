import { CourseCarousel } from 'components/Carousel';
import { CourseCard } from 'components/CourseCard';
import { Section } from '../../Section';
import Pilates from '../../../assets/img/pilates-grupo.jpg';
import s from './style.module.scss';

export function CoursesSection() {
    return (
        <Section background='#18727D'>
            <div className={s['section-container-texts']}>
                <h1 className={s['course-section-title']}>Nossos cursos</h1>
                <p className={s['course-section-description']}>
                    But I must explain to you how all this mistaken idea of denouncing 
                    pleasure and praising pain was born and I will give you a complete account of the system
                </p>
            </div>
            
            <CourseCarousel name="courses" marginLeft='32px'>
                <CourseCard
                    cardDescription='60 minutos - em grupo'
                    cardTitle='Pilates solo'
                    cardImage={Pilates}
                />
                <CourseCard
                    cardDescription='40 minutos - individual'
                    cardTitle='Pilates solo'
                    cardImage={Pilates}
                />
                <CourseCard
                    cardDescription='60 minutos - em grupo'
                    cardTitle='Pilates Aparelhos'
                    cardImage={Pilates}
                />
                <CourseCard
                    cardDescription='60 minutos - individual'
                    cardTitle='Pilates Aparelhos'
                    cardImage={Pilates}
                />
            </CourseCarousel>
        </Section>
    )
   
}