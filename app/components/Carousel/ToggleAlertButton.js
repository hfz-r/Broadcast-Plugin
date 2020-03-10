/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Badge } from 'react-bootstrap';
import { swing } from 'components/Sidebar/keyframes';

const StyledBadge = styled(Badge)`
  position: absolute;
  top: 10px;
`;

const ToggleContainer = styled.span`
  position: fixed;
  top: 70px;
  width: 70px;
  height: 50px;
  display: ${({ toggle }) => (toggle ? 'none' : 'block')};
  ${({ position }) =>
    position === 'left'
      ? 'left: 0; padding-right: 20px; border-top-right-radius: 7px;border-bottom-right-radius: 7px;'
      : 'right: 0; padding-right: 10px; border-top-left-radius: 7px; border-bottom-left-radius: 7px;'}
  text-align: center;
  line-height: 56px;
  cursor: pointer;
  z-index: 998;
  background-color: #b9ac9d;
  -webkit-box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);
  transition-delay: 0.3s;
`;

const StyledToggleContainer = styled(ToggleContainer)`
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
    }

    a:hover > i::before {
      display: inline-block;
      animation: ${swing} ease-in-out 0.5s 1 alternate;
    }
  }
`;

const ToggleButton = props => {
  const { position, messages, toggledState, onToggleAlert } = props;

  return (
    <StyledToggleContainer
      toggle={toggledState}
      position={position}
      onClick={() => onToggleAlert(!toggledState)}
    >
      <a>
        <i className="far fa-bell fa-lg" />
        <StyledBadge pill variant="danger">
          {messages.length}
        </StyledBadge>
      </a>
    </StyledToggleContainer>
  );
};

ToggleButton.defaultProps = {
  position: 'right',
};

ToggleButton.propTypes = {
  position: PropTypes.string,
  toggledState: PropTypes.bool,
  onToggleAlert: PropTypes.func,
  messages: PropTypes.array,
};

export default ToggleButton;
