import React from 'react';
import PropTypes from 'prop-types';

const ImgBasic = (props) => {
    const {className, src, alt} = props;

    return (
        <img className={className} src={src} alt={alt} />
    );
};

ImgBasic.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string
};

export default ImgBasic;