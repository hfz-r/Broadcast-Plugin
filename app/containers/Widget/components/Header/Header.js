import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import abstract4 from 'assets/images/abstract4.jpg';

const Wrapper = styled.div`
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  color: #fff;
  margin-top: -0.65rem;
  margin-bottom: 0;
  position: relative;
  z-index: 6;
`;

const Background = styled.div`
  margin: -1px -1px 0;
  padding: 1.5rem 0.5rem;
  position: relative;
  background-image: linear-gradient(to bottom, #00b09b, #96c93d) !important;
`;

const HeaderImage = styled(({ className, image }) => (
  <div
    className={className}
    style={{
      backgroundImage: `url(${image})`,
    }}
  />
))`
  ${Background} & {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 8;
    opacity: 0.25;
    filter: grayscale(80%);
    background-size: cover;
  }
`;

const Title = styled.h5`
  font-weight: 500;
  font-size: 1.25rem;
  margin: 0;
`;

const Subtitle = styled.h6`
  margin: 5px 0 0;
  opacity: 0.8;
`;

const HeaderContent = styled(({ className, title, subtitle }) => (
  <div className={className}>
    <Title>{title}</Title>
    <Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
  </div>
))`
  ${Background} & {
    text-align: center;
    position: relative;
    z-index: 10;
    color: #343a40;
  }
`;

const Header = ({ messages, children }) => (
  <React.Fragment>
    <Wrapper>
      <Background>
        <HeaderImage image={abstract4} />
        <HeaderContent
          title="Notifications"
          subtitle={`You have <b>${messages.length}</b> messages`}
        />
      </Background>
    </Wrapper>
    {children}
  </React.Fragment>
);

Header.propTypes = {
  children: PropTypes.node,
  messages: PropTypes.array,
};
export default Header;
