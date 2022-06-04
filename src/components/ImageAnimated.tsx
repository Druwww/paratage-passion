import React from 'react';

import {Image} from '@mantine/core';
import {useSpring, animated} from "react-spring";

interface ImageAnimatedParams {
    src : string,
    alt : string,
    faded? :boolean
}

function ImageAnimated(props: ImageAnimatedParams) {

    const animations = useSpring({
        to: { opacity: 1 },
        from: { opacity: props.faded ? 0 : 1 },
        delay: 2500
    })

    return (
        <React.Fragment>
            <animated.div style={{...animations}}>
                <Image
                    radius="md"
                    src={props.src}
                    alt={props.alt}
                />
            </animated.div>
        </React.Fragment>
    );
}

export default ImageAnimated;