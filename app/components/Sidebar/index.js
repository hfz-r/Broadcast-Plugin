import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ToggleButton from './ToggleButton';
import ContentBody from './Body';

const Wrapper = styled.div`
  padding-right: 0;
  -webkit-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;

  @media (min-width: 992px) {
    padding-right: 0;
    ${props => (props.toggled ? 'padding-right: 250px' : '')}
  }
`;

const ContentWrapper = styled.div`
  width: 300px;
  position: absolute;
  overflow-x: hidden !important;
  top: 70px;
  z-index: 999;
  ${props => (props.position === 'left' ? 'left:0;' : 'right: 0;')}

  @media (min-width: 992px) {
    ${props => (props.toggled ? 'position: absolute; margin-right: 0;' : '')}
  }

  @media (min-width: 1024px) {
    overflow-x: hidden !important;
  }
`;

const Sidebar = props => (
  <Wrapper toggled={props.toggled} position={props.position}>
    <ContentWrapper toggled={props.toggled} position={props.position}>
      <div className="d-none d-lg-block">
        <ToggleButton {...props} />
        <ContentBody {...props} />
      </div>
    </ContentWrapper>
  </Wrapper>
);

Sidebar.defaultProps = {
  position: 'right',
};

Sidebar.propTypes = {
  toggled: PropTypes.bool,
  position: PropTypes.string,
};

export default Sidebar;
