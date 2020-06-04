import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import PerfectScrollbar from 'react-perfect-scrollbar';
import moment from 'moment';

const ContentWrapper = styled.div`
  padding: 1rem;
`;

const Title = styled.h4.attrs(() => ({
  className: 'timeline-title',
}))`
  cursor: pointer;
  &:hover {
    color: #e9ecef;
  }
`;

const Description = styled.p`
  & > span {
    color: #343a40 !important;
  }
`;

const StyledIcon = styled(props => <i className={props.className}> </i>)``;

const StyledTimelineItems = styled(
  ({
    className,
    title,
    description,
    slug,
    category,
    tags,
    createdAt,
    expireAt,
  }) => (
    <VerticalTimelineElement
      className={className}
      icon={
        <StyledIcon
          className={`badge badge-dot badge-dot-xl ${IconSelector(
            category[0],
          )}`}
        />
      }
      date={moment(createdAt).format('DD/MM/YY')}
    >
      <Title onClick={() => toggleViewWindow(slug)}>{title}</Title>
      <p>
        <small className="text-muted">
          Expired at{' '}
          <b className="text-danger">
            {moment(expireAt).format('DD/MM/YY h:mmA')}
          </b>
        </small>
      </p>
      {tags &&
        tags.map(x => (
          <div key={x} className="mb-2 mr-2 badge badge-pill badge-success">
            {x}
          </div>
        ))}
      <Description>{description}</Description>
    </VerticalTimelineElement>
  ),
)``;

const IconSelector = cat => {
  switch (cat) {
    case 'Warning':
      return 'badge-warning';
    case 'Error':
      return 'badge-danger';
    case 'Info':
      return 'badge-primary';
    case 'Others':
    default:
      return 'badge-secondary';
  }
};

const toggleViewWindow = slug => {
  window.open(
    `${process.env.DASHBOARD_URL}/Message/Details?slug=${slug}`,
    '',
    'width=600,height=400,left=200,top=200',
  );
};

const Announcement = props => {
  const { payload } = props;

  return (
    <div className="scroll-area-md">
      <PerfectScrollbar>
        <ContentWrapper>
          <VerticalTimeline layout="1-column">
            {payload.map(msg => (
              <StyledTimelineItems
                className="vertical-timeline-item"
                key={msg.message_id}
                title={msg.projectAbout.title}
                description={msg.projectAbout.description}
                slug={msg.slug}
                category={msg.projectAbout.category}
                tags={msg.projectAbout.tags}
                createdAt={msg.created_at}
                expireAt={msg.projectAbout.end_date}
              />
            ))}
          </VerticalTimeline>
        </ContentWrapper>
      </PerfectScrollbar>
    </div>
  );
};

Announcement.propTypes = {
  payload: PropTypes.array,
};

export default Announcement;
