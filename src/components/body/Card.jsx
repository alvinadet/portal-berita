import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
  Container,
  CardDeck
} from 'reactstrap';

export default class Cards extends Component {
  state = {
    data: [],
    loading: false
  };

  getData = () => {
    axios
      .get(
        'https://id.techinasia.com/wp-json/techinasia/3.0/posts?page=1&per_page=15'
      )
      .then(res => {
        console.log(res.data, '>>>>>>>>>');
        this.setState({
          data: res.data.posts,
          loading: true
        });
      });
  };

  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <div>
        <Container>
          <Row>
            {this.state.data.map(datum => {
              return (
                <Col sm="3">
                  <Card>
                    <CardImg
                      top
                      height="200px"
                      width="100%"
                      src={datum.seo.image}
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle>{datum.seo.title}</CardTitle>
                      <Link to={`/${datum.slug}`}>
                        <Button>Lihat selengkapnya</Button>
                      </Link>
                    </CardBody>
                  </Card>
                  <br />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
}
