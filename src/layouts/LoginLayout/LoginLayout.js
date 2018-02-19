import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import './LoginLayout.scss';
import '../../styles/core.scss';

export const LoginLayout = ({ children, route }) => (
    <div className='wrapper-login'>
        {children}
        {renderRoutes(route.routes)}
    </div>
);

LoginLayout.propTypes = {
    children: PropTypes.element,
    route: PropTypes.object.isRequired
};

export default LoginLayout;
