import React, { useEffect, useState } from 'react';
import { useDebounce } from '../../hooks/debounce';
import { useLazyGetUserRepoQuery, useSearchUsersQuery } from '../../store/github/github-api';
import './home.scss'
import RepoCard from '../../components/repoCard/repoCard';


const HomePage = () => {
    const [search, setsearch] = useState<string>('')
    const [showDropDown, setShowDropDown] = useState<boolean>(false)
    const [showcardItem, setShowCardItem] = useState<boolean>(false)

    const debounceVal = useDebounce(search) // this hook to avoid request on every chnaging searchPerson

    const { isLoading, isError, data } = useSearchUsersQuery(debounceVal, {
        skip: debounceVal.length < 3,//doesnt make request if value less then 3
        refetchOnFocus: true //will execute request every time when we focus on this page
    })

    const [fetchRepos, { isLoading: areReposLoading, data: repos }] = useLazyGetUserRepoQuery()

    useEffect(() => {
        if (debounceVal.length > 2) {

            setShowDropDown(true)
            setShowCardItem(false)
        } else { setShowDropDown(false) }
    }, [debounceVal])

    const clickHandler = (userName: string) => {
        setShowCardItem(true)
        setShowDropDown(false)
        fetchRepos(userName)
    }

    return (
        <section>
            <div className='container'>
                {isError ? <p className='error'>Something went wrong</p> : ''}
                <div className='searchBlock'>
                    <input onChange={(e) => setsearch(e.target.value)} className='inputSearch' type="text" />
                    {isLoading ? 'Loading' : ''}
                    {
                        data && showDropDown && <ul className='dropDown'>
                            {data.map((item) => (
                                <li onClick={() => clickHandler(item.login)} key={`user-${item.login}`}> {item.login}</li>
                            ))}
                        </ul>
                    }
                    {areReposLoading ? "Repos are loading" : ''}
                    {showcardItem && repos ? repos?.map((item) => (
                        <RepoCard repo={item}></RepoCard>
                    )) : ''}

                </div>


            </div>


        </section>
    );
};

export default HomePage;