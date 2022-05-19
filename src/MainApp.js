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

  scrollTo = (where) => {
    switch (where) {
      case "top":
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        break;
      case "services":
        this.services.current.scrollIntoView();
        break;
      case "find":
        this.find.current.scrollIntoView();
        break;
      case "book":
        this.book.current.scrollIntoView();
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

          <div className="left-shapes">
            <svg width="20vmin" height="20vmin" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Circles 1">
                <path id="Semi Circle" d="M100.902 29C81.4019 33 80.9019 68.5 100.902 72" stroke="#fff"/>
                <circle id="Circle Filled 2" r="2" transform="matrix(-1 0 0 1 88.9019 18)" fill="#fff"/>
                <circle id="Circle Filled" r="2.5" transform="matrix(-1 0 0 1 83 81)" stroke="#fff"/>
                <circle id="Circle Empty" r="6.5" transform="matrix(-1 0 0 1 68.5 66.5)" fill="#fff"/>
              </g>
            </svg>
          </div>
          <div className="right-shapes">
            <svg width="20vmin" height="20vmin" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect id="Little Square" x="0.300183" y="0.643787" width="10.8505" height="10.9803"
                    transform="matrix(0.938111 0.346336 -0.337744 0.941238 75.2823 53.9339)" stroke="#fff"/>
              <rect id="Filled Square B" width="5.92098" height="5.99436"
                    transform="matrix(0.964994 -0.262273 0.255404 0.966834 85.9186 76.5529)" fill="#fff"/>
              <rect id="Filled Square B_2" width="18.0267" height="18.2501"
                    transform="matrix(0.537075 0.843535 -0.847333 0.531062 96.3836 25.2335)" fill="#fff"/>
              <rect id="Filled Square A" x="0.123594" y="0.701004" width="3.21166" height="3"
                    transform="matrix(0.815291 0.579051 -0.568103 0.822957 87.5844 12.0525)" stroke="#fff"/>
            </svg>
          </div>

          <div className={"main-background"}>
            <div className={"mbg1"}/>
            <div className={"mbg2"}/>
          </div>
          <h1>WELCOME&nbsp;TO<br/>ALINA&nbsp;HAIRSTYLIST</h1>
          {bookButton()}
        </div>

        <section className={"section"}>

          <div className="left-shapes">
            <svg width="20vmin" height="15vmin" viewBox="0 0 100 75" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id="Squiggle C"
                    d="M71.5789 57.5634C73.1822 54.5978 74.364 55.002 76.6459 55.5526C79.7995 56.4304 80.6186 54.8687 81.7129 53.5418"
                    stroke={shapesColor}/>
              <g id="Squiggle B">
                <path id="Squiggle"
                      d="M81.871 43.6236C85.9892 40.4101 86.4218 42.3081 87.4878 45.5947C88.8438 50.3291 90.9946 48.6106 93.1047 47.5658"
                      stroke={shapesColor}/>
                <path id="Squiggle_2"
                      d="M70.7902 39.5607C74.9083 36.3471 75.3409 38.2452 76.407 41.5318C77.763 46.2662 79.9138 44.5477 82.0238 43.5029"
                      stroke={shapesColor}/>
              </g>
              <g id="Squiggle A">
                <path id="Squiggle_3"
                      d="M82.2777 25.6309C86.0766 26.8668 85.7548 28.3125 85.4101 31.0565C84.7932 34.8729 86.7902 35.4947 88.5426 36.4821"
                      stroke={shapesColor}/>
                <path id="Squiggle_4"
                      d="M76.1542 14.8248C79.9531 16.0607 79.6313 17.5063 79.2867 20.2503C78.6697 24.0667 80.6667 24.6885 82.4191 25.6759"
                      stroke={shapesColor}/>
              </g>
            </svg>
            <svg width="20vmin" height="20vmin" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Triangles 2">
                <path id="Little Triangle" d="M97.1353 14.7092L85.1887 23.3133L83.7107 8.66523L97.1353 14.7092Z"
                      stroke={shapesColor}/>
                <path id="Filled Triangle B" d="M83.266 40.0593L76.6591 35.9243L83.5436 32.27L83.266 40.0593Z"
                      fill={shapesColor}/>
                <path id="Filled Triangle A" d="M90.2408 76.9459L83.3129 77.0962L86.7058 83.1383L90.2408 76.9459Z"
                      fill={shapesColor}/>
                <path id="Filled Triangle A_2" d="M74.6325 84L74.2998 88.289L78.2408 86.5642L74.6325 84Z"
                      fill={shapesColor}/>
                <path id="Big Triangle"
                      d="M102.011 56.5675L95.8124 40.9617L74.8568 67.4612L100.71 71.4892L102.011 71.1217L102.011 56.5675Z"
                      stroke={shapesColor}/>
              </g>
            </svg>
            <svg width="20vmin" height="20vmin" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Circles 4">
                <circle id="Circle Filled" r="3" transform="matrix(-1 0 0 1 83 88)" fill={shapesColor}/>
                <circle id="Circle Empty" r="6" transform="matrix(-1 0 0 1 68.5 73.5)" stroke={shapesColor}/>
                <circle id="Circle Filled_2" r="5" transform="matrix(-1 0 0 1 81 14)" fill={shapesColor}/>
                <path id="Big Circle"
                      d="M107.5 49C107.5 50.9887 107.566 52.9329 107.629 54.7769C107.667 55.8786 107.704 56.9444 107.724 57.9626C107.779 60.7108 107.717 63.1376 107.275 65.1564C106.835 67.1657 106.027 68.7256 104.619 69.7943C103.205 70.868 101.114 71.5 98 71.5C85.5736 71.5 75.5 61.4264 75.5 49C75.5 36.5736 85.5736 26.5 98 26.5C101.114 26.5 103.205 27.132 104.619 28.2057C106.027 29.2744 106.835 30.8343 107.275 32.8436C107.717 34.8624 107.779 37.2892 107.724 40.0374C107.704 41.0556 107.667 42.1214 107.629 43.2231C107.566 45.0671 107.5 47.0113 107.5 49Z"
                      stroke={shapesColor}/>
              </g>
            </svg>
            <svg width="20vmin" height="20vmin" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect id="Little Square" x="0.300183" y="0.643787" width="10.8505" height="10.9803"
                    transform="matrix(0.938111 0.346336 -0.337744 0.941238 75.2823 53.9339)" stroke={shapesColor}/>
              <rect id="Filled Square B" width="5.92098" height="5.99436"
                    transform="matrix(0.964994 -0.262273 0.255404 0.966834 85.9186 76.5529)" fill={shapesColor}/>
              <rect id="Filled Square B_2" width="18.0267" height="18.2501"
                    transform="matrix(0.537075 0.843535 -0.847333 0.531062 96.3836 25.2335)" fill={shapesColor}/>
              <rect id="Filled Square A" x="0.123594" y="0.701004" width="3.21166" height="3"
                    transform="matrix(0.815291 0.579051 -0.568103 0.822957 87.5844 12.0525)" stroke={shapesColor}/>
            </svg>
          </div>
          <div className="right-shapes">
            <svg width="20vmin" height="10vmin" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Small Squiggles">
                <path id="Squiggle Small"
                      d="M89.1058 30.5588C88.464 33.275 87.528 32.8266 85.7617 32.1779C83.2997 31.1711 82.9802 32.6028 82.4176 33.797"
                      stroke={shapesColor}/>
                <path id="Squiggle Small_2"
                      d="M88.2186 22.626C91.005 22.4656 90.8424 23.4907 90.725 25.3687C90.4629 28.0156 91.9263 27.9132 93.2314 28.1114"
                      stroke={shapesColor}/>
              </g>
            </svg>
            <svg width="20vmin" height="20vmin" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Circles 4">
                <circle id="Circle Filled" r="3" transform="matrix(-1 0 0 1 83 88)" fill={shapesColor}/>
                <circle id="Circle Empty" r="6" transform="matrix(-1 0 0 1 68.5 73.5)" stroke={shapesColor}/>
                <circle id="Circle Filled_2" r="5" transform="matrix(-1 0 0 1 81 14)" fill={shapesColor}/>
                <path id="Big Circle"
                      d="M107.5 49C107.5 50.9887 107.566 52.9329 107.629 54.7769C107.667 55.8786 107.704 56.9444 107.724 57.9626C107.779 60.7108 107.717 63.1376 107.275 65.1564C106.835 67.1657 106.027 68.7256 104.619 69.7943C103.205 70.868 101.114 71.5 98 71.5C85.5736 71.5 75.5 61.4264 75.5 49C75.5 36.5736 85.5736 26.5 98 26.5C101.114 26.5 103.205 27.132 104.619 28.2057C106.027 29.2744 106.835 30.8343 107.275 32.8436C107.717 34.8624 107.779 37.2892 107.724 40.0374C107.704 41.0556 107.667 42.1214 107.629 43.2231C107.566 45.0671 107.5 47.0113 107.5 49Z"
                      stroke={shapesColor}/>
              </g>
            </svg>
            <svg width="20vmin" height="20vmin" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Squiggles">
                <path id="Squiggle Small"
                      d="M85.2307 48.0458C83.8483 51.1206 82.6402 50.8039 80.3241 50.4214C77.1148 49.7764 76.412 51.3937 75.4176 52.797"
                      stroke={shapesColor}/>
                <g id="Squiggle B">
                  <path id="Squiggle"
                        d="M85.7359 71.2898C82.4444 66.681 84.3811 65.853 87.7337 64.0266C92.5636 61.6182 90.8036 59.2174 89.7315 56.7633"
                        stroke={shapesColor}/>
                  <path id="Squiggle_2"
                        d="M81.6166 85.6454C78.3251 81.0366 80.2618 80.2087 83.6144 78.3822C88.4444 75.9739 86.6843 73.573 85.6122 71.119"
                        stroke={shapesColor}/>
                </g>
                <g id="Squiggle D">
                  <path id="Squiggle_3"
                        d="M86.0312 40.0304C88.512 38.2127 88.6139 39.3554 88.9637 41.3417C89.3693 44.1986 90.6678 43.2253 91.8962 42.6529"
                        stroke={shapesColor}/>
                  <path id="Squiggle_4"
                        d="M80.2582 37.3395C82.7391 35.5218 82.8409 36.6645 83.1908 38.6508C83.5964 41.5077 84.8949 40.5344 86.1233 39.962"
                        stroke={shapesColor}/>
                  <path id="Squiggle_5"
                        d="M74.7262 34.5058C77.2071 32.6882 77.309 33.8309 77.6588 35.8171C78.0644 38.674 79.3629 37.7008 80.5913 37.1284"
                        stroke={shapesColor}/>
                </g>
                <g id="Squiggle A">
                  <path id="Squiggle_6"
                        d="M90.3796 26.6309C94.1785 27.8668 93.8567 29.3125 93.5121 32.0565C92.8951 35.8729 94.8921 36.4947 96.6445 37.4821"
                        stroke={shapesColor}/>
                  <path id="Squiggle_7"
                        d="M84.2561 15.8248C88.055 17.0607 87.7332 18.5063 87.3886 21.2503C86.7716 25.0667 88.7686 25.6885 90.5211 26.6759"
                        stroke={shapesColor}/>
                </g>
              </g>
            </svg>
            <svg width="20vmin" height="20vmin" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Squares">
                <g id="Big Square">
                  <line id="Upper Side" x1="101.354" y1="13.3536" x2="80.1404" y2="34.5668" stroke={shapesColor}/>
                  <line id="Lower Side" x1="101.646" y1="55.3536" x2="80.4332" y2="34.1404" stroke={shapesColor}/>
                </g>
                <rect id="Little Square" x="83.4031" y="71.6409" width="11" height="11"
                      transform="rotate(20 83.4031 71.6409)" stroke={shapesColor}/>
                <rect id="Filled Square B" x="76.3258" y="53.8787" width="6" height="6"
                      transform="rotate(-15 76.3258 53.8787)" fill={shapesColor}/>
                <rect id="Filled Square A" x="85.0985" y="9" width="3" height="3" transform="rotate(35 85.0985 9)"
                      fill={shapesColor}/>
              </g>
            </svg>
          </div>

          <h2>LOCATION & HOURS</h2>
          <section className={"dynamic-grid"}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2679.5362862632987!2d-122.37991558417392!3d47.80982408190993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54901afa43eb4b77%3A0x40978f944a4d16a7!2s130%205th%20Ave%20S%2C%20Edmonds%2C%20WA%2098020!5e0!3m2!1sen!2sus!4v1649446313086!5m2!1sen!2sus"
              width="100%" height="100%" allowFullScreen="" loading="lazy" id={"map"}
              referrerPolicy="no-referrer-when-downgrade"/>
            <p id={"loc-and-hours"}>130 5th Ave S<br/>
              Edmonds, Washington 98020<br/><br/>
              <b><a
                href={"https://www.google.com/maps/dir/?api=1&destination=130%205th%20Ave%20S%20Edmonds%20WA%2098020"}
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
                <a href={"https://www.instagram.com/invites/contact/?i=w1cqx4msy1f0&utm_content=nrbpeaj"}
                   target={"_blank"}>
                  <svg className={"media-icon"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_0_1)">
                      <path
                        d="M12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C20.102 2.381 21.621 3.924 21.769 7.152C21.827 8.417 21.838 8.797 21.838 12.001C21.838 15.206 21.826 15.585 21.769 16.85C21.62 20.075 20.105 21.621 16.85 21.769C15.584 21.827 15.206 21.839 12 21.839C8.796 21.839 8.416 21.827 7.151 21.769C3.891 21.62 2.38 20.07 2.232 16.849C2.174 15.584 2.162 15.205 2.162 12C2.162 8.796 2.175 8.417 2.232 7.151C2.381 3.924 3.896 2.38 7.151 2.232C8.417 2.175 8.796 2.163 12 2.163V2.163ZM12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273 2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014 15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052 23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986 16.948 23.928C21.302 23.728 23.73 21.31 23.927 16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.333 23.928 7.053C23.732 2.699 21.311 0.273 16.949 0.073C15.668 0.014 15.259 0 12 0V0ZM12 5.838C8.597 5.838 5.838 8.597 5.838 12C5.838 15.403 8.597 18.163 12 18.163C15.403 18.163 18.162 15.404 18.162 12C18.162 8.597 15.403 5.838 12 5.838ZM12 16C9.791 16 8 14.21 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.21 14.209 16 12 16ZM18.406 4.155C17.61 4.155 16.965 4.8 16.965 5.595C16.965 6.39 17.61 7.035 18.406 7.035C19.201 7.035 19.845 6.39 19.845 5.595C19.845 4.8 19.201 4.155 18.406 4.155Z"
                        fill="black"/>
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
                    <path
                      d="M20.0206 20.8588H3.97965C1.88666 20.8588 0.184125 19.1562 0.184125 17.0632V6.9365C0.184125 4.84378 1.88692 3.14098 3.97965 3.14098H20.0206C22.1133 3.14098 23.8159 4.84378 23.8159 6.9365V17.0632C23.8159 19.1562 22.1133 20.8588 20.0206 20.8588ZM3.97965 4.25089C2.49872 4.25089 1.29403 5.45558 1.29403 6.9365V17.0632C1.29403 18.5442 2.49872 19.7491 3.97965 19.7491H20.0206C21.5015 19.7491 22.7062 18.5442 22.7062 17.0632V6.9365C22.7062 5.45558 21.5015 4.25089 20.0206 4.25089H3.97965Z"
                      fill="#1D1D1B"/>
                    <path
                      d="M3.084 6.98928C5.92086 9.75367 8.75772 12.5178 11.5946 15.2822C12.1234 15.7974 12.935 14.9876 12.4054 14.4714C9.56856 11.7072 6.7317 8.94284 3.89483 6.17871C3.36601 5.66328 2.55439 6.47332 3.084 6.98928Z"
                      fill="#1D1D1B"/>
                    <path
                      d="M12.4054 15.2822C15.2423 12.5181 18.0791 9.75367 20.916 6.98954C21.4453 6.47358 20.6343 5.66328 20.1052 6.17871C17.2683 8.94284 14.4314 11.7072 11.5946 14.4714C11.0652 14.9873 11.8763 15.7976 12.4054 15.2822Z"
                      fill="#1D1D1B"/>
                    <path
                      d="M20.8847 17.2389C18.9971 15.4487 17.1092 13.6587 15.2215 11.8685C14.6861 11.3609 13.874 12.1702 14.4107 12.6793C16.2984 14.4695 18.1863 16.2595 20.0739 18.0497C20.6093 18.5573 21.4215 17.7478 20.8847 17.2389Z"
                      fill="#1D1D1B"/>
                    <path
                      d="M3.97728 18.0495C5.86494 16.2592 7.75285 14.4693 9.6405 12.679C10.1769 12.1701 9.36532 11.3604 8.82967 11.8682C6.94202 13.6584 5.0541 15.4484 3.16645 17.2386C2.63001 17.7475 3.44163 18.5576 3.97728 18.0495Z"
                      fill="#1D1D1B"/>
                  </svg>
                </a>
                <a href={"https://www.facebook.com/alinahairstylistedmonds/"} target={"_blank"}>
                  <svg className={"media-icon"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_0_1)">
                      <path
                        d="M22.675 0H1.325C0.593 0 0 0.593 0 1.325V22.676C0 23.407 0.593 24 1.325 24H12.82V14.706H9.692V11.084H12.82V8.413C12.82 5.313 14.713 3.625 17.479 3.625C18.804 3.625 19.942 3.724 20.274 3.768V7.008L18.356 7.009C16.852 7.009 16.561 7.724 16.561 8.772V11.085H20.148L19.681 14.707H16.561V24H22.677C23.407 24 24 23.407 24 22.675V1.325C24 0.593 23.407 0 22.675 0V0Z"
                        fill="black"/>
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
          <div className="left-shapes">
            <svg width="20vmin" height="20vmin" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Stars">
                <path id="Star 1"
                      d="M78.0961 41.1079L80.0655 43.1269L80.3191 43.387L80.6448 43.2261L83.1736 41.977L81.8619 44.4739L81.693 44.7955L81.9467 45.0556L83.916 47.0746L81.136 46.5987L80.778 46.5374L80.609 46.859L79.2974 49.3559L78.8909 46.5649L78.8385 46.2054L78.4805 46.1442L75.7005 45.6683L78.2293 44.4192L78.555 44.2584L78.5026 43.8989L78.0961 41.1079Z"
                      stroke="#fff"/>
                <path id="Star 2"
                      d="M88.7993 29.2686L88.655 31.8074L91.025 32.7292L88.5659 33.3765L88.4216 35.9153L87.046 33.7766L84.5869 34.4239L86.1959 32.4548L84.8203 30.3161L87.1903 31.2378L88.7993 29.2686Z"
                      fill="#fff"/>
                <path id="Star 3"
                      d="M85.7959 64.0876L87.1976 66.1696L89.6794 65.7959L87.5975 67.1976L87.9712 69.6794L86.5695 67.5975L84.0876 67.9712L86.1696 66.5695L85.7959 64.0876Z"
                      fill="#fff"/>
              </g>
            </svg>
            <svg width="20vmin" height="20vmin" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Circles 3">
                <circle id="Circle Filled" r="3" transform="matrix(-1 0 0 1 83 80)" fill="#fff"/>
                <circle id="Circle Empty" r="6" transform="matrix(-1 0 0 1 67.5 66.5)" stroke="#fff"/>
                <circle id="Circle Empty_2" r="4" transform="matrix(-1 0 0 1 78.7408 17.5)" stroke="#fff"/>
                <circle id="Circle Filled_2" r="12.5" transform="matrix(-1 0 0 1 90.7408 40.5)" fill="#fff"/>
              </g>
            </svg>
          </div>
          <div className="right-shapes">
            <svg width="20vmin" height="10vmin" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Small Squiggles">
                <path id="Squiggle Small"
                      d="M89.1058 30.5588C88.464 33.275 87.528 32.8266 85.7617 32.1779C83.2997 31.1711 82.9802 32.6028 82.4176 33.797"
                      stroke="#fff"/>
                <path id="Squiggle Small_2"
                      d="M88.2186 22.626C91.005 22.4656 90.8424 23.4907 90.725 25.3687C90.4629 28.0156 91.9263 27.9132 93.2314 28.1114"
                      stroke="#fff"/>
              </g>
            </svg>
            <svg width="20vmin" height="20vmin" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id="Little Triangle" d="M94.0196 39.4159L82.0731 30.8119L80.595 45.4599L94.0196 39.4159Z"
                    stroke="#fff"/>
              <path id="Filled Triangle B" d="M93.2214 16.1098L86.6145 20.2448L93.499 23.8991L93.2214 16.1098Z"
                    fill="#fff"/>
              <path id="Filled Triangle A" d="M84.7452 6.99153L82.1397 5.68344L84.52 4L84.7452 6.99153Z"
                    fill="#fff"/>
              <path id="Little Triangle_2" d="M95.3306 82.253L109.955 51.8949L76.352 54.4087L95.3306 82.253Z"
                    fill="#fff"/>
              <path id="Filled Triangle B_2" d="M81.2548 87.1177L81.4707 93.176L86.6094 89.9599L81.2548 87.1177Z"
                    stroke="#fff"/>
            </svg>
          </div>

          <div className={"mbg1"}/>
          <div className={"mbg2"}/>
          <h2>
            <br/>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" id="quote">
              <path
                d="M7 19.5026C7 10.5026 12.5296 6.8889 24 7.0026V11.0026C20.3754 13.5189 18.871 15.1832 19 19.5026H24V42.5026H7C7 42.5026 7 28.5026 7 19.5026Z"
                fill="whitesmoke"/>
              <path
                d="M26 19.5026C26 10.5026 31.5296 6.8889 43 7.0026V11.0026C39.3754 13.5189 37.871 15.1832 38 19.5026H43V42.5026H26C26 42.5026 26 28.5026 26 19.5026Z"
                fill="whitesmoke"/>
            </svg>
            <br/>
            ALINA’S SERVICE IS UNMATCHED. THE CONFIDENCE OF A GOOD HAIRCUT CAN CHANGE EVERYTHING.
            {/*I'M VERY PICKY WHEN IT COMES TO HAIR CUTS, BUT ALINA TOOK THE TIME TO UNDERSTAND MY HAIR AND MADE IT LOOK EXACTLY HOW I WANTED. I HIGHLY SUGGEST YOU GIVE HER A TRY. I KNOW I WILL DEFINITELY BE BACK!*/}
            <p>- MATEI LUCIAN</p>
          </h2>
        </div>

        <section className={"section full-page"}>

          <div className="left-shapes">
            <svg width="20vmin" height="20vmin" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Triangles 2">
                <path id="Little Triangle" d="M97.1353 14.7092L85.1887 23.3133L83.7107 8.66523L97.1353 14.7092Z"
                      stroke={shapesColor}/>
                <path id="Filled Triangle B" d="M83.266 40.0593L76.6591 35.9243L83.5436 32.27L83.266 40.0593Z"
                      fill={shapesColor}/>
                <path id="Filled Triangle A" d="M90.2408 76.9459L83.3129 77.0962L86.7058 83.1383L90.2408 76.9459Z"
                      fill={shapesColor}/>
                <path id="Filled Triangle A_2" d="M74.6325 84L74.2998 88.289L78.2408 86.5642L74.6325 84Z"
                      fill={shapesColor}/>
                <path id="Big Triangle"
                      d="M102.011 56.5675L95.8124 40.9617L74.8568 67.4612L100.71 71.4892L102.011 71.1217L102.011 56.5675Z"
                      stroke={shapesColor}/>
              </g>
            </svg>
            <svg width="20vmin" height="10vmin" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Small Squiggles">
                <path id="Squiggle Small"
                      d="M89.1058 30.5588C88.464 33.275 87.528 32.8266 85.7617 32.1779C83.2997 31.1711 82.9802 32.6028 82.4176 33.797"
                      stroke={shapesColor}/>
                <path id="Squiggle Small_2"
                      d="M88.2186 22.626C91.005 22.4656 90.8424 23.4907 90.725 25.3687C90.4629 28.0156 91.9263 27.9132 93.2314 28.1114"
                      stroke={shapesColor}/>
              </g>
            </svg>
            <svg width="20vmin" height="20vmin" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Circles 4">
                <circle id="Circle Filled" r="3" transform="matrix(-1 0 0 1 83 88)" fill={shapesColor}/>
                <circle id="Circle Empty" r="6" transform="matrix(-1 0 0 1 68.5 73.5)" stroke={shapesColor}/>
                <circle id="Circle Filled_2" r="5" transform="matrix(-1 0 0 1 81 14)" fill={shapesColor}/>
                <path id="Big Circle"
                      d="M107.5 49C107.5 50.9887 107.566 52.9329 107.629 54.7769C107.667 55.8786 107.704 56.9444 107.724 57.9626C107.779 60.7108 107.717 63.1376 107.275 65.1564C106.835 67.1657 106.027 68.7256 104.619 69.7943C103.205 70.868 101.114 71.5 98 71.5C85.5736 71.5 75.5 61.4264 75.5 49C75.5 36.5736 85.5736 26.5 98 26.5C101.114 26.5 103.205 27.132 104.619 28.2057C106.027 29.2744 106.835 30.8343 107.275 32.8436C107.717 34.8624 107.779 37.2892 107.724 40.0374C107.704 41.0556 107.667 42.1214 107.629 43.2231C107.566 45.0671 107.5 47.0113 107.5 49Z"
                      stroke={shapesColor}/>
              </g>
            </svg>
            <svg width="20vmin" height="20vmin" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Squiggles">
                <path id="Squiggle Small"
                      d="M85.2307 48.0458C83.8483 51.1206 82.6402 50.8039 80.3241 50.4214C77.1148 49.7764 76.412 51.3937 75.4176 52.797"
                      stroke={shapesColor}/>
                <g id="Squiggle B">
                  <path id="Squiggle"
                        d="M85.7359 71.2898C82.4444 66.681 84.3811 65.853 87.7337 64.0266C92.5636 61.6182 90.8036 59.2174 89.7315 56.7633"
                        stroke={shapesColor}/>
                  <path id="Squiggle_2"
                        d="M81.6166 85.6454C78.3251 81.0366 80.2618 80.2087 83.6144 78.3822C88.4444 75.9739 86.6843 73.573 85.6122 71.119"
                        stroke={shapesColor}/>
                </g>
                <g id="Squiggle D">
                  <path id="Squiggle_3"
                        d="M86.0312 40.0304C88.512 38.2127 88.6139 39.3554 88.9637 41.3417C89.3693 44.1986 90.6678 43.2253 91.8962 42.6529"
                        stroke={shapesColor}/>
                  <path id="Squiggle_4"
                        d="M80.2582 37.3395C82.7391 35.5218 82.8409 36.6645 83.1908 38.6508C83.5964 41.5077 84.8949 40.5344 86.1233 39.962"
                        stroke={shapesColor}/>
                  <path id="Squiggle_5"
                        d="M74.7262 34.5058C77.2071 32.6882 77.309 33.8309 77.6588 35.8171C78.0644 38.674 79.3629 37.7008 80.5913 37.1284"
                        stroke={shapesColor}/>
                </g>
                <g id="Squiggle A">
                  <path id="Squiggle_6"
                        d="M90.3796 26.6309C94.1785 27.8668 93.8567 29.3125 93.5121 32.0565C92.8951 35.8729 94.8921 36.4947 96.6445 37.4821"
                        stroke={shapesColor}/>
                  <path id="Squiggle_7"
                        d="M84.2561 15.8248C88.055 17.0607 87.7332 18.5063 87.3886 21.2503C86.7716 25.0667 88.7686 25.6885 90.5211 26.6759"
                        stroke={shapesColor}/>
                </g>
              </g>
            </svg>
            <svg width="20vmin" height="20vmin" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Squares">
                <g id="Big Square">
                  <line id="Upper Side" x1="101.354" y1="13.3536" x2="80.1404" y2="34.5668" stroke={shapesColor}/>
                  <line id="Lower Side" x1="101.646" y1="55.3536" x2="80.4332" y2="34.1404" stroke={shapesColor}/>
                </g>
                <rect id="Little Square" x="83.4031" y="71.6409" width="11" height="11"
                      transform="rotate(20 83.4031 71.6409)" stroke={shapesColor}/>
                <rect id="Filled Square B" x="76.3258" y="53.8787" width="6" height="6"
                      transform="rotate(-15 76.3258 53.8787)" fill={shapesColor}/>
                <rect id="Filled Square A" x="85.0985" y="9" width="3" height="3" transform="rotate(35 85.0985 9)"
                      fill={shapesColor}/>
              </g>
            </svg>
            <svg width="20vmin" height="20vmin" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Circles 3">
                <circle id="Circle Filled" r="3" transform="matrix(-1 0 0 1 83 80)" fill={shapesColor}/>
                <circle id="Circle Empty" r="6" transform="matrix(-1 0 0 1 67.5 66.5)" stroke={shapesColor}/>
                <circle id="Circle Empty_2" r="4" transform="matrix(-1 0 0 1 78.7408 17.5)" stroke={shapesColor}/>
                <circle id="Circle Filled_2" r="12.5" transform="matrix(-1 0 0 1 90.7408 40.5)" fill={shapesColor}/>
              </g>
            </svg>
          </div>
          <div className="right-shapes">
            <svg width="20vmin" height="20vmin" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Circles 4">
                <circle id="Circle Filled" r="3" transform="matrix(-1 0 0 1 83 88)" fill={shapesColor}/>
                <circle id="Circle Empty" r="6" transform="matrix(-1 0 0 1 68.5 73.5)" stroke={shapesColor}/>
                <circle id="Circle Filled_2" r="5" transform="matrix(-1 0 0 1 81 14)" fill={shapesColor}/>
                <path id="Big Circle"
                      d="M107.5 49C107.5 50.9887 107.566 52.9329 107.629 54.7769C107.667 55.8786 107.704 56.9444 107.724 57.9626C107.779 60.7108 107.717 63.1376 107.275 65.1564C106.835 67.1657 106.027 68.7256 104.619 69.7943C103.205 70.868 101.114 71.5 98 71.5C85.5736 71.5 75.5 61.4264 75.5 49C75.5 36.5736 85.5736 26.5 98 26.5C101.114 26.5 103.205 27.132 104.619 28.2057C106.027 29.2744 106.835 30.8343 107.275 32.8436C107.717 34.8624 107.779 37.2892 107.724 40.0374C107.704 41.0556 107.667 42.1214 107.629 43.2231C107.566 45.0671 107.5 47.0113 107.5 49Z"
                      stroke={shapesColor}/>
              </g>
            </svg>
            <svg width="20vmin" height="20vmin" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Squiggles">
                <path id="Squiggle Small"
                      d="M85.2307 48.0458C83.8483 51.1206 82.6402 50.8039 80.3241 50.4214C77.1148 49.7764 76.412 51.3937 75.4176 52.797"
                      stroke={shapesColor}/>
                <g id="Squiggle B">
                  <path id="Squiggle"
                        d="M85.7359 71.2898C82.4444 66.681 84.3811 65.853 87.7337 64.0266C92.5636 61.6182 90.8036 59.2174 89.7315 56.7633"
                        stroke={shapesColor}/>
                  <path id="Squiggle_2"
                        d="M81.6166 85.6454C78.3251 81.0366 80.2618 80.2087 83.6144 78.3822C88.4444 75.9739 86.6843 73.573 85.6122 71.119"
                        stroke={shapesColor}/>
                </g>
                <g id="Squiggle D">
                  <path id="Squiggle_3"
                        d="M86.0312 40.0304C88.512 38.2127 88.6139 39.3554 88.9637 41.3417C89.3693 44.1986 90.6678 43.2253 91.8962 42.6529"
                        stroke={shapesColor}/>
                  <path id="Squiggle_4"
                        d="M80.2582 37.3395C82.7391 35.5218 82.8409 36.6645 83.1908 38.6508C83.5964 41.5077 84.8949 40.5344 86.1233 39.962"
                        stroke={shapesColor}/>
                  <path id="Squiggle_5"
                        d="M74.7262 34.5058C77.2071 32.6882 77.309 33.8309 77.6588 35.8171C78.0644 38.674 79.3629 37.7008 80.5913 37.1284"
                        stroke={shapesColor}/>
                </g>
                <g id="Squiggle A">
                  <path id="Squiggle_6"
                        d="M90.3796 26.6309C94.1785 27.8668 93.8567 29.3125 93.5121 32.0565C92.8951 35.8729 94.8921 36.4947 96.6445 37.4821"
                        stroke={shapesColor}/>
                  <path id="Squiggle_7"
                        d="M84.2561 15.8248C88.055 17.0607 87.7332 18.5063 87.3886 21.2503C86.7716 25.0667 88.7686 25.6885 90.5211 26.6759"
                        stroke={shapesColor}/>
                </g>
              </g>
            </svg>
            <svg width="20vmin" height="20vmin" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id="Little Triangle" d="M94.0196 39.4159L82.0731 30.8119L80.595 45.4599L94.0196 39.4159Z"
                    stroke={shapesColor}/>
              <path id="Filled Triangle B" d="M93.2214 16.1098L86.6145 20.2448L93.499 23.8991L93.2214 16.1098Z"
                    fill={shapesColor}/>
              <path id="Filled Triangle A" d="M84.7452 6.99153L82.1397 5.68344L84.52 4L84.7452 6.99153Z"
                    fill={shapesColor}/>
              <path id="Little Triangle_2" d="M95.3306 82.253L109.955 51.8949L76.352 54.4087L95.3306 82.253Z"
                    fill={shapesColor}/>
              <path id="Filled Triangle B_2" d="M81.2548 87.1177L81.4707 93.176L86.6094 89.9599L81.2548 87.1177Z"
                    stroke={shapesColor}/>
            </svg>
            <svg width="20vmin" height="20vmin" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Circles 2">
                <circle id="Circle Empty" cx="97.5" cy="71.5" r="6" stroke={shapesColor}/>
                <circle id="Circle Empty_2" cx="89.5" cy="25.5" r="3" stroke={shapesColor}/>
                <circle id="Circle Filled" cx="80.5" cy="49.5" r="12.5" fill={shapesColor}/>
              </g>
            </svg>
            <svg width="20vmin" height="20vmin" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect id="Little Square" x="0.300183" y="0.643787" width="10.8505" height="10.9803"
                    transform="matrix(0.938111 0.346336 -0.337744 0.941238 75.2823 53.9339)" stroke={shapesColor}/>
              <rect id="Filled Square B" width="5.92098" height="5.99436"
                    transform="matrix(0.964994 -0.262273 0.255404 0.966834 85.9186 76.5529)" fill={shapesColor}/>
              <rect id="Filled Square B_2" width="18.0267" height="18.2501"
                    transform="matrix(0.537075 0.843535 -0.847333 0.531062 96.3836 25.2335)" fill={shapesColor}/>
              <rect id="Filled Square A" x="0.123594" y="0.701004" width="3.21166" height="3"
                    transform="matrix(0.815291 0.579051 -0.568103 0.822957 87.5844 12.0525)" stroke={shapesColor}/>
            </svg>
            <svg width="20vmin" height="20vmin" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Stars">
                <path id="Star 1"
                      d="M78.0961 41.1079L80.0655 43.1269L80.3191 43.387L80.6448 43.2261L83.1736 41.977L81.8619 44.4739L81.693 44.7955L81.9467 45.0556L83.916 47.0746L81.136 46.5987L80.778 46.5374L80.609 46.859L79.2974 49.3559L78.8909 46.5649L78.8385 46.2054L78.4805 46.1442L75.7005 45.6683L78.2293 44.4192L78.555 44.2584L78.5026 43.8989L78.0961 41.1079Z"
                      stroke={shapesColor}/>
                <path id="Star 2"
                      d="M88.7993 29.2686L88.655 31.8074L91.025 32.7292L88.5659 33.3765L88.4216 35.9153L87.046 33.7766L84.5869 34.4239L86.1959 32.4548L84.8203 30.3161L87.1903 31.2378L88.7993 29.2686Z"
                      fill={shapesColor}/>
                <path id="Star 3"
                      d="M85.7959 64.0876L87.1976 66.1696L89.6794 65.7959L87.5975 67.1976L87.9712 69.6794L86.5695 67.5975L84.0876 67.9712L86.1696 66.5695L85.7959 64.0876Z"
                      fill={shapesColor}/>
              </g>
            </svg>
          </div>

          <h2>FIND US</h2>
          <div ref={this.find} style={{position: "absolute", top: "-8rem"}}/>
          {/* No clue why the above is needed, for some reason this specific ref isn't scrolled to properly despite being to different... */}
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
              <a href={"https://www.google.com/maps/dir/?api=1&destination=130%205th%20Ave%20S%20Edmonds%20WA%2098020"}
                 target={"_blank"}>
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
