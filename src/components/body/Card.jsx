import React, { Component } from 'react';
import axios from 'axios';

export default class Card extends Component {
  state = {
    data: []
  };

  getData = () => {
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e9fdd560402048d1b1d65ecc65b2a5eb'
      )
      .then(res => {
        console.log(res, '>>>>>>>>>');
      });
  };

  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <div>
        <h1>Ini Card</h1>
      </div>
    );
  }
}
