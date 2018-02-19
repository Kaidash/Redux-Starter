import React from 'react';
import './ErrorView.scss';

export class ErrorView extends React.Component {
    render () {
        return (
            <div className='page404-view'>
                <div className='page404-container page404'>
                    <p className='page404-error-text'>404. Page not found.</p>
                </div>
            </div>
        );
    }
}

export default ErrorView;
