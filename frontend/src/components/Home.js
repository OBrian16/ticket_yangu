import React, { Component } from 'react'
import Carousel from 'semantic-ui-carousel-react';
import { Button, Image, Icon, Container, Segment, Header, Message } from 'semantic-ui-react'

import "pure-react-carousel/dist/react-carousel.es.css";

//import CardCarousel from '../carousel/card';
import ImageCarousel from '../carousel/image'
import EventCards from '../pages/cards'
import Footer from '../pages/footer'

export default class Home extends Component {
    render() {

        return (
            <Container>
                <style>{`
              html, body {
                background-color: #F2F3F4 !important;
              }
              p {
                align-content: center;
                color: #fff;
                display: flex;
                flex-direction: column;
                justify-content: center;
                min-width: 20em;
              }
              p > span {
                opacity: 0.4;
                text-align: center;
              }
              }
            `}
                </style>
                <Segment attached="">
                    <ImageCarousel />
                </Segment>

                <Segment clearing textAlign='center'>
                    <b>Upcoming Events</b>

                    <Button color='red' floated='right'>
                        <Icon name='calendar alternate outline' /> More Events
                    </Button>
                </Segment>

                <Segment attached="bottom">
                    <EventCards />
                </Segment>

                <Footer />

            </Container>


        )
    }
}
