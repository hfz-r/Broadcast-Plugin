/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { bellring } from './keyframes';
import messages from './messages';

const CloseButton = styled.div`
  font-size: 20px;
  color: black;
  position: absolute;
  right: 20px;
  top: 0;

  &:hover {
    color: #b8bfce;
  }
`;

const TitleContainer = styled.div`
  background-color: #fff;
  opacity: 0.8 !important;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #0000001a;
`;

const StyledTitle = styled(TitleContainer)`
  & {
    a {
      color: black;
      text-decoration: none;
      font-weight: bold;
      flex-grow: 1;

      &:hover {
        color: #b8bfce;
      }
    }

    a,
    ${CloseButton} {
      -webkit-transition: all 0.3s ease;
      -moz-transition: all 0.3s ease;
      -ms-transition: all 0.3s ease;
      -o-transition: all 0.3s ease;
      transition: all 0.3s ease;
    }

    > i::before {
      display: inline-block;
      animation: ${bellring} ease-in-out 1s infinite alternate;
    }
  }
`;

const Title = ({ toggled, setToggle }) => (
  <StyledTitle>
    <i
      className="far fa-bell fa-2x pr-2"
      style={{
        textShadow: '0px 0px 10px rgb(139,0,0)',
      }}
    />
    <a href="#">
      <FormattedMessage {...messages.header} />
    </a>
    <CloseButton onClick={() => setToggle(!toggled)}>
      <i className="fas fa-times" />
    </CloseButton>
  </StyledTitle>
);

Title.propTypes = {
  toggled: PropTypes.bool,
  setToggle: PropTypes.func,
};

export default Title;
