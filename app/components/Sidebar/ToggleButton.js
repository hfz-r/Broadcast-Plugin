/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { swing } from './keyframes';

const StyledBadge = styled(Badge)`
  position: absolute;
  top: 10px;
`;

const ToggleContainer = styled.section`
  width: 70px;
  height: 50px;
  text-align: center;
  display: ${({ open }) => (open ? 'none' : 'block')};
  ${({ position }) =>
    position === 'left'
      ? 'left: 0; padding-right: 20px; border-top-right-radius: 7px;border-bottom-right-radius: 7px;'
      : 'right: 0; padding-right: 10px; border-top-left-radius: 7px; border-bottom-left-radius: 7px;'}
  opacity: 0.8 !important;
  position: fixed;
  top: 70px;
  line-height: 56px;
  cursor: pointer;
  -webkit-box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);
  background-color: #fff;
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
    }
  }
`;

const StyledIcon = styled(({ className }) => (
  <FontAwesomeIcon className={className} icon={faBell} size="lg" />
))`
  ${StyledContainer}:hover & {
    display: inline-block;
    animation: ${swing} ease-in-out 0.5s 1 alternate;
  }
`;

const ToggleButton = props => {
  const { position, toggled, onToggle, messages } = props;

  return (
    <StyledContainer
      open={toggled}
      position={position.x}
      onClick={() => onToggle(!toggled)}
    >
      <a>
        <StyledIcon />
        <StyledBadge pill variant="warning">
          {messages.length}
        </StyledBadge>
      </a>
    </StyledContainer>
  );
};

ToggleButton.defaultProps = {
  position: {
    x: 'right',
  },
};

ToggleButton.propTypes = {
  toggled: PropTypes.bool,
  onToggle: PropTypes.func,
  messages: PropTypes.array,
  position: PropTypes.shape({
    x: PropTypes.string,
    y: PropTypes.string,
  }),
};

export default ToggleButton;
