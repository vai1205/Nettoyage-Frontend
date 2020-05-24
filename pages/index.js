import english from "../localization/english";
import french from "../localization/french";
import {useState, useEffect} from "react";
import {useLocalStorage} from "react-use";
import Header from "../components/Header";
import Slider from "../components/Slider";
import About from "../components/About";
import UserForm from "../components/UserForm";
import Head from "next/head";
import Services from "../components/Services";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Popup from "../components/Popup";
import HowItWorks from "../components/howItWorks";

const Index = () => {

    const [isEnglish, setIsEnglish] = useLocalStorage("isEnglish", false);
    const [language, setLanguage] = useState(french);
    const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
    useEffect(()=>{
        // load page with light theme 
        let bodyElement = document.querySelector("body");
        let hrElement = document.querySelectorAll("hr");
        let ctaButton = document.getElementById("cta-btn");
        let ctaSection = document.getElementById("cta");
        let blueHeadings = document.getElementsByClassName("primary-color");
        let hiwSection = document.getElementById("howItWorks");
        let serviceSection = document.getElementById("services");
        let contactSection = document.getElementById("contact");
        if(darkMode) {
            bodyElement.classList.add("dark");
            if(ctaButton) {
                ctaButton.classList.remove("btn-outline-dark");
                ctaButton.classList.add("btn-outline-light");
            }
            if (hrElement) {
                for (let i=0; i < hrElement.length; i++) {
                    hrElement[i].classList.add("darkRule");
                }
            }
            if(blueHeadings.length) {
                for(let i=0;i<blueHeadings.length;i++) {
                    blueHeadings[i].classList.add("text-white");
                }
            }
            if(hiwSection) {
                hiwSection.classList.remove("howItWorksLightBg");
                hiwSection.classList.add("howItWorksDarkBg");
            }
            if(serviceSection) {
                serviceSection.classList.remove("light-blue-bg");
                serviceSection.classList.add("servicesDarkBg");
                serviceSection.classList.remove("servicesLightBg");
            }
            if (contactSection) {
                contactSection.classList.add("contactDarkBg");
                contactSection.classList.remove("contactLightBg");
            }
            if (ctaSection) {
                ctaSection.classList.add("ctaDarkBg");
                ctaSection.classList.remove("ctaLightBg");
            }
        } else {
            bodyElement.classList.remove("dark");
            if(ctaButton) {
                ctaButton.classList.remove("btn-outline-light");
                ctaButton.classList.add("btn-outline-dark");
            }
            if (hrElement) {
                for (let i=0; i < hrElement.length; i++) {
                    hrElement[i].classList.remove("darkRule");
                }
            }
            if(blueHeadings.length) {
                for(let i=0;i<blueHeadings.length;i++) {
                    blueHeadings[i].classList.remove("text-white");
                }
            }
            if(hiwSection) {
                hiwSection.classList.remove("howItWorksDarkBg");
                hiwSection.classList.add("howItWorksLightBg");
            }
            if(serviceSection) {
                serviceSection.classList.add("light-blue-bg");
                serviceSection.classList.remove("servicesDarkBg");
                serviceSection.classList.add("servicesLightBg");
            }
            if (contactSection) {
                contactSection.classList.remove("contactDarkBg");
                contactSection.classList.add("contactLightBg");
            }
            if (ctaSection) {
                ctaSection.classList.remove("ctaDarkBg");
                ctaSection.classList.add("ctaLightBg");
            }
        }
        // load page in French
        if (isEnglish) {
            setLanguage(english);
        } else {
            setLanguage(french);
        }
    },[darkMode, isEnglish]);

    let {name} = language;

    const showLanguage = name === "english" 
        ?   <span>French</span>
        :   <span>English</span>
    const themeIcon = darkMode 
        ?  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
                fill="none" stroke="#ffc107" strokeWidth="2" strokeLinecap="round" 
                strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg> 
        :   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
                strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
    const showThemeIcon = () => <div onClick={()=>{setDarkMode((prevMode) => !prevMode)}}>{themeIcon}</div>;
    const showCovid19Popup = () => {
        return(
            <Popup 
                title={language.covid19Heading}
                body={language.covid19Text}
                close={language.close}
                isOpenByDefault
            />
        );
    };
    const showCurrentLanguage = () => {
        return (
            <div onClick={()=>{setIsEnglish((prevLang) => !prevLang)}}>{showLanguage}</div>
        );
    };
    return (
        <React.Fragment>
            {showCovid19Popup()}
            <section id="header">
                <Header
                    language={language}
                    darkMode={darkMode}
                    showThemeIcon={showThemeIcon}
                    showCurrentLanguage={showCurrentLanguage}
                />
            </section>
            <section id="cta">
                <Cta language={language} />
            </section>
            <section id="slider">
                <Slider/>
            </section>
            <section id="about">
                <About language={language}/>
            </section>
            <section id="userForm" className="userForm">
                <UserForm language={language} />
            </section>
            <section id="services">
                <Services language={language} />
            </section>
            <section id="footer">
                <Footer language={language} />
            </section>
            <section id="howItWorks">
            <HowItWorks language={language} />
            </section>
            <section id="contact">
                <Contact language={language} />
            </section>
        </React.Fragment>
    );

};

export default Index;
