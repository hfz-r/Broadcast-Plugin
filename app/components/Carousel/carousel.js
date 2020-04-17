import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
        <Carousel.Item key={msg.message_id}>
          <ContentWrapper className="d-block p-5">
            <h5 className="m-0">
              <Link
                className="text-white"
                to={`/announcements/${msg.slug}/overview`}
              >
                {msg.projectAbout.title}
              </Link>
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
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

export default ControlledCarousel;
