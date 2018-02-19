import React from 'react';
import PropTypes from 'prop-types';
import './AuthView.scss';
import SingInButton from './../../../components/SingInButton/Button';
import _result from 'lodash/result';

export class beginTestView extends React.Component {
    static PropTypes = {
        dispatch: PropTypes.func.isRequired,
        match: PropTypes.object.isRequired
    };
    constructor (props) {
        super(props);
        this.redirectToAuth = this.redirectToAuth.bind(this);
    }

    redirectToAuth () {
        window.location = '/auth/google';
    }

    render () {
        const errorType = _result(this.props, 'match.params.errorType', '');
        const style = errorType === 'failed' ? { color: 'red' } : { };
        return (
            <div className='auth-view'>
                <div className='centered-container'>
                    <div className='title-box'>
                        <p style={style}>Login required, please check that your email is on access list.</p>
                    </div>
                    <SingInButton onClick={this.redirectToAuth} />
                </div>
            </div>
        );
    }
}

export default beginTestView;
