import React from 'react';
import PropTypes from 'prop-types';

import TVShowCard from './TVShowCard';

const TVShowsBox = (props) => {
    const {title, tvShows} = props;

    return (
        <div className='tv-shows-box'>
            <div className='tv-shows-box-title'>{title}</div>
            <div className='tv-shows-box-content'>
                {tvShows.map((tvShow, i) => <TVShowCard key={i} {...tvShow} />)}
            </div>
        </div>
    );
};

TVShowsBox.propTypes = {
    title: PropTypes.string,
    tvShows: PropTypes.object
}

export default TVShowsBox;