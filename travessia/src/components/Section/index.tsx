import { ReactNode } from 'react';
import s from './style.module.scss';

export function Section({ children, background }: { children: ReactNode; background: string; }) {
    return (
        <section className={s.section} style={{ background: `${background}`}}>
            {children}
        </section>
    );
}