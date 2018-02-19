import { connect } from 'react-redux';
import { actions } from '../modules/auth';
import { bindActionCreators } from 'redux';
import React from 'react';
import AuthView from '../components/AuthView';

const mapDispatchToProps = (dispatch) => ({
    dispatch,
    ...bindActionCreators(actions, dispatch)
});

const mapStateToProps = (state) => ({
    ...state
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthView);
