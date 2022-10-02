import { HeaderSection } from 'components/Header/HeaderSection';
import { CoursesSection } from 'components/Courses/CoursesSection';
import { Footer } from 'components/Footer';
import { ContactsSection } from 'components/ContactSection';
import { TestimonialsSection } from 'components/TestimonialsSection';
import { PilatesSection } from 'components/PilatesSection';
import { OurSpaceSection } from 'components/OurSpaceSection';
import { BenefitsSection } from 'components/BenefitsSection';

export function Home() {

    return (
        <div>
            <HeaderSection />
            <PilatesSection />
            <CoursesSection />
            <OurSpaceSection />
            <BenefitsSection />
            <TestimonialsSection />
            <ContactsSection />
            <Footer />
        </div>
    )
}