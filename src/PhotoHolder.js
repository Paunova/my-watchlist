import React from 'react';

import cameraIcon from './assets/camera.png';

const PhotoHolder = () => {
    return (
        <div className='photo-holder'>
            <img className='photo-holder-img' src={cameraIcon} alt='img' />
        </div>
    );
};

export default PhotoHolder;