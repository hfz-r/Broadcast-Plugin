/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

const routeUrl = process.env.DASHBOARD_URL;

const Content = props => {
  if (props.error) throw new Error(props.error);

  // const toggleViewWindow = slug => {
  //   window.open(
  //     `${routeUrl}/views/${props.token}/${slug}/overview`,
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
    <React.Fragment>
      {props.messages.map(msg => (
        <div key={msg.message_id}>
          <ContentTitle className="hover-underline">
            <a className="text-dark" onClick={() => toggleViewWindow(msg.slug)}>
              <b>{msg.projectAbout.title}</b>
            </a>
          </ContentTitle>
          <ContentBody>
            <a className="text-dark" onClick={() => toggleViewWindow(msg.slug)}>
              {msg.projectAbout.description}
            </a>
          </ContentBody>
          <HorizontalLine />
        </div>
      ))}
      {props.children}
    </React.Fragment>
  );
};

Content.propTypes = {
  messages: PropTypes.array,
  error: PropTypes.string,
  children: PropTypes.node,
  // token: PropTypes.string,
};

export default Content;
