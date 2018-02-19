// We only need to import the modules necessary for initial render
import React from 'react';
import CoreLayout from './../layouts/CoreLayout';
import AdminLayout from './../layouts/AdminLayout';
import LoginLayout from './../layouts/LoginLayout';
import HomePage from './homePage';
import AdminResponses from './adminResponses';
import AdminAuth from './adminAuth';
import Error404 from './Error404';
import { Redirect } from 'react-router';
import { renderRoutes } from 'react-router-config';
import { Root } from './../layouts/Root';

export const redirectRoute = () => (<Redirect to='/admin/responses' />);

export const routes = [
    {
        component: Root,
        routes: [
            {
                path: '/',
                component: CoreLayout,
                exact: true,
                routes: [
                    {
                        path: '/',
                        component: HomePage
                    }
                ]
            },
            {
                path: '/admin/login',
                component: LoginLayout,
                routes: [
                    {
                        path: '/admin/login',
                        exact: true,
                        component: AdminAuth
                    },
                    {
                        path: '/admin/login/:errorType',
                        component: AdminAuth
                    }
                ]
            },
            {
                path: '/admin',
                component: AdminLayout,
                routes: [
                    {
                        path: '/admin',
                        exact: true,
                        component: redirectRoute
                    },
                    {
                        path: '/admin/responses',
                        exact: true,
                        component: AdminResponses
                    }
                ]
            },
            {
                path: '*',
                component: CoreLayout,
                routes: [
                    {
                        path: '*',
                        component: Error404
                    }
                ]
            }
        ]
    }
];

/*  Note: Instead of using JSX, we recommend using react-router
 PlainRoute objects to build route definitions. */

export const createRoutes = () => {
    return renderRoutes(routes);
};

export default createRoutes;
