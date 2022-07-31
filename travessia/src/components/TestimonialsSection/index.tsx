import { Span, Subtitle, Title } from '../../components/Typography';
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
        <div className={s['testimonials-section']} >
            <Title>Depoimentos</Title>
            <div className={s['testimonials-container']}>
               <Testimonial
                    description={`"Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Iure provident iste quod nisi maxime eligendi 
                    sunt enim repellat consequatur, temporibus cupiditate minima, 
                    saepe neque corrupti officia nesciunt eos"`}
                    name="Maria das Dores"
               />
               <Testimonial
                    description={`"Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Iure provident iste quod nisi maxime eligendi 
                    sunt enim repellat consequatur, temporibus cupiditate minima, 
                    saepe neque corrupti officia nesciunt eos"`}
                    name="Dorna Ciática"
               />
               <Testimonial
                    description={`"Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Iure provident iste quod nisi maxime eligendi 
                    sunt enim repellat consequatur, temporibus cupiditate minima, 
                    saepe neque corrupti officia nesciunt eos"`}
                    name="José Doia Costa"
               />
            </div>
        </div>
    );
}