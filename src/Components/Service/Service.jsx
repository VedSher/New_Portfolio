import React from 'react';
import serviceCSS from '../Service/Service.module.css';
import { Tilt } from 'react-tilt';


const Service = () => {

    const defaultOptions = {
        max: 10,
        speed: 0.05,
        scale: 1.0,
        
    }

    return (
        <div className={`${serviceCSS.ServiceWrapper} section`} id="Service">
            <h2>What I Do</h2>
            <p className={serviceCSS.pera}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos aperiam placeat eveniet? Iste debitis veniam corrupti placeat officia itaque vitae!</p>
        
            <div className={serviceCSS.ServiceCards}>
                <Tilt options={defaultOptions}>

                    <div className={serviceCSS.ServiceCard}>
                        <i className="ri-database-line"></i>
                        <h3>Front-End Designing</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis optio illo sed!</p>
                        <h4>Learn More <i class="ri-arrow-right-line"></i></h4>
                    </div>
                </Tilt>

                <Tilt options={ defaultOptions }>

                    <div className={serviceCSS.ServiceCard}>
                        <i className="ri-pantone-line"></i>
                        <h3>Back-End Designing</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis optio illo sed!</p>
                        <h4>Learn More <i class="ri-arrow-right-line"></i></h4>
                    </div>
                </Tilt>

                <Tilt options={ defaultOptions }>
                    
                    <div className={serviceCSS.ServiceCard}>
                        <i class="ri-pencil-ruler-line"></i>
                        <h3>UI/UX Designing</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis optio illo sed!</p>
                        <h4>Learn More <i class="ri-arrow-right-line"></i></h4>
                    </div>
                </Tilt>
            </div>
        </div>
    );
}

export default Service;
