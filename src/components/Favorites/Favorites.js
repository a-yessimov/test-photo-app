import React from 'react'
import { useSelector } from 'react-redux'
import { PhotosList } from '../PhotosList/PhotosList'
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom'
import { Modal } from '../Modal/Modal'
import EmptyPage from '../EmptyPage/EmptyPage'

import './Favorites.scss'

const Favorites = () => {

    const { favoritesPhotos } = useSelector(state => state.favorites)
    const { path } = useRouteMatch()

    return (
        <div className="favorites-b">
            <h2 className="favorites-title">Favorites Photos</h2>
            <PhotosList list={favoritesPhotos} />
            {favoritesPhotos.length ?
                <Switch>
                    <Route exact path={`${path}/photo/:id`}>
                        <Modal path={path} data={favoritesPhotos} />
                    </Route>
                </Switch>
                :
                <EmptyPage type="favorites" />
            }
        </div>
    )
}

export {
    Favorites
}