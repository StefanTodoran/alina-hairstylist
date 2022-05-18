import {Header} from "./components/Header";
import React, {Component} from "react";
import {View} from "react-native-web";
import {Gallery} from "./components/Gallery";

import './App.scss';
import './components/Grid.css';

export class MainApp extends Component {
    constructor(props) {
        super(props)
        this.book = React.createRef();
        this.find = React.createRef();
        this.services = React.createRef();
    }

    state = {
        portrait: false,
    }

    componentDidMount() {
        window.addEventListener('resize', this.listenToResize)
        this.listenToResize(); // we run this once to set the window mode before any resizing
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.listenToResize)
    }

    listenToResize = () => {
        if (document.documentElement.scrollWidth < 980) {
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

    scrollToRef = (ref) => {
        const offset = (this.state.portrait) ? 150 : 100;
        window.scrollTo(0, ref.current.offsetTop - offset);
    }

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
            case "book":
                this.scrollToRef(this.book);
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

        const shapesColor = "#85a777";
        return (
            <>
                <Header scrollCallback={this.scrollTo} mobile={this.state.portrait}/>
                <div className={"grain"}/>

                <div className={"banner"}>
                    <div className={"main-background"}>
                        <div className={"mbg1"}/>
                        <div className={"mbg2"}/>
                    </div>
                    <h1>WELCOME&nbsp;TO<br/>ALINA&nbsp;HAIRSTYLIST</h1>
                    {bookButton()}
                </div>

                <section className={"section full-page"}>

                    <svg className="left-shapes" width="20vmin" height="80vmin" viewBox="5 0 105 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="Little Triangle" d="M12.1055 151.416L24.0521 142.812L25.5301 157.46L12.1055 151.416Z" stroke={shapesColor}/>
                        <path id="Filled Triangle B" d="M12.9748 124.11L19.5817 128.245L12.6972 131.899L12.9748 124.11Z" fill={shapesColor}/>
                        <path id="Filled Triangle A" d="M19 89.9915L21.6056 88.6834L19.2252 87L19 89.9915Z" fill={shapesColor}/>
                        <path id="Squiggle C" d="M29.7084 59.4061C30.5406 56.1392 29.398 55.6349 27.3473 54.4925C24.4342 52.9994 24.891 51.2961 24.9863 49.5789" stroke={shapesColor}/>
                        <g id="Squiggle B">
                            <path id="Squiggle" d="M22.1867 42.6236C18.0686 39.4101 17.636 41.3081 16.5699 44.5947C15.2139 49.3291 13.0632 47.6106 10.9531 46.5658" stroke={shapesColor}/>
                            <path id="Squiggle_2" d="M33.2676 38.5607C29.1494 35.3471 28.7168 37.2452 27.6508 40.5318C26.2948 45.2662 24.144 43.5477 22.0339 42.5029" stroke={shapesColor}/>
                        </g>
                        <g id="Squiggle A">
                            <path id="Squiggle_3" d="M21.7801 24.6309C17.9811 25.8668 18.303 27.3125 18.6476 30.0565C19.2646 33.8729 17.2676 34.4947 15.5151 35.4821" stroke={shapesColor}/>
                            <path id="Squiggle_4" d="M27.9035 13.8248C24.1046 15.0607 24.4265 16.5063 24.7711 19.2503C25.3881 23.0667 23.3911 23.6885 21.6386 24.6759" stroke={shapesColor}/>
                        </g>
                        <path id="Semi Circle" d="M4 201C24.7713 207.16 23.2135 250.28 4 257" stroke={shapesColor}/>
                        <circle id="Circle Filled 2" cx="18" cy="191" r="2" fill={shapesColor}/>
                        <circle id="Circle Filled" cx="22" cy="260" r="3" fill={shapesColor}/>
                        <circle id="Circle Empty" cx="36.5" cy="245.5" r="6" stroke={shapesColor}/>
                        <rect id="Little Square" x="-0.300183" y="0.643787" width="10.8505" height="10.9803" transform="matrix(-0.938111 0.346336 0.337744 0.941238 30.3178 341.142)" stroke={shapesColor}/>
                        <rect id="Filled Square B" width="5.92098" height="5.99436" transform="matrix(-0.964994 -0.262273 -0.255404 0.966834 20.2447 363.553)" fill={shapesColor}/>
                        <rect id="Filled Square B_2" width="18.0267" height="18.2501" transform="matrix(-0.537075 0.843535 0.847333 0.531062 9.77976 312.233)" fill={shapesColor}/>
                        <rect id="Filled Square A" x="-0.123594" y="0.701004" width="3.21166" height="3" transform="matrix(-0.815291 0.579051 0.568103 0.822957 18.3774 299.196)" stroke={shapesColor}/>
                        <line id="Line 1" x1="2.61589" y1="127.68" x2="22.6159" y2="103.68" stroke={shapesColor}/>
                        <line id="Line 2" x1="4.30982" y1="88.6076" x2="23.3098" y2="103.608" stroke={shapesColor}/>
                    </svg>
                    <svg className="right-shapes" width="20vmin" height="70vmin" viewBox="0 0 100 375" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Big Square">
                            <line id="Upper Side" x1="100.354" y1="273.354" x2="79.1404" y2="294.567" stroke={shapesColor}/>
                            <line id="Lower Side" x1="100.646" y1="315.354" x2="79.4332" y2="294.14" stroke={shapesColor}/>
                        </g>
                        <rect id="Little Square" x="83.4031" y="331.641" width="11" height="11" transform="rotate(20 83.4031 331.641)" stroke={shapesColor}/>
                        <rect id="Filled Square B" x="76.3258" y="313.879" width="6" height="6" transform="rotate(-15 76.3258 313.879)" fill={shapesColor}/>
                        <rect id="Filled Square A" x="85.0985" y="269" width="3" height="3" transform="rotate(35 85.0985 269)" fill={shapesColor}/>
                        <path id="Squiggle Small" d="M85.2307 201.046C83.8483 204.121 82.6402 203.804 80.3241 203.421C77.1148 202.776 76.412 204.394 75.4176 205.797" stroke={shapesColor}/>
                        <g id="Squiggle B">
                            <path id="Squiggle" d="M85.7359 224.29C82.4444 219.681 84.3811 218.853 87.7337 217.027C92.5636 214.618 90.8036 212.217 89.7315 209.763" stroke={shapesColor}/>
                            <path id="Squiggle_2" d="M81.6166 238.645C78.3251 234.037 80.2618 233.209 83.6144 231.382C88.4444 228.974 86.6843 226.573 85.6122 224.119" stroke={shapesColor}/>
                        </g>
                        <g id="Squiggle D">
                            <path id="Squiggle_3" d="M86.0312 193.03C88.512 191.213 88.6139 192.355 88.9637 194.342C89.3693 197.199 90.6678 196.225 91.8962 195.653" stroke={shapesColor}/>
                            <path id="Squiggle_4" d="M80.2582 190.339C82.7391 188.522 82.8409 189.665 83.1908 191.651C83.5964 194.508 84.8949 193.534 86.1233 192.962" stroke={shapesColor}/>
                            <path id="Squiggle_5" d="M74.7262 187.506C77.2071 185.688 77.309 186.831 77.6588 188.817C78.0644 191.674 79.3629 190.701 80.5913 190.128" stroke={shapesColor}/>
                        </g>
                        <g id="Squiggle A">
                            <path id="Squiggle_6" d="M90.3796 179.631C94.1785 180.867 93.8567 182.313 93.5121 185.057C92.8951 188.873 94.8921 189.495 96.6445 190.482" stroke={shapesColor}/>
                            <path id="Squiggle_7" d="M84.2561 168.825C88.055 170.061 87.7332 171.506 87.3886 174.25C86.7716 178.067 88.7686 178.688 90.5211 179.676" stroke={shapesColor}/>
                        </g>
                        <circle id="Circle Filled" r="3" transform="matrix(-1 0 0 1 83 137)" fill={shapesColor}/>
                        <circle id="Circle Empty" r="6" transform="matrix(-1 0 0 1 68.5 122.5)" stroke={shapesColor}/>
                        <circle id="Circle Filled_2" r="5" transform="matrix(-1 0 0 1 81 63)" fill={shapesColor}/>
                        <path id="Big Circle" d="M107.5 98C107.5 99.9887 107.566 101.933 107.629 103.777C107.667 104.879 107.704 105.944 107.724 106.963C107.779 109.711 107.717 112.138 107.275 114.156C106.835 116.166 106.027 117.726 104.619 118.794C103.205 119.868 101.114 120.5 98 120.5C85.5736 120.5 75.5 110.426 75.5 98C75.5 85.5736 85.5736 75.5 98 75.5C101.114 75.5 103.205 76.132 104.619 77.2057C106.027 78.2744 106.835 79.8343 107.275 81.8436C107.717 83.8624 107.779 86.2892 107.724 89.0374C107.704 90.0556 107.667 91.1214 107.629 92.2231C107.566 94.0671 107.5 96.0113 107.5 98Z" stroke={shapesColor}/>
                        <path id="Squiggle Small_2" d="M90.1058 27.5588C89.464 30.275 88.528 29.8266 86.7617 29.1779C84.2997 28.1711 83.9802 29.6028 83.4176 30.797" stroke={shapesColor}/>
                        <path id="Squiggle Small_3" d="M89.2186 19.626C92.005 19.4656 91.8424 20.4907 91.725 22.3687C91.4629 25.0156 92.9263 24.9132 94.2314 25.1114" stroke={shapesColor}/>
                    </svg>

                    <h2>LOCATION & HOURS</h2>
                    <section className={"dynamic-grid"}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2679.5362862632987!2d-122.37991558417392!3d47.80982408190993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54901afa43eb4b77%3A0x40978f944a4d16a7!2s130%205th%20Ave%20S%2C%20Edmonds%2C%20WA%2098020!5e0!3m2!1sen!2sus!4v1649446313086!5m2!1sen!2sus"
                                width="100%" height="100%" allowFullScreen="" loading="lazy" id={"map"}
                                referrerPolicy="no-referrer-when-downgrade"/>
                        <p id={"loc-and-hours"}>130 5th Ave S<br/>
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

                    <h2 ref={this.book}>SCHEDULE AN APPOINTMENT</h2>
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
                        <br/>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" id="quote">
                            <path d="M7 19.5026C7 10.5026 12.5296 6.8889 24 7.0026V11.0026C20.3754 13.5189 18.871 15.1832 19 19.5026H24V42.5026H7C7 42.5026 7 28.5026 7 19.5026Z" fill="whitesmoke"/>
                            <path d="M26 19.5026C26 10.5026 31.5296 6.8889 43 7.0026V11.0026C39.3754 13.5189 37.871 15.1832 38 19.5026H43V42.5026H26C26 42.5026 26 28.5026 26 19.5026Z" fill="whitesmoke"/>
                        </svg>
                        <br/>
                        ALINA’S SERVICE IS UNMATCHED. THE CONFIDENCE OF A HAIRCUT CAN CHANGE EVERYTHING.
                        {/*I'M VERY PICKY WHEN IT COMES TO HAIR CUTS, BUT ALINA TOOK THE TIME TO UNDERSTAND MY HAIR AND MADE IT LOOK EXACTLY HOW I WANTED. I HIGHLY SUGGEST YOU GIVE HER A TRY. I KNOW I WILL DEFINITELY BE BACK!*/}
                        <p>- MATEI LUCIAN</p>
                    </h2>
                </div>

                <section className={"section full-page"}>

                    <svg className="left-shapes" width="15vmin" height="90vmin" viewBox="10 0 105 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle id="Circle Filled" cx="25.2408" cy="562" r="3" fill={shapesColor}/>
                        <circle id="Circle Empty" cx="40.7408" cy="548.5" r="6" stroke={shapesColor}/>
                        <circle id="Circle Empty_2" cx="29.5" cy="499.5" r="4" stroke={shapesColor}/>
                        <circle id="Circle Filled_2" cx="17.5" cy="522.5" r="12.5" fill={shapesColor}/>
                        <g id="Big Square">
                            <line id="Upper Side" y1="-0.5" x2="30" y2="-0.5" transform="matrix(0.707107 0.707107 0.707107 -0.707107 7.2408 382)" stroke={shapesColor}/>
                            <line id="Lower Side" y1="-0.5" x2="30" y2="-0.5" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 6.2408 424)" stroke={shapesColor}/>
                        </g>
                        <rect id="Little Square" x="-0.298836" y="0.640856" width="11" height="11" transform="matrix(-0.939693 0.34202 0.34202 0.939693 24.3377 440.141)" stroke={shapesColor}/>
                        <rect id="Filled Square B" width="6" height="6" transform="matrix(-0.965926 -0.258819 -0.258819 0.965926 31.915 422.879)" fill={shapesColor}/>
                        <rect id="Filled Square A" width="3" height="3" transform="matrix(-0.819152 0.573576 0.573576 0.819152 23.1423 378)" fill={shapesColor}/>
                        <path id="Squiggle Small" d="M23.0101 310.046C24.3925 313.121 25.6006 312.804 27.9167 312.421C31.126 311.776 31.8288 313.394 32.8232 314.797" stroke={shapesColor}/>
                        <g id="Squiggle B">
                            <path id="Squiggle" d="M22.5049 333.29C25.7964 328.681 23.8597 327.853 20.5071 326.027C15.6772 323.618 17.4372 321.217 18.5093 318.763" stroke={shapesColor}/>
                            <path id="Squiggle_2" d="M26.6242 347.645C29.9157 343.037 27.979 342.209 24.6264 340.382C19.7964 337.974 21.5565 335.573 22.6286 333.119" stroke={shapesColor}/>
                        </g>
                        <g id="Squiggle D">
                            <path id="Squiggle_3" d="M22.2096 302.03C19.7288 300.213 19.6269 301.355 19.2771 303.342C18.8715 306.199 17.573 305.225 16.3446 304.653" stroke={shapesColor}/>
                            <path id="Squiggle_4" d="M27.9826 299.339C25.5017 297.522 25.3999 298.665 25.05 300.651C24.6444 303.508 23.3459 302.534 22.1175 301.962" stroke={shapesColor}/>
                            <path id="Squiggle_5" d="M33.5146 296.506C31.0337 294.688 30.9318 295.831 30.582 297.817C30.1764 300.674 28.8779 299.701 27.6495 299.128" stroke={shapesColor}/>
                        </g>
                        <g id="Squiggle A">
                            <path id="Squiggle_6" d="M17.8612 288.631C14.0623 289.867 14.3841 291.313 14.7287 294.057C15.3457 297.873 13.3487 298.495 11.5963 299.482" stroke={shapesColor}/>
                            <path id="Squiggle_7" d="M23.9847 277.825C20.1858 279.061 20.5076 280.506 20.8522 283.25C21.4692 287.067 19.4722 287.688 17.7197 288.676" stroke={shapesColor}/>
                        </g>
                        <circle id="Circle Filled_3" cx="25.2408" cy="246" r="3" fill={shapesColor}/>
                        <circle id="Circle Empty_3" cx="39.7408" cy="231.5" r="6" stroke={shapesColor}/>
                        <circle id="Circle Filled_4" cx="27.2408" cy="172" r="5" fill={shapesColor}/>
                        <path id="Big Circle" d="M0.740799 207C0.740799 208.989 0.674339 210.933 0.611305 212.777C0.573647 213.879 0.537212 214.944 0.516903 215.963C0.462086 218.711 0.523304 221.138 0.965752 223.156C1.40609 225.166 2.2142 226.726 3.62176 227.794C5.03597 228.868 7.12631 229.5 10.2408 229.5C22.6672 229.5 32.7408 219.426 32.7408 207C32.7408 194.574 22.6672 184.5 10.2408 184.5C7.12631 184.5 5.03597 185.132 3.62176 186.206C2.2142 187.274 1.40609 188.834 0.965752 190.844C0.523304 192.862 0.462086 195.289 0.516903 198.037C0.537212 199.056 0.573647 200.121 0.611305 201.223C0.674339 203.067 0.740799 205.011 0.740799 207Z" stroke={shapesColor}/>
                        <path id="Squiggle Small_2" d="M18.135 136.559C18.7768 139.275 19.7128 138.827 21.4791 138.178C23.9411 137.171 24.2606 138.603 24.8232 139.797" stroke={shapesColor}/>
                        <path id="Squiggle Small_3" d="M19.0222 128.626C16.2358 128.466 16.3984 129.491 16.5158 131.369C16.7779 134.016 15.3145 133.913 14.0094 134.111" stroke={shapesColor}/>
                        <path id="Little Triangle" d="M11.1055 31.7092L23.0521 40.3133L24.5301 25.6652L11.1055 31.7092Z" stroke={shapesColor}/>
                        <path id="Filled Triangle B" d="M24.9748 57.0593L31.5817 52.9243L24.6972 49.27L24.9748 57.0593Z" fill={shapesColor}/>
                        <path id="Filled Triangle A" d="M18 93.9459L24.9279 94.0962L21.535 100.138L18 93.9459Z" fill={shapesColor}/>
                        <path id="Filled Triangle A_2" d="M33.6083 101L33.941 105.289L30 103.564L33.6083 101Z" fill={shapesColor}/>
                        <path id="Big Triangle" d="M6.22964 73.5675L12.4284 57.9617L33.3839 84.4612L7.53087 88.4892L6.22964 88.1217L6.22964 73.5675Z" stroke={shapesColor}/>
                    </svg>
                    <svg className="right-shapes" width="15vmin" height="97.5vmin" viewBox="0 -10 100 640" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle id="Circle Empty" cx="99.5" cy="403.5" r="6" stroke={shapesColor}/>
                        <circle id="Circle Empty_2" cx="91.5" cy="357.5" r="3" stroke={shapesColor}/>
                        <circle id="Circle Filled" cx="82.5" cy="381.5" r="12.5" fill={shapesColor}/>
                        <path id="Little Triangle" d="M92.9926 266.416L81.046 257.812L79.568 272.46L92.9926 266.416Z" stroke={shapesColor}/>
                        <path id="Filled Triangle B" d="M92.1944 243.11L85.5874 247.245L92.4719 250.899L92.1944 243.11Z" fill={shapesColor}/>
                        <path id="Filled Triangle A" d="M83.7182 233.992L81.1126 232.683L83.493 231L83.7182 233.992Z" fill={shapesColor}/>
                        <path id="Little Triangle_2" d="M94.3035 309.253L108.928 278.895L75.3249 281.409L94.3035 309.253Z" fill={shapesColor}/>
                        <path id="Filled Triangle B_2" d="M80.2277 314.118L80.4436 320.176L85.5823 316.96L80.2277 314.118Z" stroke={shapesColor}/>
                        <path id="Squiggle C" d="M72.6192 163.563C74.2226 160.598 75.4043 161.002 77.6862 161.553C80.8398 162.43 81.659 160.869 82.7533 159.542" stroke={shapesColor}/>
                        <path id="Squiggle Small" d="M87.7969 194.076C88.6158 196.604 87.6269 196.574 85.8585 196.684C83.3429 196.752 83.7899 198.077 83.9201 199.293" stroke={shapesColor}/>
                        <path id="Squiggle Small_2" d="M92.6238 201.587C90.1919 200.516 90.8721 199.798 91.9664 198.404C93.5901 196.481 92.3031 195.933 91.3089 195.221" stroke={shapesColor}/>
                        <g id="Squiggle D">
                            <path id="Squiggle" d="M87.6272 187.101C89.5653 184.713 89.9539 185.793 90.7965 187.625C91.9141 190.285 92.923 189.014 93.9659 188.149" stroke={shapesColor}/>
                            <path id="Squiggle_2" d="M81.3603 185.964C83.2984 183.576 83.687 184.655 84.5296 186.488C85.6472 189.148 86.6561 187.877 87.699 187.012" stroke={shapesColor}/>
                            <path id="Squiggle_3" d="M75.2901 184.627C77.2283 182.24 77.6169 183.319 78.4595 185.151C79.5771 187.812 80.586 186.541 81.6289 185.675" stroke={shapesColor}/>
                        </g>
                        <g id="Squiggle B">
                            <path id="Squiggle_4" d="M82.9113 149.624C87.0295 146.41 87.4621 148.308 88.5282 151.595C89.8842 156.329 92.0349 154.611 94.145 153.566" stroke={shapesColor}/>
                            <path id="Squiggle_5" d="M71.8305 145.561C75.9487 142.347 76.3813 144.245 77.4473 147.532C78.8033 152.266 80.9541 150.548 83.0642 149.503" stroke={shapesColor}/>
                        </g>
                        <g id="Squiggle A">
                            <path id="Squiggle_6" d="M83.318 131.631C87.1169 132.867 86.7951 134.313 86.4505 137.057C85.8335 140.873 87.8305 141.495 89.583 142.482" stroke={shapesColor}/>
                            <path id="Squiggle_7" d="M77.1946 120.825C80.9935 122.061 80.6716 123.506 80.327 126.25C79.71 130.067 81.707 130.688 83.4595 131.676" stroke={shapesColor}/>
                        </g>
                        <path id="Semi Circle" d="M101 38C81.5 42 81 77.5 101 81" stroke={shapesColor}/>
                        <circle id="Circle Filled 2" r="2" transform="matrix(-1 0 0 1 89 27)" fill={shapesColor}/>
                        <circle id="Circle Filled_2" r="2.5" transform="matrix(-1 0 0 1 83.0981 90)" stroke={shapesColor}/>
                        <circle id="Circle Empty_3" r="6.5" transform="matrix(-1 0 0 1 68.5981 75.5)" fill={shapesColor}/>
                        <rect id="Little Square" x="0.300183" y="0.643787" width="10.8505" height="10.9803" transform="matrix(0.938111 0.346336 -0.337744 0.941238 74.217 485.934)" stroke={shapesColor}/>
                        <rect id="Filled Square B" width="5.92098" height="5.99436" transform="matrix(0.964994 -0.262273 0.255404 0.966834 84.8534 508.553)" fill={shapesColor}/>
                        <rect id="Filled Square B_2" width="18.0267" height="18.2501" transform="matrix(0.537075 0.843535 -0.847333 0.531062 95.3183 457.233)" fill={shapesColor}/>
                        <rect id="Filled Square A" x="0.123594" y="0.701004" width="3.21166" height="3" transform="matrix(0.815291 0.579051 -0.568103 0.822957 86.5192 444.053)" stroke={shapesColor}/>
                        <path id="Star 1" d="M79.0961 566.108L81.0655 568.127L81.3191 568.387L81.6448 568.226L84.1736 566.977L82.8619 569.474L82.693 569.796L82.9467 570.056L84.916 572.075L82.136 571.599L81.778 571.537L81.609 571.859L80.2974 574.356L79.8909 571.565L79.8385 571.205L79.4805 571.144L76.7005 570.668L79.2293 569.419L79.555 569.258L79.5026 568.899L79.0961 566.108Z" stroke={shapesColor}/>
                        <path id="Star 2" d="M89.7993 554.269L89.655 556.807L92.025 557.729L89.5659 558.377L89.4216 560.915L88.046 558.777L85.5869 559.424L87.1959 557.455L85.8203 555.316L88.1903 556.238L89.7993 554.269Z" fill={shapesColor}/>
                        <path id="Star 3" d="M86.7959 589.088L88.1976 591.17L90.6794 590.796L88.5975 592.198L88.9712 594.679L87.5695 592.598L85.0876 592.971L87.1696 591.569L86.7959 589.088Z" fill={shapesColor}/>
                    </svg>

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
