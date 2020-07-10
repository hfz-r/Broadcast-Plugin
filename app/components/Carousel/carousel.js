/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';

const ContentWrapper = styled.div`
  width: 100%;
  height: 200px;
  text-align: center;
`;

const routeUrl = process.env.DASHBOARD_URL;

const ControlledCarousel = props => {
  const { messages, token } = props;
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  if (props.error) throw new Error(props.error);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  // const toggleViewWindow = slug => {
  //   window.open(
  //     `${routeUrl}/views/${token}/${slug}/overview`,
  //     '',
  //     'width=600,height=400,left=200,top=200',
  //   );
  // };

  const toggleViewWindow = slug => {
    window.open(
      `${routeUrl}/Message/Details?slug=${slug}`,
      '',
      'width=600,height=400,left=200,top=200',
    );
  };

  return (
    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
      {messages.map(msg => (
        <Carousel.Item key={msg.message_id}>
          <ContentWrapper className="d-block p-5">
            <h5 className="m-0">
              <a
                className="text-white"
                onClick={() => toggleViewWindow(msg.slug)}
              >
                <b>{msg.projectAbout.title}</b>
              </a>
            </h5>
            <p className="small">{msg.projectAbout.description}</p>
          </ContentWrapper>
          <Carousel.Caption />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

ControlledCarousel.propTypes = {
  messages: PropTypes.array,
  token: PropTypes.string,
  error: PropTypes.string,
};

export default ControlledCarousel;
