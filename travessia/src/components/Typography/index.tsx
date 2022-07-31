import s from './style.module.scss';

interface TypographyProps {
    children: string;
}

export function Title({ children }: TypographyProps) {
    return (
        <h1 className={s.h1}>
            {children}
        </h1>
    );
}

export function Subtitle({ children }: TypographyProps) {
    return (
        <h2 className={s.subtitle}>
            {children}
        </h2>
    )
}

export function Paragraph({ children }: TypographyProps) {
    return (
        <p className={s.paragraph}>
            {children}
        </p>
    );
}

export function Span({ children }: TypographyProps) {
    return (
        <span className={s.span}>
            {children}
        </span>
    );
}
