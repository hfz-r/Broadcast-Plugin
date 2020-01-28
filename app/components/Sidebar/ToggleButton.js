/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { swing } from './keyframes';

const ToggleContainer = styled.section`
  width: 70px;
  height: 50px;
  text-align: center;
  padding-right: 10px;
  display: ${({ open }) => (open ? 'none' : 'block')};
  opacity: 0.8 !important;
  position: fixed;
  top: 70px;
  right: 0;
  line-height: 56px;
  cursor: pointer;
  -webkit-box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);
  background-color: #fff;
  border-radius: 7px 0 0 7px;
  transition-delay: 0.3s;
`;

const StyledContainer = styled(ToggleContainer)`
  & {
    a,
    a:before {
      -webkit-transition: all 0.3s ease;
      -moz-transition: all 0.3s ease;
      -ms-transition: all 0.3s ease;
      -o-transition: all 0.3s ease;
      transition: all 0.3s ease;
    }
  }

  & {
    a {
      color: #818896;
      display: inline-block;
      width: 100%;
      text-decoration: none;
      position: relative;

      .notification {
        position: absolute;
        top: 10px;
      }
    }

    a:hover > i::before {
      display: inline-block;
      animation: ${swing} ease-in-out 0.5s 1 alternate;
    }
  }
`;

const ToggleButton = ({ toggled, setToggle }) => (
  <StyledContainer open={toggled} onClick={() => setToggle(!toggled)}>
    <a>
      <i className="far fa-bell fa-lg" />
      <span className="badge badge-pill badge-warning notification">3</span>
    </a>
  </StyledContainer>
);

ToggleButton.propTypes = {
  toggled: PropTypes.bool,
  setToggle: PropTypes.func,
};

export default ToggleButton;
