/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import LocaleToggle from 'containers/LocaleToggle';
import { sonar } from './keyframes';

const FooterWrapper = styled.div`
  position: relative;
  width: 100%;
  bottom: 0;
  display: flex;
  background: #0000001a;
  border-top: 1px solid #0000001a;

  > a {
    flex-grow: 1;
    text-align: center;
    line-height: 30px;
    position: relative;
    color: black;

    &:hover i {
      color: #b8bfce;
    }

    &:first-child {
      border-left: none;
    }

    &:last-child {
      border-right: none;
    }
  }

  .badge-sonar {
    display: inline-block;
    background: #980303;
    border-radius: 50%;
    height: 8px;
    width: 8px;
    position: absolute;
    top: 0;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      border: 2px solid #980303;
      opacity: 0;
      border-radius: 50%;
      width: 100%;
      height: 100%;
      animation: ${sonar} 1.5s infinite;
    }
  }
`;

const Footer = () => (
  <FooterWrapper>
    <a href="#">
      <i className="fa fa-cog" />
      <span className="badge-sonar" />
    </a>
    <a href="#">
      <LocaleToggle />
    </a>
  </FooterWrapper>
);

export default Footer;
