import React, {Component} from 'react';
import './Components.css';
import logo from '../assets/logo_small.png';

export class Header extends Component {
    render() {
        if (this.props.mobile) {
            return (
                <div className={"navbar"}>
                    <img src={logo} id={"nav-logo"}/>
                    <div id={"nav-buttons"}>
                        <button className={"nav-item"} onClick={() => {
                            console.log("mobile menu toggle")
                        }}>
                            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="20" y="25" width="60" height="8"/>
                                <rect x="20" y="46" width="60" height="8"/>
                                <rect x="20" y="67" width="60" height="8"/>
                            </svg>
                        </button>
                    </div>
                </div>
            )
        }
        return (
            <div className={"navbar"}>
                <img src={logo} id={"nav-logo"}/>
                <div id={"nav-buttons"}>
                    <button className={"nav-item scissor-button"} onClick={() => {
                        this.props.scrollCallback("top")
                    }}>Home</button>
                    <button className={"nav-item scissor-button"} onClick={() => {
                        this.props.scrollCallback("services")
                    }}>All Services</button>
                    {/*<button className={"nav-item scissor-button"} onClick={() => {*/}
                    {/*    this.props.setPageCallback("book")*/}
                    {/*}}>Book Appointment</button>*/}
                    <button className={"nav-item scissor-button"} onClick={() => {
                        this.props.scrollCallback("find")
                    }}>Find Us</button>
                </div>
            </div>
        );
    }
}