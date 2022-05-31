// @ts-ignore
import React from 'react';
import {Paper, Text} from "@mantine/core";

interface PaperTextWelcomeParams {
    data : string
    color?: string
}

function PaperTextWelcome(props:PaperTextWelcomeParams) {

    return (
        <React.Fragment>
            <Paper
                shadow="sm"
                p="md"
                sx={(theme) => ({
                    backgroundColor: props.color,
                })}
            >
                <Text weight={700}>
                    {props.data}
                </Text>
            </Paper>
        </React.Fragment>
    );
}

export default PaperTextWelcome;