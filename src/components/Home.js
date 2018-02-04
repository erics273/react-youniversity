import React, { Component } from 'react';
import './Home.css';

import { Carousel, Grid, Row, Col, Button } from 'react-bootstrap';

class Home extends Component {

    render() {

        return (
            <div>

                <div className="text-center">
                    <Carousel id="carousel-college">
                        <Carousel.Item>
                            <img src="/assets/graduation1.jpg" alt="graduation1" />
                            <Carousel.Caption className="caption">
                                <h1>Welcome to YOUniversity</h1>
                                <h2>Login or create your new user account and.....</h2>
                                <h1>Begin your Academic Adventure</h1>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="/assets/amherstcollege.jpg" alt="amherstcollege" />
                            <Carousel.Caption className="caption">
                                <h1>Welcome to YOUniversity</h1>
                                <h2>Login or create your new user account and.....</h2>
                                <h1>Begin your Academic Adventure</h1>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="/assets/studentsoutsidedorms.jpg" alt="studentsoutsidedorms" />
                            <Carousel.Caption className="caption">
                                <h1>Welcome to YOUniversity</h1>
                                <h2>Login or create your new user account and.....</h2>
                                <h1>Begin your Academic Adventure</h1>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="/assets/harvard-boston.jpg" alt="harvard-boston" />
                            <Carousel.Caption className="caption">
                                <h1>Welcome to YOUniversity</h1>
                                <h2>Login or create your new user account and.....</h2>
                                <h1>Begin your Academic Adventure</h1>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="/assets/studentstudying.jpg" alt="studentstudying" />
                            <Carousel.Caption className="caption">
                                <h1>Welcome to YOUniversity</h1>
                                <h2>Login or create your new user account and.....</h2>
                                <h1>Begin your Academic Adventure</h1>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="/assets/UWCherries.jpg" alt="UWCherries" />
                            <Carousel.Caption className="caption">
                                <h1>Welcome to YOUniversity</h1>
                                <h2>Login or create your new user account and.....</h2>
                                <h1>Begin your Academic Adventure</h1>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="/assets/graduation2.jpg" alt="graduation2" />
                            <Carousel.Caption className="caption">
                                <h1>Welcome to YOUniversity</h1>
                                <h2>Login or create your new user account and.....</h2>
                                <h1>Begin your Academic Adventure</h1>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="/assets/berkeleyuniversity.jpg" alt="berkeleyuniversity" />
                            <Carousel.Caption className="caption">
                                <h1>Welcome to YOUniversity</h1>
                                <h2>Login or create your new user account and.....</h2>
                                <h1>Begin your Academic Adventure</h1>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div id="marketing" className="container text-center">
                    <Grid>
                        <Row className="show-grid">
                            <Col lg={4}>
                                <img className="img-circle" src="/assets/graduation.png" alt="Generic placeholder" width="140" height="140" />
                                <h2>Heading</h2>
                                <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                                <p><Button bsStyle="primary" >More Information &raquo;</Button></p>
                            </Col>
                            <Col lg={4}>
                                <img className="img-circle" src="/assets/schoolbuilding.png" alt="Generic placeholder" width="140" height="140" />
                                <h2>Heading</h2>
                                <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                                <p><Button bsStyle="primary" >More Information &raquo;</Button></p>
                            </Col>
                            <Col lg={4}>
                                <img className="img-circle" src="/assets/thoughts.jpg" alt="Generic placeholder" width="140" height="140" />
                                <h2>Heading</h2>
                                <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                                <p><Button bsStyle="primary" >More Information &raquo;</Button></p>
                            </Col>
                        </Row>
                    </Grid>

                </div>

            </div>

        );
    }
}

export default Home;
