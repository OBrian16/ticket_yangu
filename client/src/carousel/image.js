import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
  "mdbreact";
import { Link } from 'react-router-dom';

const CarouselPage = () => {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <ul>
                <li>
                  <Link
                    to='/'
                    id="company">
                    <img
                      className="d-block w-100"
                      src={require('../images/nwf.png')}
                      alt="First Slide"
                    />
                  </Link>
                </li>
              </ul>
              <MDBMask overlay="black-light" />
            </MDBView>
          </MDBCarouselItem>

          <MDBCarouselItem itemId="2">
            <MDBView>
              <ul>
                <li>
                  <Link
                    to='/'
                    id="company">
                    <img
                      className="d-block w-100"
                      src={require('../images/korogafest.png')}
                      alt="Second Slide"
                    />
                  </Link>
                </li>
              </ul>
              <MDBMask overlay="black-strong" />
            </MDBView>
          </MDBCarouselItem>

          <MDBCarouselItem itemId="3">
            <MDBView>
              <ul>
                <li>
                  <Link
                    to='/'
                    id="company">
                    <img
                      className="d-block w-100"
                      src={require('../images/hhh.png')}
                      alt="Third Slide"
                    />
                  </Link>
                </li>
              </ul>
              <MDBMask overlay="black-slight" />
            </MDBView>
          </MDBCarouselItem>

        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;