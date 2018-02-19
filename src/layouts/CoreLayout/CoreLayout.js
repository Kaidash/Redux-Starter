import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import './CoreLayout.scss';
import '../../styles/core.scss';
import LoadingBar from 'react-redux-loading-bar';

export const CoreLayout = ({ children, route }) => (
    <div className='wrapper'>
        <LoadingBar className='loading' />
        <div className='inner-wrapper container'>
            <header className='test-header'>
                <h3 className='title-home '><span className='first-line'>Starter <span className='logo-head' /></span></h3>
            </header>
            <div className='core-layout__viewport'>
                {children}
                {renderRoutes(route.routes)}
            </div>
        </div>
    </div>
);

CoreLayout.propTypes = {
    children: PropTypes.element,
    route: PropTypes.object.isRequired
};

export default CoreLayout;
