import { ReactNode } from 'react';
import s from './style.module.scss';

interface CardWithImageProps {
    children: ReactNode;
    leftImage?: boolean;
    cardImage: string;
}

export function CardWithImage({ children, leftImage, cardImage }: CardWithImageProps) {
    return (
        <div className={s.container}>
            {leftImage && (
                <div className={s.image}>
                    <img src={cardImage} alt="imagem ilustrativa" />
                </div>
            )}
            <div className={s.content}>
                {children}
            </div>
            {!leftImage && (
                <div className={s.image} >
                    <img src={cardImage} alt="imagem ilustrativa" />
                </div>
            )}
        </div>
    )
}