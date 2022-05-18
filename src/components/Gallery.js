import React, {Component} from 'react';
import './Components.css';
import './Grid.css';

export class Gallery extends Component {
  componentDidMount() {
    const BASE_URL = "https://github.com/StefanTodoran/alina-hairstylist/tree/main/src/assets/services";
  }

  render() {
        return (
            <section className={"gallery-grid"}>
                <div className={"gallery-card"} id={"card-1"}/>
                <div className={"gallery-card"} id={"card-2"}/>
                <div className={"gallery-card"} id={"card-3"}/>
                <div className={"gallery-card"} id={"card-4"}/>
                <div className={"gallery-card"} id={"card-5"}/>
                <div className={"gallery-card"} id={"card-6"}/>
                <div className={"gallery-card"} id={"card-7"}/>
                <div className={"gallery-card"} id={"card-8"}/>
                <div className={"gallery-card"} id={"card-9"}/>
            </section>
        );
    }
}