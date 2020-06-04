import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Circle from 'react-circle';

const ContentWrapper = styled.div`
  padding: 1rem;
`;

const Status = () => (
  <div className="scroll-area-md">
    <PerfectScrollbar>
      <ContentWrapper>
        <Container>
          <Row>
            <Col>
              <div className="progress-box">
                <h4>Server Load 1</h4>
                <Circle
                  animate // Boolean: Animated/Static progress
                  animationDuration="8s" // String: Length of animation
                  responsive // Boolean: Make SVG adapt to parent size
                  size="80" // String: Defines the size of the circle.
                  lineWidth="25" // String: Defines the thickness of the circle's stroke.
                  progress="51" // String: Update to change the progress and percentage.
                  progressColor="var(--warning)" // String: Color of "progress" portion of circle.
                  bgColor="#f3f5f2" // String: Color of "empty" portion of circle.
                  textColor="#bcbebf" // String: Color of percentage text color.
                  percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                  roundedStroke // Boolean: Rounded/Flat line ends
                  showPercentage // Boolean: Show/hide percentage.
                  showPercentageSymbol // Boolean: Show/hide only the "%" symbol.
                />
              </div>
            </Col>
            <Col>
              <div className="progress-box">
                <h4>Server Load 2</h4>
                <Circle
                  animate // Boolean: Animated/Static progress
                  animationDuration="6s" // String: Length of animation
                  responsive // Boolean: Make SVG adapt to parent size
                  size="80" // String: Defines the size of the circle.
                  lineWidth="25" // String: Defines the thickness of the circle's stroke.
                  progress="16" // String: Update to change the progress and percentage.
                  progressColor="var(--success)" // String: Color of "progress" portion of circle.
                  bgColor="#f3f5f2" // String: Color of "empty" portion of circle.
                  textColor="#bcbebf" // String: Color of percentage text color.
                  percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                  roundedStroke // Boolean: Rounded/Flat line ends
                  showPercentage // Boolean: Show/hide percentage.
                  showPercentageSymbol // Boolean: Show/hide only the "%" symbol.
                />
              </div>
            </Col>
            <Col>
              <div className="progress-box">
                <h4>Server Load 3</h4>
                <Circle
                  animate // Boolean: Animated/Static progress
                  animationDuration="4s" // String: Length of animation
                  responsive // Boolean: Make SVG adapt to parent size
                  size="80" // String: Defines the size of the circle.
                  lineWidth="25" // String: Defines the thickness of the circle's stroke.
                  progress="72" // String: Update to change the progress and percentage.
                  progressColor="var(--danger)" // String: Color of "progress" portion of circle.
                  bgColor="#f3f5f2" // String: Color of "empty" portion of circle.
                  textColor="#bcbebf" // String: Color of percentage text color.
                  percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                  roundedStroke // Boolean: Rounded/Flat line ends
                  showPercentage // Boolean: Show/hide percentage.
                  showPercentageSymbol // Boolean: Show/hide only the "%" symbol.
                />
              </div>
            </Col>
          </Row>
        </Container>
      </ContentWrapper>
    </PerfectScrollbar>
  </div>
);

export default Status;
