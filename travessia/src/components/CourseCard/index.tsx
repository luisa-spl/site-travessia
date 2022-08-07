import s from './style.module.scss';

interface CourseCardProps {
    cardImage: string;
    cardTitle: string;
    cardSubtitle?: string;
    cardDescription: string;
    duration?: string;
}

export function CourseCard({ cardImage, cardTitle, cardSubtitle, cardDescription, duration }: CourseCardProps) {
    return (
        <div className={s['container-course']}>
            <div className={s['card-image']}>
                <img src={cardImage} alt="curso" />
            </div>
            <div className={s.description}>
                <h2 className={s['card-title']}>{cardTitle}</h2>
                {cardSubtitle && <h3 className={s['card-subtitle']}>{cardSubtitle}</h3>}
                <p className={s['card-description']}>{cardDescription}</p>
                {duration && <p className={s['card-duration']}>{duration}</p>}
            </div>
        </div>
    )
}