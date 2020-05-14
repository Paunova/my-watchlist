import React from 'react';
import PropTypes from 'prop-types';

import Image from './Image';

import {getImdbLink, getNetflixLink} from './helpers/linkUtils';

const TVShowCard = (props) => {
    const {img, title, imdbId, netflixId} = props;

    return (
        <div className='tv-show-card'>
            <div className='tv-show-title'>
                <a href={getNetflixLink(netflixId)} target='_blank' rel='noopener noreferrer'>
                    {title}
                </a>
            </div>
            <a href={getImdbLink(imdbId)} target='_blank' rel='noopener noreferrer'>
                <Image className='tv-show-img' src={img} alt={title} />
            </a>
        </div>
    );
};

TVShowCard.propTypes = {
    img: PropTypes.string,
    imdbId: PropTypes.string,
    netflixId: PropTypes.string
}

export default TVShowCard;