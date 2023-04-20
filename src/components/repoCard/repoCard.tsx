import React, { useState } from 'react';
import { useActions } from '../../hooks/actions';
import { useAppSelector } from '../../hooks/redux';
import { IRepo } from '../../models/models';
import './repoCard.scss'
import { gitHubSlice } from '../../store/github/github-slice';

const RepoCard = ({ repo }: { repo: IRepo }) => {

    const { addFavourite, removeFavoutite } = useActions()

    const { favourites } = useAppSelector(state => state.github)

    console.log(repo.html_url)

    const [isFav, setIsFav] = useState<boolean>(favourites.includes(repo.html_url))

    const addFav = (event: React.MouseEvent) => {
        event.preventDefault()
        addFavourite(repo.url)

        gitHubSlice.actions.addFavourite(repo.url)//if not to use useActions hook
    }


    const removeFromFav = (event: React.MouseEvent) => {
        event.preventDefault()
        removeFavoutite(repo.url)
    }

    
    return (
        <div className='cardItem'>
            <a href={repo.html_url} target="_blank">
                <h2>{repo.full_name}</h2>
                <p className='infoBlock'>
                    <span>Forks : {repo.forks}</span>
                    <span> Watchers : {repo.watchers}</span>
                </p>

            </a>
            {isFav ? <button className='removeFav' onClick={removeFromFav}>Delete</button> : <button className='buttonFav' onClick={addFav}>Add</button>}
        </div>
    );
};

export default RepoCard;