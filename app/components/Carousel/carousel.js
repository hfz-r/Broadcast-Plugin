import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';

const ContentWrapper = styled.div`
  width: 100%;
  height: 200px;
  text-align: center;
`;

const ControlledCarousel = props => {
  const { messages, error } = props;
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  if (error) throw new Error(`${error}`);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
      {messages.map(msg => (
        <Carousel.Item key={msg.id}>
          <ContentWrapper className="d-block p-5">
            <h5 className="m-0">
              <a href="./announcements.html" className="text-white">
                {msg.description}
              </a>
            </h5>
            <p className="small">{msg.title}</p>
          </ContentWrapper>
          <Carousel.Caption />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

ControlledCarousel.propTypes = {
  messages: PropTypes.array,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

export default ControlledCarousel;
