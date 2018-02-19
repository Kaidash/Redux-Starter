import React from 'react';
import PropTypes from 'prop-types';
import './AdminLayout.scss';
import '../../styles/core.scss';
import Tabs from '../../components/Tabs';
import { renderRoutes } from 'react-router-config';
import { NavLink } from 'react-router-dom';

export class AdminLayout extends React.Component {
    static propTypes = {
        children: PropTypes.element,
        route: PropTypes.object.isRequired,
        jobResult: PropTypes.object
    };
    render () {
        const { children, route } = this.props;
        const user = this.props.jobResult;
        return (
            <div className='wrapper-admin'>
                <div className='container admin-container'>
                    <div className='admin-panel-title'>
                        <h3 className='title-admin'>
                            <NavLink to='/admin'>Admin</NavLink>
                        </h3>
                        <span className='admin-left'>
                            <div className='admin-avatar' style={{ background: `url(${user.image}) no-repeat` }} />
                            <span className='admin-name'>{user.name}</span>
                            <a className='admin-logout' href='/auth/logout'>Logout</a>
                        </span>
                    </div>

                    <Tabs />

                    <div className='admin-layout__viewport admin'>
                        {children}
                        {route ? renderRoutes(route.routes) : null}
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminLayout;
