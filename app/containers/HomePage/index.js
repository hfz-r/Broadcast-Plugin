/* eslint-disable react/prop-types */
import React, { memo, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectSaga } from 'utils/injectSaga';
import MobilePage from 'containers/MobilePage';
import Sidebar from 'components/Sidebar';
import onClickOutside from './onclickoutside';
import { toggleState, loadMessages } from './actions';
import * as S from './selectors';
import saga from './saga';

const key = 'home';

const HomePage = props => {
  const ref = useRef();

  useInjectSaga({ key, saga });

  useEffect(() => {
    props.onLoadMessages(props.project);
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
  toggled: S.makeSelectToggle(),
  messages: S.makeSelectMessages(),
  token: S.makeSelectToken(),
  loading: S.makeSelectLoading(),
  error: S.makeSelectError(),
});

const mapDispatchToProps = dispatch => ({
  onToggle: toggle => dispatch(toggleState(toggle)),
  onLoadMessages: project => dispatch(loadMessages(project)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
