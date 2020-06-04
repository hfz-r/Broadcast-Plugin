/* eslint-disable react/prop-types */
import React, { memo, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectSaga } from 'utils/injectSaga';
import MobilePage from 'containers/MobilePage';
import Sidebar from 'components/Sidebar';
import Widget from 'containers/Widget/template';
import onClickOutside from './onclickoutside';
import { toggleState, loadMessages } from './actions';
import * as S from './selectors';
import saga from './saga';

const HomePage = props => {
  const { onLoadMessages, version, ...rest } = props;

  const ref = useRef();

  const renderSwitch = param => {
    switch (param) {
      case 'v2':
        return <Widget {...rest} />;
      default:
        return (
          <React.Fragment>
            <MobilePage {...props} />
            <Sidebar {...props} />
          </React.Fragment>
        );
    }
  };

  useInjectSaga({ key: 'home', saga });

  useEffect(() => {
    onLoadMessages(props.project);
  }, []);

  onClickOutside(ref, () => {
    if (props.toggled) props.onToggle(false);
  });

  return <div ref={ref}>{renderSwitch(version)}</div>;
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
