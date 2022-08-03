import {
    Text, useDisclosure, Fade,
  } from '@chakra-ui/react';
  import { Button } from '../../components/Button';
  import Cookie from 'cookie-universal';
  import { useEffect, useMemo, useState } from 'react';
  
  import s from './style.module.scss';
import { useNavigate } from 'react-router-dom';
  
  const CONSENT_KEY = 'LGPDConsent';
  
  type Consent = 'allowed' | 'denied' | null;
  
  export const CookiesConsentment = () => {
    const cookies = useMemo(() => Cookie(), []);
    const [consent, setConsent] = useState<Consent>(null);
    const { isOpen, onToggle } = useDisclosure();
    const navigate = useNavigate();
  
    useEffect(() => {
      const consentLocalStorage = localStorage.getItem(CONSENT_KEY);
  
      if (consentLocalStorage === null) {
        setTimeout(onToggle, 1000);
      } else {
        setConsent(consentLocalStorage as Consent);
      }
  
      if (consent === 'allowed') {
        delete (window as any)['ga-disable-G-RJK4QJV8W9'];
      } else if (consent === 'denied') {
        (window as any)['ga-disable-G-RJK4QJV8W9'] = true;
      }
    }, []);
  
    const handleAccept = () => {
      setConsent('allowed');
      localStorage.setItem(CONSENT_KEY, 'allowed');
      onToggle();
    };
  
    const handleDecline = () => {
      setConsent('denied');
      localStorage.setItem(CONSENT_KEY, 'denied');
      cookies.removeAll();
      onToggle();
    };
  
    return (
      <Fade in={isOpen} unmountOnExit>
        <div className={s.modal}>
          <div className={s.content}>
            <Text className={s.title} textStyle="body2" color="brand.primary.pure">
              Controle sua privacidade
            </Text>
            <div className={s.body}>
              <Text>
                Nosso site usa cookies
                <br />
                para melhorar a sua navegação
              </Text>
              <button onClick={() => navigate('/privacidade')} style={{ textDecoration: 'underline' }}>
                Política de privacidade
              </button>
            </div>
            <div className={s.footer}>
                <div className={s.buttons}>
                    <Button type="button" variant="primary" onClick={handleAccept} style={{ width: '140px' }}>
                        Aceito
                    </Button>
                </div>
                <div className={s.buttons}>
                    <Button type="button" variant="secondary" onClick={handleDecline} style={{ width: '140px' }}>
                        Não aceito
                    </Button>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    );
  };
  