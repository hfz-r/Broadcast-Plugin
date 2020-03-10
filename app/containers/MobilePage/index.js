import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';

import Carousel from 'components/Carousel';
import { makeSelectToggleAlert } from './selectors';
import { toggleAlertState } from './actions';
import reducer from './reducer';

const key = 'mobile';

const MobilePage = props => {
  useInjectReducer({ key, reducer });
  return <Carousel {...props} />;
};

const mapStateToProps = createStructuredSelector({
  toggledState: makeSelectToggleAlert(),
});

const mapDispatchToProps = dispatch => ({
  onToggleAlert: toggle => dispatch(toggleAlertState(toggle)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(MobilePage);
