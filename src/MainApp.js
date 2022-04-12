import {Header} from "./components/Header";
import React, {Component} from "react";
import {View} from "react-native-web";
import {Gallery} from "./components/Gallery";

import './App.scss';
import './components/Grid.css';

export class MainApp extends Component {
    constructor(props) {
        super(props)
        this.services = React.createRef();
        this.find = React.createRef();
    }

    state = {
        portrait: false,
    }

    componentDidMount() {
        window.addEventListener('resize', this.listenToResize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.listenToResize)
    }

    listenToResize = () => {
        if (document.documentElement.scrollWidth < 850) {
            console.log("mobile")
            this.setState({
                portrait: true,
            });
        } else {
            this.setState({
                portrait: this.props.mobile,
            });
        }
    }

    scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop - 100);

    scrollTo = (where) => {
        switch (where) {
            case "top":
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                break;
            case "services":
                this.scrollToRef(this.services);
                // this.services.current.scrollIntoView();
                break;
            case "find":
                this.scrollToRef(this.find);
                // this.find.current.scrollIntoView();
                break;
            default:
                break;
        }

    }

    render() {
        const bookButton = () => {
            return (
                <button className={"book-button"} onClick={(e) => {
                    e.preventDefault();
                    window.open("https://alinahairstylist.square.site/", "_blank");
                }}>BOOK&nbsp;NOW</button>
            )
        }

        return (
            <>
                <Header scrollCallback={this.scrollTo} mobile={this.state.portrait}/>
                <div className={"grain"}/>

                <div className={"main-background full-page"}>
                    <div className={"mbg1"}/>
                    <div className={"mbg2"}/>
                    <h1>WELCOME&nbsp;TO ALINA&nbsp;HAIRSTYLIST</h1>
                    {!this.state.portrait && bookButton()}
                </div>

                <section className={"section full-page"}>

                    <h2>LOCATION & HOURS</h2>
                    <section className={"dynamic-grid"}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2679.5362862632987!2d-122.37991558417392!3d47.80982408190993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54901afa43eb4b77%3A0x40978f944a4d16a7!2s130%205th%20Ave%20S%2C%20Edmonds%2C%20WA%2098020!5e0!3m2!1sen!2sus!4v1649446313086!5m2!1sen!2sus"
                                width="100%" height="100%" allowFullScreen="" loading="lazy" id={"map"}
                                referrerPolicy="no-referrer-when-downgrade"/>
                        <p id={"test"}>130 5th Ave S<br/>
                            Edmonds, Washington 98020<br/><br/>
                            <b><a href={"https://www.google.com/maps/dir/?api=1&destination=130%205th%20Ave%20S%20Edmonds%20WA%2098020"}
                                  target={"_blank"}>Get Directions</a></b><br/><br/>
                            Monday 10:00 am - 7:00 pm<br/>
                            Tuesday 10:00 am - 7:00 pm<br/>
                            Wednesday 10:00 am - 7:00 pm<br/>
                            Thursday 10:00 am - 7:00 pm<br/>
                            Friday 10:00 am - 7:00 pm<br/>
                            Saturday 10:00 am - 7:00 pm<br/>
                            Sunday 11:00 am - 5:00 pm
                        </p>
                    </section>

                    <h2>SCHEDULE AN APPOINTMENT</h2>
                    <section className={"dynamic-grid"}>
                        <p>
                            Thank you for considering me to be your hairstylist. At the beginning of your appointment we
                            will have a consultation about your hair history, your hair goals, and what to expect from
                            your first appointment. Based on the consultation, I will get you as close as possible to
                            your hair goals, however, sometimes multiple sessions are required to reach that end goal.
                        </p>

                        <View style={{flexDirection: "column", gap: "1rem", justifyContent: "center", paddingHorizontal: "10%"}}>
                            <View style={{flexDirection: "row", gap: "1rem", justifyContent: "center"}}>
                                <a href={"https://www.instagram.com/invites/contact/?i=w1cqx4msy1f0&utm_content=nrbpeaj"} target={"_blank"}>
                                    <svg className={"media-icon"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_0_1)">
                                            <path d="M12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C20.102 2.381 21.621 3.924 21.769 7.152C21.827 8.417 21.838 8.797 21.838 12.001C21.838 15.206 21.826 15.585 21.769 16.85C21.62 20.075 20.105 21.621 16.85 21.769C15.584 21.827 15.206 21.839 12 21.839C8.796 21.839 8.416 21.827 7.151 21.769C3.891 21.62 2.38 20.07 2.232 16.849C2.174 15.584 2.162 15.205 2.162 12C2.162 8.796 2.175 8.417 2.232 7.151C2.381 3.924 3.896 2.38 7.151 2.232C8.417 2.175 8.796 2.163 12 2.163V2.163ZM12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273 2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014 15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052 23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986 16.948 23.928C21.302 23.728 23.73 21.31 23.927 16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.333 23.928 7.053C23.732 2.699 21.311 0.273 16.949 0.073C15.668 0.014 15.259 0 12 0V0ZM12 5.838C8.597 5.838 5.838 8.597 5.838 12C5.838 15.403 8.597 18.163 12 18.163C15.403 18.163 18.162 15.404 18.162 12C18.162 8.597 15.403 5.838 12 5.838ZM12 16C9.791 16 8 14.21 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.21 14.209 16 12 16ZM18.406 4.155C17.61 4.155 16.965 4.8 16.965 5.595C16.965 6.39 17.61 7.035 18.406 7.035C19.201 7.035 19.845 6.39 19.845 5.595C19.845 4.8 19.201 4.155 18.406 4.155Z" fill="black"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_0_1">
                                                <rect width="24" height="24" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                                <a href={"mailto:alinashairstylist@gmail.com"} target={"_blank"}>
                                    <svg className={"media-icon"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.0206 20.8588H3.97965C1.88666 20.8588 0.184125 19.1562 0.184125 17.0632V6.9365C0.184125 4.84378 1.88692 3.14098 3.97965 3.14098H20.0206C22.1133 3.14098 23.8159 4.84378 23.8159 6.9365V17.0632C23.8159 19.1562 22.1133 20.8588 20.0206 20.8588ZM3.97965 4.25089C2.49872 4.25089 1.29403 5.45558 1.29403 6.9365V17.0632C1.29403 18.5442 2.49872 19.7491 3.97965 19.7491H20.0206C21.5015 19.7491 22.7062 18.5442 22.7062 17.0632V6.9365C22.7062 5.45558 21.5015 4.25089 20.0206 4.25089H3.97965Z" fill="#1D1D1B"/>
                                        <path d="M3.084 6.98928C5.92086 9.75367 8.75772 12.5178 11.5946 15.2822C12.1234 15.7974 12.935 14.9876 12.4054 14.4714C9.56856 11.7072 6.7317 8.94284 3.89483 6.17871C3.36601 5.66328 2.55439 6.47332 3.084 6.98928Z" fill="#1D1D1B"/>
                                        <path d="M12.4054 15.2822C15.2423 12.5181 18.0791 9.75367 20.916 6.98954C21.4453 6.47358 20.6343 5.66328 20.1052 6.17871C17.2683 8.94284 14.4314 11.7072 11.5946 14.4714C11.0652 14.9873 11.8763 15.7976 12.4054 15.2822Z" fill="#1D1D1B"/>
                                        <path d="M20.8847 17.2389C18.9971 15.4487 17.1092 13.6587 15.2215 11.8685C14.6861 11.3609 13.874 12.1702 14.4107 12.6793C16.2984 14.4695 18.1863 16.2595 20.0739 18.0497C20.6093 18.5573 21.4215 17.7478 20.8847 17.2389Z" fill="#1D1D1B"/>
                                        <path d="M3.97728 18.0495C5.86494 16.2592 7.75285 14.4693 9.6405 12.679C10.1769 12.1701 9.36532 11.3604 8.82967 11.8682C6.94202 13.6584 5.0541 15.4484 3.16645 17.2386C2.63001 17.7475 3.44163 18.5576 3.97728 18.0495Z" fill="#1D1D1B"/>
                                    </svg>
                                </a>
                                <a href={"https://www.facebook.com/alinahairstylistedmonds/"} target={"_blank"}>
                                    <svg className={"media-icon"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_0_1)">
                                            <path d="M22.675 0H1.325C0.593 0 0 0.593 0 1.325V22.676C0 23.407 0.593 24 1.325 24H12.82V14.706H9.692V11.084H12.82V8.413C12.82 5.313 14.713 3.625 17.479 3.625C18.804 3.625 19.942 3.724 20.274 3.768V7.008L18.356 7.009C16.852 7.009 16.561 7.724 16.561 8.772V11.085H20.148L19.681 14.707H16.561V24H22.677C23.407 24 24 23.407 24 22.675V1.325C24 0.593 23.407 0 22.675 0V0Z" fill="black"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_0_1">
                                                <rect width="24" height="24" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </View>
                            {bookButton()}
                        </View>

                    </section>
                </section>

                <div className={"main-background half-page"}>
                    <div className={"mbg1"}/>
                    <div className={"mbg2"}/>
                    <h2>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 19.5026C7 10.5026 12.5296 6.8889 24 7.0026V11.0026C20.3754 13.5189 18.871 15.1832 19 19.5026H24V42.5026H7C7 42.5026 7 28.5026 7 19.5026Z" fill="whitesmoke"/>
                            <path d="M26 19.5026C26 10.5026 31.5296 6.8889 43 7.0026V11.0026C39.3754 13.5189 37.871 15.1832 38 19.5026H43V42.5026H26C26 42.5026 26 28.5026 26 19.5026Z" fill="whitesmoke"/>
                        </svg>
                        <br/>
                        ALINA HAIRSTYLIST’S SERVICE IS UNMATCHED. THE CONFIDENCE OF A HAIRCUT CAN CHANGE EVERYTHING.
                        {/*I'M VERY PICKY WHEN IT COMES TO HAIR CUTS, BUT ALINA TOOK THE TIME TO UNDERSTAND MY HAIR AND MADE IT LOOK EXACTLY HOW I WANTED. I HIGHLY SUGGEST YOU GIVE HER A TRY. I KNOW I WILL DEFINITELY BE BACK!*/}
                        <p>- JENNIFER LAM</p>
                    </h2>
                </div>

                <section className={"section full-page"}>
                    <h2 ref={this.find}>FIND US</h2>
                    <section className={"wide-grid"}>
                        <p>
                            <b>Finding the Salon</b><br/>
                            Alina Hairstylist Salon is located inside of the Mosaic building in Salon 14. The Mosaic building
                            has an entrance on the corner of Dayton Street and 5th Ave South. <br/><br/>

                            <b>Parking Information</b><br/>
                            There is a large lot behind the Mosaic building providing free, two hour parking for customers.
                            Starting at the intersection of Dayton and 5th Avenue, travel west down Dayton street and the
                            lot will be on your right. There is also some street parking available on 5th Avenue South.
                        </p>
                        <div className={"gallery-card"} id={"find-us"}/>
                    </section>

                    <h2 ref={this.services}>SERVICES</h2>
                    <Gallery/>
                </section>

                <section className={"footer"}>
                    <div className={"footer-line"}/>
                    <section className={"wide-grid"}>
                        <p>
                            <h3>SITE</h3>
                            © Alina Hairstylist<br/>
                            Website Design by <a href={"https://stefantodoran.github.io/"} target={"_blank"}>Stefan Todoran</a>
                        </p>
                        <p>
                            <h3>CONTACT</h3>
                            alinashairstylist@gmail.com<br/>
                            +1 (240) 566-2071
                        </p>
                        <p>
                            <h3>FIND&nbsp;US</h3>
                            <a href={"https://www.google.com/maps/dir/?api=1&destination=130%205th%20Ave%20S%20Edmonds%20WA%2098020"} target={"_blank"}>
                                130 5th Ave S<br/>
                                Edmonds, Washington 98020
                            </a>
                        </p>
                    </section>
                </section>
            </>
        );
    }
}

export default MainApp;
