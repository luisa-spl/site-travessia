import { PrivacyPolicyPage } from '../page/PrivacyPolicy';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../page/Home';
import { BenefitsPage } from 'page/Benefits';

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/beneficios" element={<BenefitsPage />} />
            <Route path="/privacidade" element={<PrivacyPolicyPage />} />   
        </Routes>
    )
}

export default MainRoutes;