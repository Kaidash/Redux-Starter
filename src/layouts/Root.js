/**
 * Created by mr47 on 5/30/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';

export const Root = ({ children, route }) => (
    <div>
        {children}
        {renderRoutes(route.routes)}
    </div>
);

Root.propTypes = {
    children: PropTypes.element,
    route: PropTypes.object.isRequired
};

export default Root;
