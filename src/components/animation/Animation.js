import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './Animation.css'
import AzionLogo from '../../assets/azionLogo.jpg'
import SourcifyLogo from '../../assets/sourcifyLogo.jpg'
import Logo from '../../assets/logo1.png'


const Animation = () => {
    const [animation, setAnimation] = useState(true);
    const [showText, setShowText] = useState(false);
    const [logo, setLogo] = useState(false);
    const navigate = useNavigate(); 

    useEffect(() => {
        const animationTimer = setTimeout(() => {
            setAnimation(false);
        }, 1500);

        const textTimer = setTimeout(() => {
            setShowText(true);
        }, 1000);

        const logoTimer = setTimeout(() => {
            setLogo(true);
        }, 1500);

        const navigateTimer = setTimeout(() => {
            navigate('/home');
        }, 4000);

        // Clean up the timer on component unmount           
        return () => {
            clearTimeout(animationTimer);
            clearTimeout(textTimer);
            clearTimeout(logoTimer);
            clearTimeout(navigateTimer);
        };
    }, [navigate]);

    return (
        <div className='animation'>
            {animation &&
                <>
                    <div className="animationLeft">
                        <img src={AzionLogo} alt="Azion Logo 1" className="moveTopLeft" />
                        <img src={AzionLogo} alt="Azion Logo 2" className="moveTopLeft" />
                        <img src={AzionLogo} alt="Azion Logo 3" className="centerImg" />
                        <img src={AzionLogo} alt="Azion Logo 4" className="moveBottomLeft" />
                        <img src={AzionLogo} alt="Azion Logo 5" className="moveBottomLeft" />
                    </div>

                    <div className="animationRight">
                        <img src={SourcifyLogo} alt="Sourcify Logo 1" className="moveTopRight" />
                        <img src={SourcifyLogo} alt="Sourcify Logo 2" className="moveTopRight" />
                        <img src={SourcifyLogo} alt="Sourcify Logo 3" className="centerImg" />
                        <img src={SourcifyLogo} alt="Sourcify Logo 4" className="moveBottomRight" />
                        <img src={SourcifyLogo} alt="Sourcify Logo 5" className="moveBottomRight" />
                    </div>
                </>
            }

            {showText && <p className="centerText"><i>Where Learning Meets Shopping – AzionXSourcify!</i></p>}

            {logo && <img src={Logo} alt="Logo" className='logoAnimation' />}
        </div>

    )
}

export default Animation
