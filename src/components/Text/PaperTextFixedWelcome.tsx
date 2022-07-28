// @ts-ignore
import React, {useEffect} from 'react';
import {Paper, Text} from "@mantine/core";
import {useXarrow} from "react-xarrows";

interface PaperTextFixedWelcomeParams {
    id? : string
    data : string
    color?: string
}

/**
 * @param {PaperTextFixedWelcomeParams} props - Object with parameters
 * @param {string}  [props.id] - Component id
 * @param {string}  props.data - Component text to display
 * @param {string}  [props.color] - Optional background color
 * @returns {React.Fragment} - Paper with text for the welcome page
 */
function PaperTextFixedWelcome(props:PaperTextFixedWelcomeParams) {

    const updateXarrow = useXarrow()


    useEffect(() =>{
        updateXarrow();
    }, [])

    return (
        <React.Fragment>
                <Paper
                    id={props.id}
                    shadow="sm"
                    p="md"
                    sx={(theme) => ({
                        backgroundColor: props.color,
                    })}

                >
                    <Text weight={700} >
                        {props.data}
                    </Text>
                </Paper>
        </React.Fragment>
    );
}

export default PaperTextFixedWelcome;