import React, { memo, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectMessages,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import Sidebar from 'components/Sidebar';
import { loadMessages } from 'containers/App/actions';
import { toggleState } from './actions';
import { makeSelectToggle } from './selectors';
import OnOutsideClick from './outside-click';
import reducer from './reducer';
import saga from './saga';

const key = 'front';

const FrontPage = props => {
  const ref = useRef();
  const { onLoadMessages } = props;

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    onLoadMessages();
  }, []);

  OnOutsideClick(ref, () => {
    if (props.toggled) props.onToggle(false);
  });

  return (
    <div ref={ref}>
      <Helmet>
        <title>Front Page</title>
        <meta name="description" content="Broadcast plugin frontpage" />
      </Helmet>
      <Sidebar {...props} />
    </div>
  );
};

FrontPage.propTypes = {
  toggled: PropTypes.bool,
  onToggle: PropTypes.func,
  onLoadMessages: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  toggled: makeSelectToggle(),
  messages: makeSelectMessages(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const mapDispatchToProps = dispatch => ({
  onToggle: toggle => dispatch(toggleState(toggle)),
  onLoadMessages: () => dispatch(loadMessages()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(FrontPage);
