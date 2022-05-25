// @ts-ignore
import React from 'react';
import {Paper, Text} from "@mantine/core";

interface PaperTextWelcomeParams {
    data : string
}

function PaperTextWelcome(props:PaperTextWelcomeParams) {

    return (
        <React.Fragment>
            <Paper shadow="sm" p="md">
                <Text>
                    {props.data}
                </Text>
            </Paper>
        </React.Fragment>
    );
}

export default PaperTextWelcome;