import { HeaderSection } from 'components/Header/HeaderSection';
import { CoursesSection } from 'components/Courses/CoursesSection';
import { BenefitsSection } from 'components/BenefitsSection';
import { Footer } from 'components/Footer';
import { ContactsSection } from 'components/ContactSection';
import { TestimonialsSection } from 'components/TestimonialsSection';

export function Home() {

    return (
        <div>
            <HeaderSection />
            <CoursesSection />
            <BenefitsSection />
            <TestimonialsSection />
            <ContactsSection />
            <Footer />
        </div>
    )
}