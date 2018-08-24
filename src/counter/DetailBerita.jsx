import React, { Component } from 'react';
import axios from 'axios';

export default class DetailBerita extends Component {
  state = {
    data: []
  };
  getDatatitle = () => {
    axios
      .get(
        'https://id.techinasia.com/wp-json/techinasia/3.0/posts/' +
          this.props.match.params.slug
      )
      .then(res => {
        console.log(res, '>>>>>>>>>>...');
        this.setState({
          data: res.data.posts
        });
      })
      .catch(err => {
        console.log(err, 'erroror ');
      });
  };

  componentDidMount() {
    this.getDatatitle();
  }
  render() {
    return (
      <div>
        {this.state.data.map(datum => {
          return (
            <div>
              <h2>{datum.seo.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: datum.content }} />
            </div>
          );
        })}
      </div>
    );
  }
}
