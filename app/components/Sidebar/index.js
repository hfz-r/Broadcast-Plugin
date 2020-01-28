import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ToggleButton from './ToggleButton';
import Content from './Content';

const Wrapper = styled.div`
  -webkit-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
`;

const ContentWrapper = styled.div`
  width: 300px;
  position: fixed;
  top: 70px;
  right: 0;
  z-index: 999;
`;

const Sidebar = props => (
  <Wrapper>
    <ContentWrapper>
      <div className="d-none d-lg-block">
        <ToggleButton toggled={props.toggled} setToggle={props.onToggle} />
        <Content {...props} />
      </div>
    </ContentWrapper>
  </Wrapper>
);

Sidebar.propTypes = {
  toggled: PropTypes.bool,
  onToggle: PropTypes.func,
};

export default Sidebar;
