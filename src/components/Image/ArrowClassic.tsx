import React, {useEffect, useState} from 'react';
import Xarrow, {anchorType} from "react-xarrows";

interface ArrowClassicParams {
    start : string
    end : string
    startAnchor?: anchorType
    endAnchor?: anchorType
    color? : string
    animateDrawing? : boolean | number
    delay? : number
}

/**
 * @param {ArrowClassicParams} props - Object with parameters
 * @param {string}  props.start - Start object Reference for the arrow
 * @param {string}  props.end - End object Reference for the arrow
 * @param {anchorType}  [props.startAnchor] - Start object anchor where the arrow will be fixed
 * @param {anchorType}  [props.endAnchor] - End object anchor where the arrow will be fixed
 * @param {string}  [props.color] - Arrow color
 * @param {boolean|number}  [props.animateDrawing] - arrow drawing animation in second
 * @param {number}  [props.delay] - Number of second before the arrow appear
 * @returns {React.Fragment} - An arrow between the two object id
 */
function ArrowClassic(props: ArrowClassicParams) {

    const [display, setDisplay] = useState(!props.delay);

    useEffect(() => {
        setTimeout(function() { //Start the timer
            setDisplay(true)
        }, props.delay)
    }, [])


    return (
        <React.Fragment>
            {display ?
                <Xarrow
                    start={props.start}
                    end={props.end}
                    endAnchor={props.endAnchor}
                    startAnchor={props.startAnchor}
                    color={props.color}
                    animateDrawing={props.animateDrawing}
                />
            :
                <></>
            }

        </React.Fragment>
    );
}

export default ArrowClassic;