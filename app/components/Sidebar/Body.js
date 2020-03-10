import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ErrorBoundary from 'components/ErrorBoundary';
import LoadingIndicator from 'components/LoadingIndicator';
import Content from './Content';
import Header from './Title';

const Wrapper = styled.section`
  max-height: calc(70% - 30px);
  height: calc(70% - 30px);
  width: 300px;
  overflow-y: auto;
  position: fixed;
  text-align: left;
  opacity: 0.9;
  display: ${({ open }) => (open ? 'block' : 'none')};
  line-height: 56px;
  cursor: pointer;
  -webkit-box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);
  background-color: #fff;
`;

const Body = props => (
  <Wrapper open={props.toggled}>
    <Header {...props} />
    <ErrorBoundary>
      {props.loading ? <LoadingIndicator /> : <Content {...props} />}
    </ErrorBoundary>
  </Wrapper>
);

Body.propTypes = {
  toggled: PropTypes.bool,
  loading: PropTypes.bool,
};

export default Body;
