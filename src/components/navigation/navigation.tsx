import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.scss'

 const Navigation = () => {
    return (
        <header>
            <div className='infoBlock container'>
                <h1 className='title'>GitHubSearch</h1>
                <div className='pagesBlock'>
                    <Link to={'/'}>Home page</Link>
                    <Link to={'/fav'}>Favourite page</Link>
                    <Link to={'/redux'}>ReduxVanila page</Link>
                    <Link to={'/redux-toolkit'}>ReduxToolkit page</Link>
                </div>
            </div>

        </header>
    );
};
export default Navigation
