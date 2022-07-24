import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import s from './style.module.scss';
import { HeaderSection } from 'components/Header/HeaderSection';
import { CoursesSection } from 'components/Courses/CoursesSection';

export function Home() {

    // useEffect(() => {
    //     Aos.init({ duration: 2000 });
    // }, [])

    return (
        <div>
            <HeaderSection />
            <CoursesSection />
        </div>
    )
}