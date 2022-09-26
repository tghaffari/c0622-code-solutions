import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const images = [
  '../images/boho-monstera.jpg',
  '../images/houseplants-on-shelf.png',
  '../images/living-room-plants.jpeg',
  '../images/monstera.jpg',
  '../images/Plants-pink-background.jpeg',
  '../images/plants-vector.png',
  '../images/Rubber-plant.jpeg'
];

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<Carousel images = {images} />);
