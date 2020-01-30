import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import {Container, Col, Row} from 'react-bootstrap';
import { HomeStyles, Intro, AboutUs, HowItWorks, Footer, Blog } from './HomeStyles';
import { MainButton } from '../../components/Button/Buttons'
import { ReactComponent as Enter } from '../../assets/enter.svg';
import { ReactComponent as Note } from '../../assets/note.svg';
import { ReactComponent as AI } from '../../assets/ai.svg';
import { ReactComponent as Money } from '../../assets/money.svg';
import { ReactComponent as Astronaut } from '../../assets/astronaut.svg';
import { ReactComponent as Astronaut2 } from '../../assets/professions-and-jobs.svg';
import { ReactComponent as Rocket } from '../../assets/rocket.svg';
import { ObserverContext } from '../../contexts/ObserverContext';

function useOnScroll(options) {
    const context                   = useContext(ObserverContext);
    const [ref, setRef]             = useState(null);
    const [isCrossed, setIsCrossed] = useState(true);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsCrossed(entry.isIntersecting)
        }, options);
        if(ref) observer.observe(ref);  
        if(isCrossed!==context.isCrossed) context.handleCrossing(isCrossed)
        return () =>{if(ref) observer.unobserve(ref);}
    }, [ref, options, context, isCrossed]);
    return setRef
}
function Home() {
    const setRef = useOnScroll({threshold:0.1});
    return (
        <HomeStyles  >
            <Intro  ref={setRef}>
                <h1>SE MAS</h1>
                <h2>Impulsando PYMES mexicanas y ayudandolas a crecer</h2>
                <p style={{padding:'30px'}}>Nuestro modelo de negocio esta diseñado para poner nuestro
                   maximo compromiso, solo ganamos si tu ganas </p>
                <div style={{display:'flex', justifyContent:'center'}}>
                    <Link to="/signup">
                        <MainButton>Registrate</MainButton>
                    </Link>
                </div>       
            </Intro>
            <AboutUs >
                <div  className="about-left">
                    <h2>Acerca de Nosotros</h2>
                    <p>
                        SE+ es una plataforma diseñada para hacer crecer tu negocio
                        Empleamos inteligencia artificial para analizar tus ventas y
                        darte consejos que te ayuden a tomar las desiciones que contribuyan
                        a crecer tu negocio.
                    </p>
                </div>
                <div className="about-right">
                </div>
            </AboutUs>
            <HowItWorks>
                <div style={{display:'flex', justifyContent:'center'}}>
                    <h2> Como funciona</h2>
                </div>
                <div className='container'>
                    <div className='steps'>
                        <div className="text-container">
                            <h4>Paso 1</h4>
                            <h3>Registra tu comercio en la plataforma</h3>
                            <p> Registra tu comercio gratuitamente en nuestra plataforma
                                y empieza a gosar de los beneficios de pertenecer a SE+
                            </p>
                        </div>
                        <div className='icon-container'>
                            <Enter className='icon'/>
                        </div>
                    </div>
                    <div className='steps'>
                        <div className='icon-container'>
                            <Note className='icon'/>
                        </div>
                        <div className="text-container">
                            <h4>Paso 2</h4>
                            <h3>Digitalizate</h3>
                            <p> Registra tus ventas e inventario empleando nuestras aplicaciones (disponibles en iOs y Android)
                                de esta forma podremos ayudarte a optimizar tus compras y reducir costos.
                                Adicionalmente, tus ventas se incrementaran si aceptas pagos digitales
                            </p>
                        </div>
                    </div>

                    <div className='steps'>
                        <div className="text-container">
                            <h4>Paso 3</h4>
                            <h3>Usa las herramientas de la plataforma</h3>
                            <p> La plataforma automaticamente analizara tus ventas empleando inteligencia
                                Artificial (I.A). Usa el dashboard y sigue los consejos que la I.A te dara
                                para incrementar tus ventas y reducir costos.  
                            </p>
                        </div>
                        <div className='icon-container'>
                            <AI className='icon'/>
                        </div>
                    </div>

                    <div className='steps'>
                        <div className='icon-container'>
                            <Money className='icon'/>
                        </div>
                        <div className="text-container">
                            <h4>Paso 4</h4>
                            <h3>Gana </h3>
                            <p> En un plazo no mayor a 3 meses tus ventas se habran incrementado en
                                mas de un 30%. Entre mas ventas registres en la aplicación más puedes
                                crecer tu negocio. 
                            </p>
                        </div>
                    </div>
                </div>
                <div style={{display:'flex', justifyContent:'center'}}>                    
                    <Link to="/signup">
                        <MainButton>Registrate</MainButton>
                    </Link>
                </div>
            </HowItWorks>
            <Blog>
                <Astronaut className='icon'/>
                <Astronaut2 className='icon'/>
                <Rocket className='icon'/>
            </Blog>
            <Footer>
                    <Container>
                        <Row>
                            <Col>
                                <h4>Oportunidades</h4>
                            </Col>
                            <Col>
                                <h4>Conce mas</h4>
                            </Col>
                            <Col>
                                <h4>General</h4>
                            </Col>
                            <Col>
                                <h4>Contactanos</h4>
                            </Col>
                        </Row>
                    </Container>
                </Footer>

        </HomeStyles>

    )
}

export default Home
