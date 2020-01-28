import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// import LoadingIndicator from 'components/LoadingIndicator';
import Header from './Title';
import Footer from './Footer';

const Wrapper = styled.section`
  max-height: calc(70% - 30px);
  height: calc(70% - 30px);
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

const HorizontalLine = styled.hr`
  margin: 0 !important;
  padding: 0 !important;
`;

const ContentTitle = styled.span`
  font-size: 14px;
  line-height: 1.38;
  text-align: left;
  color: #1d1d26;
  padding: 0 !important;
  margin-left: 24px !important;
  margin-bottom: 0 !important;
  margin-top: 0 !important;

  &.hover-underline:hover {
    text-decoration: underline;
  }

  & b {
    width: 250px;
    overflow: hidden;
    position: relative;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const ContentBody = styled.p`
  font-size: 12px !important;
  line-height: 1.58;
  text-align: left;
  color: #676775 !important;
  padding: 0 10px 0 0 !important;
  margin-left: 24px !important;
  margin-top: -14px !important;
`;

const Content = props => (
  <Wrapper open={props.toggled}>
    <Header toggled={props.toggled} setToggle={props.onToggle} />
    {props.error ? (
      <h1>ERROR!</h1>
    ) : (
      props.messages.map(msg => (
        <div key={msg.id}>
          <ContentTitle className="hover-underline">
            <a className="text-dark" href="./maintenance-schedule.html#content">
              <b>{msg.description}</b>
            </a>
          </ContentTitle>
          <ContentBody>
            <a className="text-dark" href="./maintenance-schedule.html#content">
              {msg.title}
            </a>
          </ContentBody>
          <HorizontalLine />
        </div>
      ))
    )}
    <Footer />
  </Wrapper>
);

Content.propTypes = {
  toggled: PropTypes.bool,
  onToggle: PropTypes.func,
  messages: PropTypes.array,
  // loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

export default Content;
