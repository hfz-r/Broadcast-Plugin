import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { sonar, swing } from 'utils/keyframes';
import { Body } from './components';

const Wrapper = styled.div`
  position: fixed;
  z-index: 999;
  // right: -30px;
  right: -1px;
  top: 70px;
  // height: 100vh;
  // max-height: 65%;
  transform: translate(400px);
  transition: all 0.2s;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
  box-shadow: 0 0.46875rem 2.1875rem rgba(8, 10, 37, 0.03),
    0 0.9375rem 1.40625rem rgba(8, 10, 37, 0.03),
    0 0.25rem 0.53125rem rgba(8, 10, 37, 0.05),
    0 0.125rem 0.1875rem rgba(8, 10, 37, 0.03);

  ${props => (props.toggled ? '& { transform: translate(0); right: 0; }' : '')}

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledButton = styled(Button)`
  // border-radius: 50px;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  position: absolute;
  // left: -114px;
  // bottom: 80px;
  left: -54px;
  top: 80px;
  padding: 0;
  // height: 54px;
  height: 50px;
  line-height: 54px;
  width: 54px;
  // text-align: center;
  // display: block;
  // box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);
  margin-top: -27px;
  display: flex;
  align-content: center;
  align-items: center;

  svg {
    top: 50%;
    left: 50%;
    position: absolute;
    margin: -0.5em 0 0 -0.5em;
  }
`;

const IconBg = styled.div`
  opacity: 0.2;
  transition: opacity 0.2s;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  position: absolute;
  height: inherit;
  width: inherit;
  z-index: 3;
  background-color: #3ac47d !important;
`;

const SonarBadge = styled.span`
  display: inline-block;
  background: #980303;
  border-radius: 50%;
  height: 8px;
  width: 8px;
  position: absolute;
  top: 2px;
  left: 2px;

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
`;

const StyledIcon = styled(({ className }) => (
  <FontAwesomeIcon
    className={className}
    icon={faBell}
    color="#3ac47d"
    size="2x"
  />
))`
  ${StyledButton}:hover & {
    display: inline-block;
    animation: ${swing} ease-in-out 0.5s 1 alternate;
  }
`;

const Widget = props => {
  const { toggled, onToggle } = props;
  return (
    <Wrapper {...props}>
      <OverlayTrigger
        placement="left"
        overlay={<Tooltip id="widget-tooltip">Open Notifications</Tooltip>}
      >
        <StyledButton variant="light" onClick={() => onToggle(!toggled)}>
          <IconBg />
          <StyledIcon />
          <SonarBadge />
        </StyledButton>
      </OverlayTrigger>
      <Body {...props} />
    </Wrapper>
  );
};

Widget.propTypes = {
  toggled: PropTypes.bool,
  onToggle: PropTypes.func,
};
export default Widget;
