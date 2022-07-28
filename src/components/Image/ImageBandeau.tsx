import React from 'react';

import {Image} from '@mantine/core';

interface ImageBandeauParams {
    src : string,
    alt : string,
}

/**
 * @param {ImageAnimatedParams} props - Object with parameters
 * @param {string}  props.src - Image source
 * @param {string}  props.alt - Image alt
 * @returns {React.Fragment} - Background image for the page top
 */
function ImageBandeau(props: ImageBandeauParams) {

    return (
        <React.Fragment>
                <Image
                    radius="md"
                    src={props.src}
                    alt={props.alt}
                    height={175}
                />
        </React.Fragment>
    );
}

export default ImageBandeau;