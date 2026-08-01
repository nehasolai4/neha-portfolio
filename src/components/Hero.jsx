import profile from '../assets/Profile.jpeg'
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { useState, useEffect } from 'react';
import Starfield from './StarFiled';
function Hero(){
    const fullText = "NEHA SOLAI"
    const [displayText, setDisplayText]=useState("");

    useEffect(()=>{
        let index=0;
        const interval = setInterval(()=>{
            setDisplayText(fullText.slice(0,index+1));
            index++;

            if(index===fullText.length){
                clearInterval(interval)
            }
        },250)

        return()=>clearInterval(interval);
    },[])
    return(
        <div className="Hero-section">
            <Starfield />
            <div className="name">
                <h2>Hi, I am</h2>
                <h1 className='typing'>{displayText}</h1>
                <p className="role">Frontend Developer | React | JavaScript | CSS</p>
                <p className="bio">
                        Frontend developer focused on building responsive, accessible, and user-friendly web applications using React.
                </p>

                <div className='buttons'>
                    <a href='#contact' className="contact-btn">
                        Contact Me
                    </a>
                       
                    <a 
                        href='https://www.linkedin.com/in/neha-solai-953bb7321/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='social-btn'
                    >
                        <FaLinkedinIn />
                    </a>

                    <a 
                        href="https://github.com/nehasolai4" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-btn"
                    >
                        <FaGithub />
                    </a>
                </div>
            </div>

            <div className="image">
                <img src={profile} alt='profile'></img>
            </div>


        </div>

    )


}

export default Hero