/* eslint-disable react/prop-types */
import React, { memo, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import MobilePage from 'containers/MobilePage';
import Sidebar from 'components/Sidebar';
import onClickOutside from './onclickoutside';
import { toggleState, loadMessages } from './actions';
import {
  makeSelectToggle,
  makeSelectMessages,
  makeSelectLoading,
  makeSelectError,
} from './selectors';
import reducer from './reducer';
import saga from './saga';

const key = 'home';

const HomePage = props => {
  const ref = useRef();

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    props.onLoadMessages();
  }, []);

  onClickOutside(ref, () => {
    if (props.toggled) props.onToggle(false);
  });

  return (
    <div ref={ref}>
      <MobilePage {...props} />
      <Sidebar {...props} />
    </div>
  );
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
)(HomePage);
