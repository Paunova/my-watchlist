import React from 'react';
import PropTypes from 'prop-types';

import TVShowCard from './TVShowCard';

const TVShowsBox = (props) => {
    const {tvShows} = props;

    return (
        <div className='tv-shows-box'>
            {tvShows.map((tvShow, i) => <TVShowCard key={i} {...tvShow} />)}
        </div>
    );
};

TVShowsBox.propTypes = {
    tvShows: PropTypes.object
}

export default TVShowsBox;