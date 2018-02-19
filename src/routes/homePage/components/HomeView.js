import React from 'react';
import './homeView.scss';

export class HomeView extends React.Component {
    render () {
        return (
            <div className='home-view'>
                <p className='slogan-home'>
                    Test
                </p>
                <p className='home-info'>Welcome</p>
                <div>
                    <button className='next btn'>Button</button>
                </div>
                <footer>
                    Copyright © 2017
                </footer>
            </div>
        );
    }
}

export default HomeView;
