import React from 'react'
import { Link } from 'react-router-dom'

import './EmptyPage.scss'

const EmptyPage = ({ type }) => {

    const text = {
        favorites: 'favorites photos',
        history: 'history results'
    }

    return <article className='empty'>
        <p className='empty__text'>There is no {text[type]}. You can find and select one from:</p>
        <Link to="/search" className="empty__link">
            Search
            </Link>
    </article>
}

export default EmptyPage