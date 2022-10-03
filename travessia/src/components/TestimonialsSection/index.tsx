import { Span, Title } from '../../components/Typography';
import s from './style.module.scss';

function Testimonial({ description, name }: { description: string; name: string; }) {
    return (
        <div className={s.testimonial}>
            <h2 className={s.description}>
                {description}
            </h2>
            <Span>
                {name}
            </Span>
        </div>
    )
}

export function TestimonialsSection() {
    return (
        <div className={s['testimonials-section']} id="testimonials-section">
            <Title>Depoimentos</Title>
            <div className={s['testimonials-container']}>
               <Testimonial
                    description={`"O espaço é bem equipado e organizado, as aulas são divididas em turmas pequenas para que as 
                    instrutoras consigam acompanhar todos os alunos."`}
                    name="Vanessa A."
               />
               <Testimonial
                    description={`"Maravilhoso….O ambiente é delicioso tudo pensado com muito carinho!!! 
                    As aulas são maravilhosas (...). O pilates está mudando minha vida!!!!"`}
                    name="Andrea A. de S."
               />
               <Testimonial
                    description={`"Super recomendo a atividade de pilates,  com poucas aulas tenho melhora 
                    perceptível na flexibilidade do corpo, nas dores nas costas que por ventura sentia, sem 
                    contar que é um ótimo momento de auto cuidado e conhecimento corporal."`}
                    name="Karen R."
               />
            </div>
        </div>
    );
}