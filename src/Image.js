import React, {Suspense, lazy} from 'react';

import PhotoHolder from './PhotoHolder';

const Img = lazy(() => import('./ImageBasic'));

const Image = (props) => {
    return (
        <Suspense fallback={<PhotoHolder />}>
            <Img {...props} />
        </Suspense>
    );
};

export default Image;