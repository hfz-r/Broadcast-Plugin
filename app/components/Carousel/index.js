import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ErrorBoundary from 'components/ErrorBoundary';
import Carousel from './carousel';
import ToggleButton from './ToggleAlertButton';

const Wrapper = styled.div`
  z-index: 1000;
  background-color: rgba(185, 172, 157, 0.9);
  border-radius: 0 !important;
  min-height: 100px;
  display: ${({ toggle }) => (toggle ? 'block' : 'none')};
`;

const CloseButton = styled.button`
  padding: 0.1rem 0.3rem 0 0 !important;
  font-size: 2.2rem !important;
  z-index: 1001;
  color: #fff;
`;

const CarouselWrapper = props => {
  const { toggledState, onToggleAlert } = props;

  return (
    <React.Fragment>
      <Wrapper
        toggle={toggledState}
        className="alert alert-dismissible text-white pt-2 p-0 m-0 d-lg-none"
      >
        <CloseButton
          className="close"
          aria-label="Close"
          onClick={() => onToggleAlert(!toggledState)}
        >
          <span aria-hidden="true">&times;</span>
        </CloseButton>
        <ErrorBoundary>
          <Carousel {...props} />
        </ErrorBoundary>
      </Wrapper>
      <section className="d-lg-none">
        <ToggleButton {...props} />
      </section>
    </React.Fragment>
  );
};

CarouselWrapper.propTypes = {
  loading: PropTypes.bool,
  toggledState: PropTypes.bool,
  onToggleAlert: PropTypes.func,
};

export default CarouselWrapper;
