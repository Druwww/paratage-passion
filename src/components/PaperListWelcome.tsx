import React from 'react';
import {List, Paper} from "@mantine/core";

interface PaperListWelcomeParams {
    data : string[]
}

function PaperListWelcome(props:PaperListWelcomeParams) {

    return (
        <React.Fragment>
            <Paper style={{textAlign:"left"}} shadow="sm" p="md">
                <List>
                    {props.data.map(elem =>
                        <List.Item>
                                {elem}
                        </List.Item>
                    )}
                </List>
            </Paper>
        </React.Fragment>
    );
}

export default PaperListWelcome;