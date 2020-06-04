import React from 'react';
import PropTypes from 'prop-types';
import Tabs from 'react-responsive-tabs';
import LoadingIndicator from 'components/LoadingIndicator';
import Announcement from './PanelAnnouncement';
import Status from './PanelStatus';

const Content = props => {
  const { messages, loading, error } = props;

  if (error) throw new Error(error);

  const tabsContent = [
    {
      title: 'Announcement',
      content: loading ? (
        <LoadingIndicator />
      ) : (
        <Announcement payload={messages} />
      ),
    },
    {
      title: 'Widget Status',
      content: <Status />,
    },
  ];

  return (
    <Tabs
      tabsWrapperClass="body-tabs body-tabs-alt"
      transform={false}
      showInkBar
      items={tabsContent.map((tab, index) => ({
        title: tab.title,
        getContent: () => tab.content,
        key: index,
      }))}
    />
  );
};

Content.propTypes = {
  messages: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

export default Content;
