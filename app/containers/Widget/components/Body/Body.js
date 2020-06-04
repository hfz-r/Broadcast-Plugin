import React from 'react';
import styled from 'styled-components';
import ErrorBoundary from 'components/ErrorBoundary';
import HeaderMenu from '../Header';
import ContentMenu from '../Contents';

const Wrapper = styled.div.attrs(() => ({
  className: 'body-menu',
}))`
  background: #fff;
  padding: 0;
  width: 25rem;
  max-width: 25rem;
`;

const Body = props => (
  <Wrapper>
    <HeaderMenu {...props} />
    <ErrorBoundary>
      <ContentMenu {...props} />
    </ErrorBoundary>
  </Wrapper>
);

export default Body;
