import { ReactNode } from 'react';
import s from './style.module.scss';

interface ButtonProps {
    variant: 'primary' | 'secondary' | 'tertiary';
    onClick(): void;
    children: ReactNode;
    type: 'submit' | 'button';
}

export function Button({ variant, onClick, children, type }: ButtonProps) {
    return (
        <button type={type} onClick={onClick} className={`${s[variant]}`}>
            {children}
        </button>
    )
}