import React, {Component} from 'react';
import './Components.css';
import './Grid.css';

// NOT an actual deep copy, but since we just use it for lists that contain
// strings, it should be ok. BE WARNED: THIS FUNCTION IS DANGEROUS!
function fakeDeepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export class Gallery extends Component {
  state = {
    images: [],
  }

  componentDidMount() {
    this.loadImages().then((images) => {
      this.setState({ images: images })
    });
  }

  async loadImages() {
    const BASE_URL = "https://raw.githubusercontent.com/StefanTodoran/alina-hairstylist/main/src/assets/services/";
    const images = [];
    for (let i = 1; i < 19; i++) {
      const url = BASE_URL + `${i}.jpeg`;
      // console.log(i, url);
      const response = await fetch(url);
      if (response.ok) {
        // console.log('OK!')
        images.push(url);
      }
    }
    return images;
  }

  render() {
    const images = [];
    for (let i = 0; i < this.state.images.length; i++) {
      images.push(<div className={"gallery-card"} style={{"--src": `url(${this.state.images[i]})`}}/>);
    }

    return (
      <section className={"gallery-grid"}>
        {images}
      </section>
    );
  }
}