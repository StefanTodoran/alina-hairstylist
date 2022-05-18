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

                    <svg className="left-shapes" width="20vmin" height="80vmin" viewBox="5 0 100 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="Little Triangle" d="M12.1055 151.416L24.0521 142.812L25.5301 157.46L12.1055 151.416Z" stroke="#505D3F"/>
                        <path id="Filled Triangle B" d="M12.9748 124.11L19.5817 128.245L12.6972 131.899L12.9748 124.11Z" fill="#505D3F"/>
                        <path id="Filled Triangle A" d="M19 89.9915L21.6056 88.6834L19.2252 87L19 89.9915Z" fill="#505D3F"/>
                        <path id="Squiggle C" d="M29.7084 59.4061C30.5406 56.1392 29.398 55.6349 27.3473 54.4925C24.4342 52.9994 24.891 51.2961 24.9863 49.5789" stroke="#505D3F"/>
                        <g id="Squiggle B">
                            <path id="Squiggle" d="M22.1867 42.6236C18.0686 39.4101 17.636 41.3081 16.5699 44.5947C15.2139 49.3291 13.0632 47.6106 10.9531 46.5658" stroke="#505D3F"/>
                            <path id="Squiggle_2" d="M33.2676 38.5607C29.1494 35.3471 28.7168 37.2452 27.6508 40.5318C26.2948 45.2662 24.144 43.5477 22.0339 42.5029" stroke="#505D3F"/>
                        </g>
                        <g id="Squiggle A">
                            <path id="Squiggle_3" d="M21.7801 24.6309C17.9811 25.8668 18.303 27.3125 18.6476 30.0565C19.2646 33.8729 17.2676 34.4947 15.5151 35.4821" stroke="#505D3F"/>
                            <path id="Squiggle_4" d="M27.9035 13.8248C24.1046 15.0607 24.4265 16.5063 24.7711 19.2503C25.3881 23.0667 23.3911 23.6885 21.6386 24.6759" stroke="#505D3F"/>
                        </g>
                        <path id="Semi Circle" d="M4 201C24.7713 207.16 23.2135 250.28 4 257" stroke="#505D3F"/>
                        <circle id="Circle Filled 2" cx="18" cy="191" r="2" fill="#505D3F"/>
                        <circle id="Circle Filled" cx="22" cy="260" r="3" fill="#505D3F"/>
                        <circle id="Circle Empty" cx="36.5" cy="245.5" r="6" stroke="#505D3F"/>
                        <rect id="Little Square" x="-0.300183" y="0.643787" width="10.8505" height="10.9803" transform="matrix(-0.938111 0.346336 0.337744 0.941238 30.3178 341.142)" stroke="#505D3F"/>
                        <rect id="Filled Square B" width="5.92098" height="5.99436" transform="matrix(-0.964994 -0.262273 -0.255404 0.966834 20.2447 363.553)" fill="#505D3F"/>
                        <rect id="Filled Square B_2" width="18.0267" height="18.2501" transform="matrix(-0.537075 0.843535 0.847333 0.531062 9.77976 312.233)" fill="#505D3F"/>
                        <rect id="Filled Square A" x="-0.123594" y="0.701004" width="3.21166" height="3" transform="matrix(-0.815291 0.579051 0.568103 0.822957 18.3774 299.196)" stroke="#505D3F"/>
                        <line id="Line 1" x1="2.61589" y1="127.68" x2="22.6159" y2="103.68" stroke="#505D3F"/>
                        <line id="Line 2" x1="4.30982" y1="88.6076" x2="23.3098" y2="103.608" stroke="#505D3F"/>
                    </svg>
                    <svg className="right-shapes" width="20vmin" height="70vmin" viewBox="0 0 100 375" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Big Square">
                            <line id="Upper Side" x1="100.354" y1="273.354" x2="79.1404" y2="294.567" stroke="#505D3F"/>
                            <line id="Lower Side" x1="100.646" y1="315.354" x2="79.4332" y2="294.14" stroke="#505D3F"/>
                        </g>
                        <rect id="Little Square" x="83.4031" y="331.641" width="11" height="11" transform="rotate(20 83.4031 331.641)" stroke="#505D3F"/>
                        <rect id="Filled Square B" x="76.3258" y="313.879" width="6" height="6" transform="rotate(-15 76.3258 313.879)" fill="#505D3F"/>
                        <rect id="Filled Square A" x="85.0985" y="269" width="3" height="3" transform="rotate(35 85.0985 269)" fill="#505D3F"/>
                        <path id="Squiggle Small" d="M85.2307 201.046C83.8483 204.121 82.6402 203.804 80.3241 203.421C77.1148 202.776 76.412 204.394 75.4176 205.797" stroke="#505D3F"/>
                        <g id="Squiggle B">
                            <path id="Squiggle" d="M85.7359 224.29C82.4444 219.681 84.3811 218.853 87.7337 217.027C92.5636 214.618 90.8036 212.217 89.7315 209.763" stroke="#505D3F"/>
                            <path id="Squiggle_2" d="M81.6166 238.645C78.3251 234.037 80.2618 233.209 83.6144 231.382C88.4444 228.974 86.6843 226.573 85.6122 224.119" stroke="#505D3F"/>
                        </g>
                        <g id="Squiggle D">
                            <path id="Squiggle_3" d="M86.0312 193.03C88.512 191.213 88.6139 192.355 88.9637 194.342C89.3693 197.199 90.6678 196.225 91.8962 195.653" stroke="#505D3F"/>
                            <path id="Squiggle_4" d="M80.2582 190.339C82.7391 188.522 82.8409 189.665 83.1908 191.651C83.5964 194.508 84.8949 193.534 86.1233 192.962" stroke="#505D3F"/>
                            <path id="Squiggle_5" d="M74.7262 187.506C77.2071 185.688 77.309 186.831 77.6588 188.817C78.0644 191.674 79.3629 190.701 80.5913 190.128" stroke="#505D3F"/>
                        </g>
                        <g id="Squiggle A">
                            <path id="Squiggle_6" d="M90.3796 179.631C94.1785 180.867 93.8567 182.313 93.5121 185.057C92.8951 188.873 94.8921 189.495 96.6445 190.482" stroke="#505D3F"/>
                            <path id="Squiggle_7" d="M84.2561 168.825C88.055 170.061 87.7332 171.506 87.3886 174.25C86.7716 178.067 88.7686 178.688 90.5211 179.676" stroke="#505D3F"/>
                        </g>
                        <circle id="Circle Filled" r="3" transform="matrix(-1 0 0 1 83 137)" fill="#505D3F"/>
                        <circle id="Circle Empty" r="6" transform="matrix(-1 0 0 1 68.5 122.5)" stroke="#505D3F"/>
                        <circle id="Circle Filled_2" r="5" transform="matrix(-1 0 0 1 81 63)" fill="#505D3F"/>
                        <path id="Big Circle" d="M107.5 98C107.5 99.9887 107.566 101.933 107.629 103.777C107.667 104.879 107.704 105.944 107.724 106.963C107.779 109.711 107.717 112.138 107.275 114.156C106.835 116.166 106.027 117.726 104.619 118.794C103.205 119.868 101.114 120.5 98 120.5C85.5736 120.5 75.5 110.426 75.5 98C75.5 85.5736 85.5736 75.5 98 75.5C101.114 75.5 103.205 76.132 104.619 77.2057C106.027 78.2744 106.835 79.8343 107.275 81.8436C107.717 83.8624 107.779 86.2892 107.724 89.0374C107.704 90.0556 107.667 91.1214 107.629 92.2231C107.566 94.0671 107.5 96.0113 107.5 98Z" stroke="#505D3F"/>
                        <path id="Squiggle Small_2" d="M90.1058 27.5588C89.464 30.275 88.528 29.8266 86.7617 29.1779C84.2997 28.1711 83.9802 29.6028 83.4176 30.797" stroke="#505D3F"/>
                        <path id="Squiggle Small_3" d="M89.2186 19.626C92.005 19.4656 91.8424 20.4907 91.725 22.3687C91.4629 25.0156 92.9263 24.9132 94.2314 25.1114" stroke="#505D3F"/>
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
                        ALINA HAIRSTYLIST’S SERVICE IS UNMATCHED. THE CONFIDENCE OF A HAIRCUT CAN CHANGE EVERYTHING.
                        {/*I'M VERY PICKY WHEN IT COMES TO HAIR CUTS, BUT ALINA TOOK THE TIME TO UNDERSTAND MY HAIR AND MADE IT LOOK EXACTLY HOW I WANTED. I HIGHLY SUGGEST YOU GIVE HER A TRY. I KNOW I WILL DEFINITELY BE BACK!*/}
                        <p>- MATEI LUCIAN</p>
                    </h2>
                </div>

                <section className={"section full-page"}>

                    <svg className="left-shapes" width="20vmin" height="70vmin" viewBox="10 0 100 375" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Big Square">
                            <line id="Upper Side" y1="-0.5" x2="30" y2="-0.5" transform="matrix(0.707107 0.707107 0.707107 -0.707107 8.2408 273)" stroke="#505D3F"/>
                            <line id="Lower Side" y1="-0.5" x2="30" y2="-0.5" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 7.2408 315)" stroke="#505D3F"/>
                        </g>
                        <rect id="Little Square" x="-0.298836" y="0.640856" width="11" height="11" transform="matrix(-0.939693 0.34202 0.34202 0.939693 24.3377 331.141)" stroke="#505D3F"/>
                        <rect id="Filled Square B" width="6" height="6" transform="matrix(-0.965926 -0.258819 -0.258819 0.965926 31.915 313.879)" fill="#505D3F"/>
                        <rect id="Filled Square A" width="3" height="3" transform="matrix(-0.819152 0.573576 0.573576 0.819152 23.1423 269)" fill="#505D3F"/>
                        <path id="Squiggle Small" d="M23.0101 201.046C24.3925 204.121 25.6006 203.804 27.9167 203.421C31.126 202.776 31.8288 204.394 32.8232 205.797" stroke="#505D3F"/>
                        <g id="Squiggle B">
                            <path id="Squiggle" d="M22.5049 224.29C25.7964 219.681 23.8597 218.853 20.5071 217.027C15.6772 214.618 17.4372 212.217 18.5093 209.763" stroke="#505D3F"/>
                            <path id="Squiggle_2" d="M26.6242 238.645C29.9157 234.037 27.979 233.209 24.6264 231.382C19.7964 228.974 21.5565 226.573 22.6286 224.119" stroke="#505D3F"/>
                        </g>
                        <g id="Squiggle D">
                            <path id="Squiggle_3" d="M22.2096 193.03C19.7288 191.213 19.6269 192.355 19.2771 194.342C18.8715 197.199 17.573 196.225 16.3446 195.653" stroke="#505D3F"/>
                            <path id="Squiggle_4" d="M27.9826 190.339C25.5017 188.522 25.3999 189.665 25.05 191.651C24.6444 194.508 23.3459 193.534 22.1175 192.962" stroke="#505D3F"/>
                            <path id="Squiggle_5" d="M33.5146 187.506C31.0337 185.688 30.9318 186.831 30.582 188.817C30.1764 191.674 28.8779 190.701 27.6495 190.128" stroke="#505D3F"/>
                        </g>
                        <g id="Squiggle A">
                            <path id="Squiggle_6" d="M17.8612 179.631C14.0623 180.867 14.3841 182.313 14.7287 185.057C15.3457 188.873 13.3487 189.495 11.5963 190.482" stroke="#505D3F"/>
                            <path id="Squiggle_7" d="M23.9847 168.825C20.1858 170.061 20.5076 171.506 20.8522 174.25C21.4692 178.067 19.4722 178.688 17.7197 179.676" stroke="#505D3F"/>
                        </g>
                        <circle id="Circle Filled" cx="25.2408" cy="137" r="3" fill="#505D3F"/>
                        <circle id="Circle Empty" cx="39.7408" cy="122.5" r="6" stroke="#505D3F"/>
                        <circle id="Circle Filled_2" cx="27.2408" cy="63" r="5" fill="#505D3F"/>
                        <path id="Big Circle" d="M0.740799 98C0.740799 99.9887 0.674339 101.933 0.611305 103.777C0.573647 104.879 0.537212 105.944 0.516903 106.963C0.462086 109.711 0.523304 112.138 0.965752 114.156C1.40609 116.166 2.2142 117.726 3.62176 118.794C5.03597 119.868 7.12631 120.5 10.2408 120.5C22.6672 120.5 32.7408 110.426 32.7408 98C32.7408 85.5736 22.6672 75.5 10.2408 75.5C7.12631 75.5 5.03597 76.132 3.62176 77.2057C2.2142 78.2744 1.40609 79.8343 0.965752 81.8436C0.523304 83.8624 0.462086 86.2892 0.516903 89.0374C0.537212 90.0556 0.573647 91.1214 0.611305 92.2231C0.674339 94.0671 0.740799 96.0113 0.740799 98Z" stroke="#505D3F"/>
                        <path id="Squiggle Small_2" d="M18.135 27.5588C18.7768 30.275 19.7128 29.8266 21.4791 29.1779C23.9411 28.1711 24.2606 29.6028 24.8232 30.797" stroke="#505D3F"/>
                        <path id="Squiggle Small_3" d="M19.0222 19.626C16.2358 19.4656 16.3984 20.4907 16.5158 22.3687C16.7779 25.0156 15.3145 24.9132 14.0094 25.1114" stroke="#505D3F"/>
                    </svg>
                    <svg className="right-shapes" width="20vmin" height="80vmin" viewBox="5 0 100 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="Little Triangle" d="M92.9926 151.416L81.046 142.812L79.568 157.46L92.9926 151.416Z" stroke="#505D3F"/>
                        <path id="Filled Triangle B" d="M92.1233 124.11L85.5164 128.245L92.4009 131.899L92.1233 124.11Z" fill="#505D3F"/>
                        <path id="Filled Triangle A" d="M86.0981 89.9915L83.4925 88.6834L85.8729 87L86.0981 89.9915Z" fill="#505D3F"/>
                        <path id="Squiggle C" d="M75.3897 59.4061C74.5575 56.1392 75.7001 55.6349 77.7508 54.4925C80.6639 52.9994 80.2071 51.2961 80.1118 49.5789" stroke="#505D3F"/>
                        <g id="Squiggle B">
                            <path id="Squiggle" d="M82.9113 42.6236C87.0295 39.4101 87.4621 41.3081 88.5282 44.5947C89.8842 49.3291 92.0349 47.6106 94.145 46.5658" stroke="#505D3F"/>
                            <path id="Squiggle_2" d="M71.8305 38.5607C75.9487 35.3471 76.3813 37.2452 77.4473 40.5318C78.8033 45.2662 80.9541 43.5477 83.0642 42.5029" stroke="#505D3F"/>
                        </g>
                        <g id="Squiggle A">
                            <path id="Squiggle_3" d="M83.318 24.6309C87.1169 25.8668 86.7951 27.3125 86.4505 30.0565C85.8335 33.8729 87.8305 34.4947 89.583 35.4821" stroke="#505D3F"/>
                            <path id="Squiggle_4" d="M77.1946 13.8248C80.9935 15.0607 80.6716 16.5063 80.327 19.2503C79.71 23.0667 81.707 23.6885 83.4595 24.6759" stroke="#505D3F"/>
                        </g>
                        <path id="Semi Circle" d="M101.098 201C80.3268 207.16 81.8846 250.28 101.098 257" stroke="#505D3F"/>
                        <circle id="Circle Filled 2" r="2" transform="matrix(-1 0 0 1 87.0981 191)" fill="#505D3F"/>
                        <circle id="Circle Filled" r="3" transform="matrix(-1 0 0 1 83.0981 260)" fill="#505D3F"/>
                        <circle id="Circle Empty" r="6" transform="matrix(-1 0 0 1 68.5981 245.5)" stroke="#505D3F"/>
                        <rect id="Little Square" x="0.300183" y="0.643787" width="10.8505" height="10.9803" transform="matrix(0.938111 0.346336 -0.337744 0.941238 74.217 340.934)" stroke="#505D3F"/>
                        <rect id="Filled Square B" width="5.92098" height="5.99436" transform="matrix(0.964994 -0.262273 0.255404 0.966834 84.8534 363.553)" fill="#505D3F"/>
                        <rect id="Filled Square B_2" width="18.0267" height="18.2501" transform="matrix(0.537075 0.843535 -0.847333 0.531062 95.3183 312.233)" fill="#505D3F"/>
                        <rect id="Filled Square A" x="0.123594" y="0.701004" width="3.21166" height="3" transform="matrix(0.815291 0.579051 -0.568103 0.822957 86.5192 299.053)" stroke="#505D3F"/>
                        <line id="Line 1" y1="-0.5" x2="31.241" y2="-0.5" transform="matrix(-0.640184 -0.768221 -0.768221 0.640184 102.098 128)" stroke="#505D3F"/>
                        <line id="Line 2" y1="-0.5" x2="24.2074" y2="-0.5" transform="matrix(-0.784883 0.619644 0.619644 0.784883 101.098 89)" stroke="#505D3F"/>
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
