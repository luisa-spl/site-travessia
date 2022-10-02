import { useMediaQuery } from '@chakra-ui/react';
import { CourseCarousel } from 'components/Carousel';
import { CourseCard } from 'components/CourseCard';
import s from './style.module.scss';

export function CoursesSection() {
    const [ responsive ] = useMediaQuery("(max-width: 980px)");

    function renderContent() {
        if (responsive) {
            console.log('entrou aqui 1')
            return (
                <CourseCarousel name='courses' marginLeft='16px'>
                    <CourseCard
                        cardDescription="Aulas individuais em estúdio"
                        cardTitle='Pilates Personal'
                        duration=" Duração: 50 minutos"
                        cardImage="https://i.ibb.co/G3Whx2y/DSCN3136.jpg"
                        backgroundPosition='right'
                        />
                        <CourseCard
                            cardDescription="Aulas em estudio"
                            cardTitle='Pilates em grupo'
                            duration=" Duração: 50 minutos"
                            cardImage="https://i.ibb.co/2n0LhjL/group-pilates-instructors-exercising-reformers.jpg"
                        />
                        <CourseCard
                            cardDescription="Aulas de solo (mat pilates). Aulas individuais ou em grupo."
                            cardTitle='Pilates online'
                            duration=" Duração: 50 minutos"
                            cardImage="https://i.ibb.co/WxdJs4F/woman-practising-yoga.jpg"
                            backgroundPosition='center'
                        />
                </CourseCarousel>
            )
        }

        if (!responsive) {
            console.log('entrou aqui')
            return (
                <>
                    <CourseCard
                        cardDescription="Aulas individuais em estúdio"
                        cardTitle='Pilates Personal'
                        duration=" Duração: 50 minutos"
                        cardImage="https://i.ibb.co/G3Whx2y/DSCN3136.jpg"
                        backgroundPosition='right'
                        />
                    <CourseCard
                        cardDescription="Aulas em estudio"
                        cardTitle='Pilates em grupo'
                        duration=" Duração: 50 minutos"
                        cardImage="https://i.ibb.co/2n0LhjL/group-pilates-instructors-exercising-reformers.jpg"
                    />
                    <CourseCard
                        cardDescription="Aulas de solo (mat pilates). Aulas individuais ou em grupo."
                        cardTitle='Pilates online'
                        duration=" Duração: 50 minutos"
                        cardImage="https://i.ibb.co/WxdJs4F/woman-practising-yoga.jpg"
                        backgroundPosition='center'
                    />
                </>
            )
        }
    }

    return (
        <div className={s['courses-section']}>    
            {renderContent()}  
        </div>
    )
   
}