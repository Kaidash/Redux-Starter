import { actions } from '../modules/scores';
import { bindActionCreators } from 'redux';
import ScoresView from '../components/ScoresView';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => ({
    dispatch,
    ...bindActionCreators(actions, dispatch)
});

const mapStateToProps = (state) => ({
    adminScoresState: state.adminScoresState
});

export default connect(mapStateToProps, mapDispatchToProps)(ScoresView);
