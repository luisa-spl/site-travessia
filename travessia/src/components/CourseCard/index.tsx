import s from './style.module.scss';

interface CourseCardProps {
    cardImage: string;
    cardTitle: string;
    cardDescription: string;
}

export function CourseCard({ cardImage, cardTitle, cardDescription }: CourseCardProps) {
    return (
        <div className={s['container-course']}>
            <div className={s['card-image']}>
                <img src={cardImage} alt="curso" />
            </div>
            <h2 className={s['card-title']}>{cardTitle}</h2>
            <p className={s['card-description']}>{cardDescription}</p>
        </div>
    )
}