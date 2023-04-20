import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import './favourite.scss'

const FavoritePage = () => {

    const { favourites } = useAppSelector(state => state.github)


    return (
        <section>
            <ul>
                {favourites.map((item) => (
                    <li>
                        <a target='_blank' href={item}></a>
                        {item}
                    </li>
                ))}
            </ul>

        </section>
    );
};

export default FavoritePage;