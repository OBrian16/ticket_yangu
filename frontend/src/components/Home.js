import React, { Component } from 'react'
import Carousel from 'semantic-ui-carousel-react';
import { Button, Image, Container, Segment, Header, Message } from 'semantic-ui-react'

import "pure-react-carousel/dist/react-carousel.es.css";

//import CardCarousel from '../carousel/card';
import ImageCarousel from '../carousel/image'

export default class Home extends Component {
    render() {

        return (
            <Container style={{ margin: 20 }}>

                <Segment attached="bottom">
                    <ImageCarousel />
                </Segment>

                <Message info>
                    xxxxxx
                </Message>
            </Container>
        )
    }
}
