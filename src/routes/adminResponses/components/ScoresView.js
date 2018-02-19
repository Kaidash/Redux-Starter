import React from 'react';
import PropTypes from 'prop-types';
import './ScoresView.scss';

export class ScoresView extends React.Component {
    static propTypes = {
        adminScoresState: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    };
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div className='admin-view'>
               test
            </div>
        );
    }
}

export default ScoresView;
