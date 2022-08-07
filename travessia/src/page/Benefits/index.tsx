import { Paragraph, Span, Subtitle, Title } from 'components/Typography';
import { Header } from '../../components/Header/HeaderMenu';
import Image from '../../assets/img/benefits7.jpg';
import s from './style.module.scss';
import { Button } from 'components/Button';
import { Footer } from 'components/Footer';

const PHONE = '5511982123172'

function Line({ children, bgColor }: { children: string; bgColor?: string }) {
    return (
        <div className={s.line} >
            <div className={s.dot} style={{ backgroundColor: `${bgColor}` }} />
            <Subtitle>{children}</Subtitle>
        </div>
    )
}
export function BenefitsPage() {
    return (
        <>
            <div className={s.container}>
                <div className={s.menu}>
                    <Header isHome={false} />
                </div>
                <div className={s.card}>
                    <div className={s.content}>
                        <div className={s['content-left']}>
                            <Title>Benefícios do Pilates</Title>
                            <Paragraph>
                                Os principais benefícios da prática do pilates são 
                            </Paragraph> 
                            <div className={s.lines}>
                                <Line>
                                    Aumento da flexibilidade;
                                </Line>
                                <Line>
                                    Ganho de força muscular;
                                </Line> 
                                <Line>
                                    Melhora do equilíbrio;
                                </Line>
                                <Line>
                                    Melhora da postura;
                                </Line>
                                <Line>
                                    Melhora do padrão respiratório (e com isso redução do estresse);
                                </Line>
                            </div>
                            <Paragraph>
                                Devido a essa grande quantidade de benefícios o pilates é indicado para inúmeras finalidades como as que você vê abaixo
                            </Paragraph>
                        </div>                    
                    </div>
                    <div className={s.image}>
                        <img src={Image} alt="imagem ilustrativa" />
                    </div>
                </div>
            </div>
            <div className={s['benefits-sections']} style={{ backgroundColor: '#E6D5C0' }}>
                <div className={s.row}>
                    <div className={s.circle}>
                        <Subtitle>
                            BEM ESTAR
                        </Subtitle>
                    </div>
                    <div className={s.lines} style={{ maxWidth: '560px'}}>
                        <Line bgColor='white'>
                            Aumento do condicionamento físico
                        </Line> 
                        <Line bgColor='white'>
                            Aumento da disposição
                        </Line>
                        <Line bgColor='white'>
                            Melhora da qualidade do sono
                        </Line>
                        <Line bgColor='white'>
                            Redução de tensões
                        </Line>
                        <Line bgColor='white'>
                            Redução do estresse e ansiedade 
                        </Line>
                    </div>
                </div>
            </div>
            <div className={s['benefits-sections']} style={{ backgroundColor: 'white' }}>
                <div className={s['row-reverse']}>
                    <div className={s.lines} style={{ maxWidth: '560px'}}>
                        <Line bgColor='#18727D'>
                            Melhora da postura
                        </Line> 
                        <Line bgColor='#18727D'>
                            Auxílio no emagrecimento
                        </Line>
                        <Line bgColor='#18727D'>
                            Melhora da definição muscular
                        </Line>
                        <Line bgColor='#18727D'>
                            Redução da flacidez
                        </Line>
                        <Line bgColor='#18727D'>
                            Auxílio no ganho de massa muscular
                        </Line>
                    </div>
                    <div className={s.circle}>
                        <Subtitle>
                            Imagem 
                        </Subtitle>
                        <Subtitle>
                        Corporal
                        </Subtitle>
                    </div>
                </div>
            </div>
            <div className={s['benefits-sections']} style={{ backgroundColor: '#E6D5C0' }}>
                <div className={s.row}>
                <div className={s.circle}>
                        <Subtitle>
                            Reabilitação
                        </Subtitle>
                        <Subtitle>
                            de lesões
                        </Subtitle>
                    </div>
                    <div className={s.lines} style={{ maxWidth: '560px'}}>
                        <Line bgColor='#18727D'>
                            Tratamento para hérnias de disco
                        </Line> 
                        <Line bgColor='#18727D'>
                            Prevenção de entorses recorrentes
                        </Line>
                        <Line bgColor='#18727D'>
                            Tratamento para tendinites e bursites
                        </Line>
                        <Line bgColor='#18727D'>
                            Tratamento para dor ciática 
                        </Line>
                    </div>
                </div>
            </div>
            <div className={s['benefits-sections']} style={{ backgroundColor: 'white' }}>
                <div className={s['row-reverse']}>
                    <div className={s.lines} style={{ maxWidth: '560px'}}>
                        <Line bgColor='#18727D'>
                            Tratamento para condromalácia patelar
                        </Line> 
                        <Line bgColor='#18727D'>
                            Tratamento para artrose
                        </Line>
                        <Line bgColor='#18727D'>
                            Tratamento para bicos de papagaio (osteófitos)
                        </Line>
                    </div>
                    <div className={s.circle}>
                        <Subtitle>
                            Desgastes
                        </Subtitle>
                        <Subtitle>
                            Articulares
                        </Subtitle>
                    </div>
                </div>
            </div>
            <div className={s['benefits-sections']} style={{ backgroundColor: '#E6D5C0' }}>
                <div className={s.row}>
                <div className={s.circle}>
                        <Subtitle>
                            Dores crônicas
                        </Subtitle>
                        <Subtitle>
                            e
                        </Subtitle>
                        <Subtitle>
                           Doenças 
                        </Subtitle>
                        <Subtitle>
                        auto-imunes
                        </Subtitle>
                    </div>
                    <div className={s.lines} style={{ maxWidth: '560px'}}>
                        <Line bgColor='#18727D'>
                            Controle das crises e redução da dor na fibromialgia
                        </Line> 
                        <Line bgColor='#18727D'>
                            Redução das dores tensionais na distonia
                        </Line>
                        <Line bgColor='#18727D'>
                            Alivio de tensões musculares crônicas e pontos gatilho
                        </Line>
                        <Line bgColor='#18727D'>
                            Redução das dores no lúpus e doenças reumáticas
                        </Line>
                    </div>
                </div>
            </div>
            <div className={s['benefits-sections']} style={{ backgroundColor: 'white' }}>
                <div className={s['row-reverse']}>
                    <div className={s.lines} style={{ maxWidth: '560px'}}>
                        <Line bgColor='#18727D'>
                            Alívio de dores causadas por má postura
                        </Line> 
                        <Line bgColor='#18727D'>
                            Tratamento para escoliose
                        </Line>
                        <Line bgColor='#18727D'>
                            Correção de desvios posturais
                        </Line>
                        <Line bgColor='#18727D'>
                            Melhora da consciência corporal
                        </Line>
                    </div>
                    <div className={s.circle}>
                        <Subtitle>
                            Correção
                        </Subtitle>
                        <Subtitle>
                            Postural
                        </Subtitle>
                    </div>
                </div>
            </div>
            <div className={s['benefits-sections']} style={{ backgroundColor: '#E6D5C0' }}>
                <div className={s.row}>
                <div className={s.circle}>
                        <Subtitle>
                            Qualidade
                        </Subtitle>
                        <Subtitle>
                            de vida
                        </Subtitle>
                        <Subtitle>
                        do idoso
                        </Subtitle>
                    </div>
                    <div className={s.lines} style={{ maxWidth: '560px'}}>
                        <Line bgColor='#18727D'>
                            Fortalecimento global do idoso
                        </Line> 
                        <Line bgColor='#18727D'>
                            Redução da rigidez articular
                        </Line>
                        <Line bgColor='#18727D'>
                            Melhora do equilíbrio e da marcha
                        </Line>
                        <Line bgColor='#18727D'>
                            Melhora da respiração
                        </Line>
                    </div>
                </div>
            </div>
            <div className={s['benefits-sections']} style={{ backgroundColor: 'white' }}>
                <div className={s['row-reverse']}>
                    <div className={s.lines} style={{ maxWidth: '560px'}}>
                        <Line bgColor='#18727D'>
                        Preparo para parto normal
                        </Line> 
                        <Line bgColor='#18727D'>
                        Prevenção de diástase abdominal
                        </Line>
                        <Line bgColor='#18727D'>
                        Alívio de dores nas costas
                        </Line>
                        <Line bgColor='#18727D'>
                        Melhora da disposição
                        </Line>
                        <Line bgColor='#18727D'>
                        Melhora da respiração
                        </Line>
                        <Line bgColor='#18727D'>
                        Melhora da qualidade do sono
                        </Line>
                        <Line bgColor='#18727D'>
                        Preparo muscular para o pós parto 
                        </Line>
                    </div> 
                    <div className={s.circle} >
                        <Subtitle>
                            Gestantes
                        </Subtitle>
                    </div>
                </div>
            </div>
            <div className={s['benefits-sections']} style={{ backgroundColor: 'white' }}>
                <Button
                    variant="primary"
                    type="button"
                    label="agende sua aula experimental"
                    onClick={
                        () => window.open(
                            `https://wa.me/${PHONE}?text=Olá!%20Visitei%20seu%20site%20e%20gostaria%20de%20saber%20mais%20
                            informações%20sobre%20o%20espaço.%20Meu%20nome%20é`
                        )
                    }
                    id='benefits-action-button'
                >
                    Agende sua aula experimental
                </Button>
            </div>
            <Footer />
        </>
    )
}