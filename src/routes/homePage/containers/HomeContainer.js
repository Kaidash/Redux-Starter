import { actions, testAPI } from '../modules/home';
import { bindActionCreators } from 'redux';
import HomeView from '../components/HomeView';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => ({
    dispatch,
    ...bindActionCreators(actions, dispatch)
});

const mapStateToProps = (state) => ({
    homeState: state.homeState
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
