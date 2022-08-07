import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import s from './style.module.scss';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant: 'primary' | 'secondary' | 'tertiary';
    onClick(): void;
    children: ReactNode;
    type: 'submit' | 'button';
    label: string;
}

export function Button({ variant, onClick, children, type, label }: ButtonProps) {
    return (
        <button type={type} onClick={onClick} className={`${s[variant]}`} aria-label={label}>
            {children}
        </button>
    )
}