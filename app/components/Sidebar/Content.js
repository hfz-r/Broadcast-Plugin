import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const Content = props => {
  if (props.error) throw new Error(`${props.error}`);

  return (
    <React.Fragment>
      {props.messages.map(msg => (
        <div key={msg.message_id}>
          <ContentTitle className="hover-underline">
            <Link
              className="text-dark"
              to={`/announcements/${msg.slug}/overview`}
            >
              <b>{msg.projectAbout.title}</b>
            </Link>
          </ContentTitle>
          <ContentBody>
            <Link
              className="text-dark"
              to={`/announcements/${msg.slug}/overview`}
            >
              {msg.projectAbout.description}
            </Link>
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
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  children: PropTypes.node,
};

export default Content;
