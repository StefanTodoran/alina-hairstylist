import React, {Component} from 'react';
import './Components.css';
import './Grid.css';

export class Gallery extends Component {
    render() {
        return (
            <section className={"gallery-grid"}>
                <div className={"gallery-card"} id={"card-1"}></div>
                <div className={"gallery-card"} id={"card-2"}></div>
                <div className={"gallery-card"} id={"card-3"}></div>
                <div className={"gallery-card"} id={"card-4"}></div>
                <div className={"gallery-card"} id={"card-5"}></div>
                <div className={"gallery-card"} id={"card-6"}></div>
                <div className={"gallery-card"} id={"card-7"}></div>
                <div className={"gallery-card"} id={"card-8"}></div>
                <div className={"gallery-card"} id={"card-9"}></div>
            </section>
        );
    }
}